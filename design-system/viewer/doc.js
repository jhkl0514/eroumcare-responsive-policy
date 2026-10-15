/* 문서 뷰어 공통 스크립트: 메뉴 · 탭 · 목차 · 구조 번호 · 치수선 · 코드 복사
   컴포넌트 페이지는 마크업만 쓰고, 이 파일이 화면 장치를 붙인다. */
(function () {
  'use strict';
  // 손으로 만든 문서 페이지가 있는 항목. 나머지는 기존 뷰어로 연결한다.
  var PAGES = { 'Text input': 'text-input.html', 'Select': 'select.html', 'Textarea': 'textarea.html', 'Button': 'button.html', 'Status Chip': 'status-chip.html', 'Modal': 'modal.html', 'Color': 'color.html', 'Typography': 'typography.html', 'Shape': 'shape.html', 'Layout': 'layout.html', 'Icon': 'icon.html' };
  var LEGACY = 'index.html?item=';

  /* ---------- 왼쪽 메뉴 ---------- */
  function renderNav(nav) {
    var side = document.getElementById('doc-side');
    if (!side) return;
    var current = document.body.dataset.page;
    side.innerHTML = nav.map(function (g) {
      return '<div class="doc-side__group"><p class="doc-side__title">' + g.group + '</p><ul class="doc-side__list">' +
        g.items.map(function (it) {
          var href = PAGES[it.title] ? PAGES[it.title] : LEGACY + encodeURIComponent(it.title);
          var todo = it.status === 'todo';
          return '<li><a class="doc-side__link' + (todo ? ' is-todo' : '') + '" href="' + href + '"' +
            (it.title === current ? ' aria-current="page"' : '') + '><span>' + it.title + '</span>' +
            (todo ? '<span class="doc-side__tag">준비 중</span>' : '') + '</a></li>';
        }).join('') + '</ul></div>';
    }).join('');
  }
  function loadNav() {
    if (window.DS_NAV) return renderNav(window.DS_NAV);
    fetch('../nav.json').then(function (r) { return r.json(); }).then(renderNav).catch(function () {});
  }

  /* ---------- 디자인 / 개발 탭 ---------- */
  function initTabs() {
    var tabs = document.querySelectorAll('.doc-tab');
    function select(id, push) {
      tabs.forEach(function (t) {
        var on = t.dataset.tab === id;
        t.setAttribute('aria-selected', on ? 'true' : 'false');
        document.getElementById(t.getAttribute('aria-controls')).hidden = !on;
      });
      if (push) history.replaceState(null, '', id === 'dev' ? '#dev' : location.pathname + location.search);
      buildToc();
      requestAnimationFrame(drawAll);
    }
    tabs.forEach(function (t) { t.addEventListener('click', function () { select(t.dataset.tab, true); }); });
    select(location.hash === '#dev' ? 'dev' : 'design', false);
  }

  /* ---------- 오른쪽 목차 ---------- */
  var tocLinks = [];
  function buildToc() {
    var toc = document.getElementById('doc-toc-links');
    if (!toc) return;
    var panel = document.querySelector('[role="tabpanel"]:not([hidden])');
    var heads = panel ? panel.querySelectorAll('.doc-h2[id]') : [];
    toc.innerHTML = Array.prototype.map.call(heads, function (h) {
      return '<a href="#' + h.id + '">' + h.textContent + '</a>';
    }).join('');
    tocLinks = Array.prototype.slice.call(toc.querySelectorAll('a'));
    spy();
  }
  function spy() {
    var y = window.scrollY + 120, active = null;
    tocLinks.forEach(function (a) {
      var h = document.getElementById(a.getAttribute('href').slice(1));
      if (h && h.getBoundingClientRect().top + window.scrollY <= y) active = a;
    });
    if (!active && tocLinks.length) active = tocLinks[0];
    tocLinks.forEach(function (a) { a.classList.toggle('is-active', a === active); });
  }

  /* ---------- 구조(Anatomy) 번호 ---------- */
  function rel(el, box) {
    var r = el.getBoundingClientRect(), b = box.getBoundingClientRect();
    return { l: r.left - b.left, t: r.top - b.top, r: r.right - b.left, b: r.bottom - b.top, w: r.width, h: r.height };
  }
  function drawAnatomy(root) {
    root.querySelectorAll('.doc-anat__mark, .doc-anat__line').forEach(function (n) { n.remove(); });
    if (!root.offsetParent) return;
    root.querySelectorAll('[data-anat]').forEach(function (el) {
      var p = rel(el, root), side = el.dataset.anatSide || 'top', gap = +(el.dataset.anatGap || 28);
      var ax, ay, mx, my;
      if (side === 'top') { ax = p.l + p.w / 2; ay = p.t; mx = ax; my = ay - gap; }
      if (side === 'bottom') { ax = p.l + p.w / 2; ay = p.b; mx = ax; my = ay + gap; }
      if (side === 'left') { ax = p.l; ay = p.t + p.h / 2; mx = ax - gap; my = ay; }
      if (side === 'right') { ax = p.r; ay = p.t + p.h / 2; mx = ax + gap; my = ay; }
      if (el.dataset.anatX) { ax = p.l + p.w * +el.dataset.anatX; mx = ax; }
      var line = document.createElement('span');
      line.className = 'doc-anat__line';
      if (side === 'top' || side === 'bottom') {
        line.style.cssText = 'left:' + ax + 'px;top:' + Math.min(ay, my) + 'px;width:1px;height:' + Math.abs(my - ay) + 'px';
      } else {
        line.style.cssText = 'top:' + ay + 'px;left:' + Math.min(ax, mx) + 'px;height:1px;width:' + Math.abs(mx - ax) + 'px';
      }
      var mark = document.createElement('span');
      mark.className = 'doc-anat__mark';
      mark.textContent = el.dataset.anat;
      mark.style.left = mx + 'px';
      mark.style.top = my + 'px';
      root.appendChild(line);
      root.appendChild(mark);
    });
  }

  /* ---------- 치수선 ----------
     data-dims='[{"d":"y","a":".ds-input","from":"top","to":"bottom","at":"right","off":16}, ...]'
     d:"x" 가로(from/to = left|right, b가 있으면 b 기준 to), at = top|bottom|mid
     d:"y" 세로(from/to = top|bottom), at = left|right|mid  */
  function pick(p, k) {
    return { left: p.l, right: p.r, top: p.t, bottom: p.b, midx: p.l + p.w / 2, mid: null }[k];
  }
  function drawDims(root) {
    root.querySelectorAll('.doc-dim, .doc-dim-area').forEach(function (n) { n.remove(); });
    if (!root.offsetParent) return;
    var specs;
    try { specs = JSON.parse(root.dataset.dims || '[]'); } catch (e) { return; }
    specs.forEach(function (s) {
      var a = root.querySelector(s.a), b = s.b ? root.querySelector(s.b) : a;
      var c = s.on ? root.querySelector(s.on) : a;
      if (!a || !b || !c) return;
      var pa = rel(a, root), pb = rel(b, root), pc = rel(c, root), off = s.off || 0;
      var el = document.createElement('span');
      var lab = document.createElement('span');
      lab.className = 'doc-dim__label';
      var v;
      if (s.d === 'x') {
        var x1 = pick(pa, s.from), x2 = pick(pb, s.to);
        var y = s.at === 'bottom' ? pc.b : s.at === 'mid' ? pc.t + pc.h / 2 : pc.t;
        y += off;
        v = Math.abs(x2 - x1);
        el.className = 'doc-dim doc-dim--h' + (s.below ? ' is-below' : '');
        el.style.cssText = 'left:' + Math.min(x1, x2) + 'px;top:' + y + 'px;width:' + v + 'px';
        if (s.area) {
          var ar = document.createElement('span');
          ar.className = 'doc-dim-area';
          ar.style.cssText = 'left:' + Math.min(x1, x2) + 'px;top:' + pc.t + 'px;width:' + v + 'px;height:' + pc.h + 'px';
          root.appendChild(ar);
        }
      } else {
        var y1 = pick(pa, s.from), y2 = pick(pb, s.to);
        var x = s.at === 'left' ? pc.l : s.at === 'mid' ? pc.l + pc.w / 2 : pc.r;
        x += off;
        v = Math.abs(y2 - y1);
        el.className = 'doc-dim doc-dim--v' + (s.labelLeft ? ' is-left' : '');
        el.style.cssText = 'top:' + Math.min(y1, y2) + 'px;left:' + x + 'px;height:' + v + 'px';
        if (s.area) {
          var ar2 = document.createElement('span');
          ar2.className = 'doc-dim-area';
          ar2.style.cssText = 'top:' + Math.min(y1, y2) + 'px;left:' + pc.l + 'px;height:' + v + 'px;width:' + pc.w + 'px';
          root.appendChild(ar2);
        }
      }
      lab.textContent = s.label || String(Math.round(v));
      el.appendChild(lab);
      root.appendChild(el);
    });
  }
  function drawAll() {
    document.querySelectorAll('.doc-anat').forEach(drawAnatomy);
    document.querySelectorAll('.doc-measure').forEach(drawDims);
  }

  /* ---------- 코드 복사 ---------- */
  function initCopy() {
    document.querySelectorAll('.doc-code').forEach(function (box) {
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'doc-copy';
      btn.textContent = '복사';
      btn.addEventListener('click', function () {
        var text = box.querySelector('pre').innerText;
        var done = function () { btn.textContent = '복사됨'; setTimeout(function () { btn.textContent = '복사'; }, 1400); };
        if (navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done, done);
        else { var t = document.createElement('textarea'); t.value = text; document.body.appendChild(t); t.select(); try { document.execCommand('copy'); } catch (e) {} t.remove(); done(); }
      });
      box.appendChild(btn);
    });
  }

  /* ---------- 세그먼트 컨트롤(문서용) ---------- */
  function initSegs() {
    document.querySelectorAll('.doc-seg').forEach(function (seg) {
      seg.addEventListener('click', function (e) {
        var b = e.target.closest('button');
        if (!b) return;
        seg.querySelectorAll('button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
        seg.dispatchEvent(new CustomEvent('doc-seg', { detail: b.dataset.value, bubbles: true }));
      });
    });
  }

  function initMenu() {
    var btn = document.getElementById('doc-menu-btn');
    if (!btn) return;
    btn.addEventListener('click', function () {
      var open = document.body.classList.toggle('is-nav-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.addEventListener('click', function (e) {
      if (document.body.classList.contains('is-nav-open') && !e.target.closest('#doc-side, #doc-menu-btn')) {
        document.body.classList.remove('is-nav-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  window.DOC = { redraw: drawAll };
  document.addEventListener('DOMContentLoaded', function () {
    loadNav();
    initMenu();
    initSegs();
    initCopy();
    initTabs();
    window.addEventListener('scroll', spy, { passive: true });
    var t;
    window.addEventListener('resize', function () { clearTimeout(t); t = setTimeout(drawAll, 80); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(drawAll);
    drawAll();
  });
})();
