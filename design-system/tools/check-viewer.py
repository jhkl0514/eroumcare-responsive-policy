# 문서 페이지 점검: 기준 페이지(button.html 등)와 같은 규칙을 지켰는지 확인한다.
# 실행: python3 design-system/tools/check-viewer.py [페이지.html ...]   (생략하면 viewer/ 아래 문서 페이지 전체)
# Playwright가 있으면 360 · 1440 폭으로 열어 가로 넘침과 스크립트 오류도 본다.
import re, sys, pathlib, html, subprocess, time, socket

DS = pathlib.Path(__file__).resolve().parent.parent          # design-system/
VIEWER = DS / 'viewer'
SKIP = {'index.html', 'item.html'}                            # 주소 연결 · 정리 전 문서 틀
pages = [VIEWER / p for p in sys.argv[1:]] or sorted(p for p in VIEWER.glob('*.html') if p.name not in SKIP)

def section(src, start, end):
    i = src.find(start); j = src.find(end, i + 1) if i >= 0 else -1
    return src[i:j] if i >= 0 and j > i else ''

def visible_text(fragment):
    fragment = re.sub(r'<(script|style|pre|code)\b.*?</\1>', ' ', fragment, flags=re.S)
    return html.unescape(re.sub(r'<[^>]+>', ' ', fragment))

problems = 0
for p in pages:
    src = p.read_text(encoding='utf-8')
    errs = []
    # 1. 틀: 탭 · 목차 · 정책 허브 링크 · 공통 파일
    for need, why in [('doc-tabs', '[디자인|개발] 탭'), ('doc-toc', '오른쪽 목차'), ('../../index.html', '← 정책 허브 링크'),
                      ('../css/tokens.css', 'tokens.css'), ('../css/components.css', 'components.css'), ('doc.css', 'doc.css'), ('doc.js', 'doc.js')]:
        if need not in src: errs.append(f'{why} 없음')
    # 2. id 중복 (getElementById가 엉뚱한 요소를 잡는다)
    ids = re.findall(r'\sid="([^"]+)"', src)
    dup = sorted({i for i in ids if ids.count(i) > 1})
    if dup: errs.append('id 중복: ' + ', '.join(dup))
    # 3. 디자인 탭에는 클래스명 · 토큰 · 코드 복사 금지
    design = section(src, 'id="panel-design"', 'id="panel-dev"')
    if design:
        txt = visible_text(design)
        hits = sorted(set(re.findall(r'(?<![\w-])(?:\.ds-[\w-]+|ds-[a-z]+(?:__|--)[\w-]+|--ds-[\w-]+)', txt)))
        if hits: errs.append('디자인 탭 글에 클래스명·토큰: ' + ', '.join(hits[:6]))
        if 'doc-copy' in design: errs.append('디자인 탭에 코드 복사 버튼')
    # 4. 번호 원(data-anat)은 구조(anatomy) 섹션에서만
    anat = section(src, 'id="anatomy"', '</section>')
    if src.count('data-anat="') > anat.count('data-anat="'):
        errs.append('구조 섹션이 아닌 곳에 번호 원(data-anat)')
    # 5. 장식 금지: 색 띠(위쪽 굵은 테두리) · 그라데이션 · 이모지
    if re.search(r'border-top:\s*[3-9]px', src): errs.append('위쪽 색 띠(border-top 3px 이상)')
    if any('rgba(255,255,255,0)' not in l for l in src.splitlines() if 'linear-gradient' in l): errs.append('그라데이션 장식 (하단 고정 영역의 흰색 페이드만 허용)')
    if re.search('[\U0001F300-\U0001FAFF]', visible_text(src)): errs.append('이모지')
    # 6. 개인정보: 실제처럼 보이는 전화번호
    if re.search(r'01[016789]-?[1-9]\d{3}-?\d{4}', visible_text(src)): errs.append('실제 같은 전화번호 — 010-0000-0000 같은 가짜 값만')
    if errs:
        problems += len(errs)
        print(f'✗ {p.name}'); [print('   -', e) for e in errs]
    else:
        print(f'✓ {p.name}')

# 7. 화면 점검 (Playwright가 있을 때만)
try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print('\n(Playwright 없음 — 360 · 1440 화면 점검은 건너뜀. 설치: pip install playwright && playwright install chromium)')
    sys.exit(1 if problems else 0)

s = socket.socket(); s.bind(('127.0.0.1', 0)); port = s.getsockname()[1]; s.close()
server = subprocess.Popen([sys.executable, '-m', 'http.server', str(port), '--bind', '127.0.0.1'], cwd=DS.parent,
                          stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
time.sleep(0.8)
shots = DS / 'viewer' / '_review'; shots.mkdir(exist_ok=True)
try:
    with sync_playwright() as pw:
        b = pw.chromium.launch()
        for p in pages:
            for w in (360, 1440):
                pg = b.new_page(viewport={'width': w, 'height': 900}); errs = []
                pg.on('pageerror', lambda e: errs.append(str(e)))
                pg.goto(f'http://127.0.0.1:{port}/design-system/viewer/{p.name}'); pg.wait_for_timeout(600)
                sw = pg.evaluate('document.documentElement.scrollWidth')
                if sw > w: errs.append(f'가로 넘침 {sw}px')
                pg.screenshot(path=str(shots / f'{p.stem}-{w}.png'), full_page=True)
                if errs:
                    problems += len(errs); print(f'✗ {p.name} @{w}:', '; '.join(errs))
                pg.close()
        b.close()
    print(f'\n화면 캡처: {shots.relative_to(DS.parent)}/ — 눈으로 직접 열어 확인할 것')
finally:
    server.terminate()
sys.exit(1 if problems else 0)
