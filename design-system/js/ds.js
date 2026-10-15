/* 이로움케어 DS 공통 동작 — 입력칸 지우기(X) · 셀렉트(SelectField + OptionGroup)
   마크업만 맞추면 자동으로 붙는다. 새로 그린 요소는 DS.init(root)로 다시 연결한다.
   정책: 3-2 지우기 버튼(값만 지우고 포커스 유지), 3-3·3-5 오버레이는 하나만 열린다. */
(function () {
  'use strict';
  var openSelect = null;

  function initClear(root) {
    root.querySelectorAll('.ds-input__clear:not([data-ds-bound])').forEach(function (btn) {
      btn.setAttribute('data-ds-bound', '');
      btn.addEventListener('mousedown', function (e) { e.preventDefault(); }); // 포커스 유지
      btn.addEventListener('click', function () {
        var input = btn.closest('.ds-input').querySelector('.ds-input__control');
        if (!input) return;
        input.value = '';
        input.dispatchEvent(new Event('input', { bubbles: true }));
        input.focus();
      });
    });
  }

  function options(sel) {
    return Array.prototype.slice.call(sel.querySelectorAll('.ds-select__option'));
  }
  function enabled(opt) {
    return opt.getAttribute('aria-disabled') !== 'true' && !opt.disabled;
  }
  function close(sel, focusTrigger) {
    if (!sel) return;
    var trigger = sel.querySelector('.ds-select__trigger');
    var list = sel.querySelector('.ds-select__list');
    trigger.setAttribute('aria-expanded', 'false');
    list.hidden = true;
    if (openSelect === sel) openSelect = null;
    if (focusTrigger) trigger.focus();
  }
  function open(sel) {
    if (openSelect && openSelect !== sel) close(openSelect);
    var trigger = sel.querySelector('.ds-select__trigger');
    var list = sel.querySelector('.ds-select__list');
    trigger.setAttribute('aria-expanded', 'true');
    list.hidden = false;
    openSelect = sel;
    var current = options(sel).filter(function (o) { return o.getAttribute('aria-selected') === 'true'; })[0];
    if (current) {
      list.scrollTop = current.offsetTop - list.clientHeight / 2 + current.offsetHeight / 2;
    }
  }
  function choose(sel, opt) {
    if (!enabled(opt)) return;
    options(sel).forEach(function (o) { o.setAttribute('aria-selected', o === opt ? 'true' : 'false'); });
    var value = sel.querySelector('.ds-select__value');
    value.textContent = opt.textContent.trim();
    value.classList.remove('ds-is-placeholder');
    sel.querySelector('.ds-select__trigger').classList.remove('ds-is-inactive');
    sel.dispatchEvent(new CustomEvent('ds-change', { bubbles: true, detail: { value: opt.dataset.value || value.textContent } }));
    close(sel, true);
  }
  function move(sel, from, step) {
    var list = options(sel).filter(enabled);
    if (!list.length) return;
    var i = list.indexOf(from);
    var next = list[(i + step + list.length) % list.length] || list[0];
    next.focus();
  }

  function initSelect(root) {
    root.querySelectorAll('.ds-select:not([data-ds-bound])').forEach(function (sel) {
      var trigger = sel.querySelector('.ds-select__trigger');
      var list = sel.querySelector('.ds-select__list');
      if (!trigger || !list || list.hasAttribute('data-static')) return;
      sel.setAttribute('data-ds-bound', '');
      list.hidden = true;
      options(sel).forEach(function (o) { o.tabIndex = -1; });

      trigger.addEventListener('click', function () {
        if (trigger.disabled || trigger.classList.contains('ds-is-readonly')) return;
        if (trigger.getAttribute('aria-expanded') === 'true') close(sel); else open(sel);
      });
      trigger.addEventListener('keydown', function (e) {
        if (trigger.disabled || trigger.classList.contains('ds-is-readonly')) return;
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
          e.preventDefault();
          open(sel);
          var cur = options(sel).filter(function (o) { return o.getAttribute('aria-selected') === 'true'; })[0];
          (cur && enabled(cur) ? cur : options(sel).filter(enabled)[0]).focus();
        } else if (e.key === 'Escape' && trigger.getAttribute('aria-expanded') === 'true') {
          e.stopPropagation();
          close(sel);
        }
      });
      list.addEventListener('click', function (e) {
        var opt = e.target.closest('.ds-select__option');
        if (opt) choose(sel, opt);
      });
      list.addEventListener('keydown', function (e) {
        var opt = e.target.closest('.ds-select__option');
        if (!opt) return;
        if (e.key === 'ArrowDown') { e.preventDefault(); move(sel, opt, 1); }
        else if (e.key === 'ArrowUp') { e.preventDefault(); move(sel, opt, -1); }
        else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); choose(sel, opt); }
        else if (e.key === 'Escape' || e.key === 'Tab') { if (e.key === 'Escape') e.stopPropagation(); close(sel, e.key === 'Escape'); }
      });
    });
  }


  /* Textarea 글자 수: .ds-textarea 안 .ds-textarea__count가 있으면 입력할 때마다 갱신 */
  function initCount(root) {
    root.querySelectorAll('.ds-textarea:not([data-ds-bound])').forEach(function (box) {
      var ta = box.querySelector('.ds-textarea__control');
      var count = box.querySelector('.ds-textarea__count');
      if (!ta || !count) return;
      box.setAttribute('data-ds-bound', '');
      // 최대 글자 수: maxlength 우선, 없으면 표시 문구의 "/200"에서 읽는다
      var m = /\/(\d+)/.exec(count.textContent);
      var max = +ta.getAttribute('maxlength') || (m ? +m[1] : 0);
      if (max && !ta.hasAttribute('maxlength')) ta.setAttribute('maxlength', max);
      function update() {
        count.textContent = ta.value.length + (max ? '/' + max : '') + '자';
        count.classList.toggle('ds-is-over', max && ta.value.length >= max);
      }
      ta.addEventListener('input', update);
      update();
    });
  }

  /* Modal: [data-ds-open="#id"]로 열고, 닫기 버튼 · 딤 클릭 · Esc로 닫는다. 열린 오버레이는 하나만(정책 3-3) */
  var openModal = null, lastTrigger = null;
  function showModal(backdrop, trigger) {
    if (openModal) hideModal(openModal);
    if (openSelect) close(openSelect);
    backdrop.hidden = false;
    openModal = backdrop;
    lastTrigger = trigger || null;
    var f = backdrop.querySelector('.ds-modal__close, button, [href], input, select, textarea');
    if (f) f.focus({ focusVisible: false });
  }
  function hideModal(backdrop) {
    backdrop.hidden = true;
    if (openModal === backdrop) openModal = null;
    if (lastTrigger) { lastTrigger.focus(); lastTrigger = null; }
  }
  document.addEventListener('click', function (e) {
    var t = e.target.closest('[data-ds-open]');
    if (t) { var m = document.querySelector(t.getAttribute('data-ds-open')); if (m) showModal(m, t); return; }
    if (e.target.closest('.ds-modal__close, [data-ds-close]')) { var b = e.target.closest('.ds-modal-backdrop'); if (b) hideModal(b); return; }
    if (e.target.classList && e.target.classList.contains('ds-modal-backdrop')) hideModal(e.target);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && openModal && !openSelect) hideModal(openModal);
  });

  document.addEventListener('mousedown', function (e) {
    if (openSelect && !openSelect.contains(e.target)) close(openSelect);
  });

  /* 체크박스 "전체" 묶음(정책 3-7): [data-ds-check-all] 안에서 value="all"(또는 data-ds-all)이 전체.
     전체를 켜면 모두 켜지고 끄면 모두 꺼진다. 항목이 모두 켜지면 전체도 켜지고, 하나라도 꺼지면 전체가 꺼진다. */
  function initCheckAll(root) {
    root.querySelectorAll('[data-ds-check-all]:not([data-ds-bound])').forEach(function (group) {
      group.setAttribute('data-ds-bound', '');
      var boxes = Array.prototype.slice.call(group.querySelectorAll('input[type="checkbox"]'));
      var all = boxes.filter(function (b) { return b.value === 'all' || b.hasAttribute('data-ds-all'); })[0];
      if (!all) return;
      var items = boxes.filter(function (b) { return b !== all && !b.disabled; });
      group.addEventListener('change', function (e) {
        if (e.target === all) items.forEach(function (b) { b.checked = all.checked; });
        else if (items.indexOf(e.target) > -1) all.checked = items.every(function (b) { return b.checked; });
      });
    });
  }

  function init(root) {
    root = root || document;
    initClear(root);
    initSelect(root);
    initCount(root);
    initCheckAll(root);
  }
  window.DS = { init: init, closeSelect: close, openModal: showModal, closeModal: hideModal };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { init(); });
  else init();
})();
