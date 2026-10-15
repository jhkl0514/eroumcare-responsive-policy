# 문서 페이지 조립: viewer/src/<slug>.html 의 메타·본문·스크립트를 공통 껍데기에 넣어 viewer/<slug>.html 을 만든다.
# 실행: python3 design-system/tools/build-viewer.py   (text-input.html · select.html 은 손으로 쓴 페이지라 대상이 아님)
import re, pathlib, sys
G = pathlib.Path(__file__).resolve().parent.parent  # design-system/
SHELL = '''<!doctype html>
<html lang="ko">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>{title} · 이로움케어 디자인 시스템</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/sunn-us/SUIT@2/fonts/static/woff2/SUIT.css">
<link rel="stylesheet" href="../css/tokens.css">
<link rel="stylesheet" href="../css/typography.css">
<link rel="stylesheet" href="../css/components.css">
<link rel="stylesheet" href="doc.css">
<script defer src="../js/ds.js"></script>
<script defer src="doc.js"></script>
</head>
<body data-page="{title}">
<header class="doc-header">
  <button class="doc-menu-btn" id="doc-menu-btn" type="button" aria-label="메뉴" aria-expanded="false"><svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button>
  <a class="doc-brand" href="overview.html"><strong>이로움케어</strong><span>디자인 시스템</span></a>
  <span class="doc-header__spacer"></span>
  <a class="doc-hub-link" href="../../index.html">← 정책 허브</a>
</header>

<div class="doc-shell">
  <nav class="doc-side" id="doc-side" aria-label="디자인 시스템 메뉴"></nav>

  <main class="doc-main">
    <div class="doc-content">
      <p class="doc-crumb">{crumb}</p>
      <h1 class="doc-h1">{title}</h1>
      <p class="doc-lead">{lead}</p>
      <div class="doc-meta">
{meta}
      </div>

      <div class="doc-tabs" role="tablist" aria-label="문서 보기">
        <button class="doc-tab" role="tab" id="tab-design" data-tab="design" aria-controls="panel-design" aria-selected="true">디자인</button>
        <button class="doc-tab" role="tab" id="tab-dev" data-tab="dev" aria-controls="panel-dev" aria-selected="false">개발</button>
      </div>

      <div id="panel-design" role="tabpanel" aria-labelledby="tab-design">
{design}
      </div>

      <div id="panel-dev" role="tabpanel" aria-labelledby="tab-dev" hidden>
{dev}
      </div>
    </div>
  </main>

  <aside class="doc-toc" aria-label="이 페이지에서">
    <p class="doc-toc__title">이 페이지에서</p>
    <nav id="doc-toc-links"></nav>
  </aside>
</div>
{after}
<script>
window.addEventListener('load', function () {{
{script}
}});
</script>
</body>
</html>
'''
def part(src, name):
    m = re.search(r'<!--@' + name + r'-->(.*?)<!--/@' + name + r'-->', src, re.S)
    return m.group(1).strip('\n') if m else ''
for f in sorted((G/'viewer'/'src').glob('*.html')):
    src = f.read_text()
    out = SHELL.format(**{k: part(src, k) for k in ['title','crumb','lead','meta','design','dev','after','script']})
    (G/'viewer'/f.name).write_text(out)
    print('built', f.name)
