#!/usr/bin/env python3
"""CLAUDE.md 본문을 허브(index.html) SECTIONS로 옮긴다.

사용: python3 tools/sync-hub.py s33=3-3 s41=4-1 s5=5
  - 왼쪽은 index.html의 SECTIONS 키, 오른쪽은 CLAUDE.md 조항 번호
  - "3-3"처럼 하이픈이 있으면 ### 제목, "5"처럼 숫자만 있으면 ## 제목을 찾는다
  - 변환 범위: 문단, 글머리표(들여쓰기 2칸 = 하위 목록), 표, **굵게**, `코드`, "→ 파일" 줄
CLAUDE.md를 고친 뒤 이 스크립트로 허브를 맞추면 두 곳이 어긋나지 않는다(스킬 파일은 요약본이라 직접 고친다).
"""
import re, sys, html as H, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def inline(t):
    t = H.escape(t, quote=False)
    t = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', t)
    t = re.sub(r'`([^`]+)`', r'<span class="mono">\1</span>', t)
    return t

def conv(body):
    out, stack = [], []
    lines = body.strip('\n').split('\n'); i = 0
    def close_to(level):
        while stack and stack[-1] > level:
            out.append('</li></ul>'); stack.pop()
    while i < len(lines):
        ln = lines[i]; s = ln.strip()
        if s in ('', '---'):
            i += 1; continue
        if s.startswith('|'):
            tbl = []
            while i < len(lines) and lines[i].strip().startswith('|'):
                tbl.append(lines[i].strip()); i += 1
            rows = [[c.strip() for c in r.strip('|').split('|')] for r in tbl if not re.match(r'^\|[\s\-|]+\|$', r)]
            out.append('<table class="policy-table"><thead><tr>' + ''.join('<th>' + inline(c) + '</th>' for c in rows[0]) +
                       '</tr></thead><tbody>' + ''.join('<tr>' + ''.join('<td>' + inline(c) + '</td>' for c in r) + '</tr>' for r in rows[1:]) +
                       '</tbody></table>')
            continue
        m = re.match(r'^(\s*)- (.*)$', ln)
        if m:
            ind = len(m.group(1))
            if not stack or ind > stack[-1]:
                out.append('<ul><li>'); stack.append(ind)
            else:
                close_to(ind); out.append('</li><li>')
            out.append(inline(m.group(2))); i += 1; continue
        close_to(-1)
        out.append(('<p class="proto-ref">' if s.startswith('→') else '<p>') + inline(s) + '</p>')
        i += 1
    close_to(-1)
    return ''.join(out)

def grab(md, num):
    lvl = '###' if '-' in num else '##'
    m = re.search(r'^' + lvl + ' (' + re.escape(num) + r'\. .*)$', md, flags=re.M)
    if not m:
        sys.exit('CLAUDE.md에서 조항을 못 찾음: ' + num)
    st = m.end(); nx = re.search(r'^#{2,3} ', md[st:], flags=re.M)
    return m.group(1).strip(), md[st:st + nx.start()] if nx else md[st:]

def put(idx, key, title, body):
    h = conv(body).replace('\\', '\\\\').replace("'", "\\'")
    start = idx.index('\n  ' + key + ': {')
    nxt = re.search(r'\n  s\d+: \{|\n\};', idx[start + 5:])
    end = start + 5 + nxt.start()
    return idx[:start] + '\n  ' + key + ': { title:"' + title.replace('"', '\\"') + '", html:\n    \'' + h + '\' },' + idx[end:]

if __name__ == '__main__':
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    md = open(os.path.join(ROOT, 'CLAUDE.md'), encoding='utf-8').read()
    path = os.path.join(ROOT, 'index.html')
    idx = open(path, encoding='utf-8').read()
    for arg in sys.argv[1:]:
        key, num = arg.split('=')
        title, body = grab(md, num)
        idx = put(idx, key, title, body)
    open(path, 'w', encoding='utf-8').write(idx)
    print('synced', ' '.join(sys.argv[1:]))
