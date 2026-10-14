(() => {
  const ROOT = "../";
  const FOUNDATION_MAP = {
    Color: { id: "color", description: "브랜드와 상태를 전달하는 색상 체계입니다." },
    Typography: { id: "typography", description: "실제 문장과 함께 글자 단계·행간·굵기를 비교합니다." },
    Shape: { id: "shape", description: "표면의 모서리, 테두리, 그림자 규칙입니다." },
    Layout: { id: "layout", description: "화면과 오버레이가 폭에 따라 배치되는 기준입니다." },
    Icon: { id: "icon", description: "화면 크기에 맞는 아이콘의 기본 표시 단위입니다." }
  };
  const COMPONENT_ORDER = ["anatomy", "variants", "sizes", "states", "usage", "dos"];
  const COMPONENT_META = {
    anatomy: { title: "구조", toc: "구조" }, variants: { title: "타입", toc: "타입" },
    sizes: { title: "크기", toc: "크기" }, states: { title: "상태", toc: "상태" },
    usage: { title: "사용 예", toc: "사용 예" }, dos: { title: "사용 원칙", toc: "사용 원칙" }
  };
  const state = { nav: [], selected: null, tokens: [], vars: new Map(), sourceMarkup: "", docOpen: false, selectedDetails: new Map(), tocObserver: null };
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = value => String(value ?? "").replace(/[&<>"']/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
  const fileUrl = file => new URL(file, location.href).href;

  async function fetchJson(file) {
    const response = await fetch(fileUrl(`${ROOT}${file}`), { cache: "no-cache" });
    if (!response.ok) throw new Error(`${file}: ${response.status}`);
    return response.json();
  }

  function cssVariables(css) {
    return new Map([...css.matchAll(/(--ds-[\w-]+)\s*:\s*([^;]+);/g)].map(match => [match[1], match[2].trim()]));
  }

  function resolveValue(value, variables = state.vars) {
    let result = String(value ?? "");
    for (let pass = 0; pass < 10; pass += 1) {
      const match = result.match(/var\((--[\w-]+)(?:\s*,\s*([^()]*))?\)/);
      if (!match) break;
      result = result.replace(match[0], variables.get(match[1]) || match[2] || "");
    }
    return result.trim();
  }

  async function loadTokens() {
    const [catalog, cssResponse] = await Promise.all([
      fetchJson("tokens.json"), fetch(fileUrl(`${ROOT}css/tokens.css`), { cache: "no-cache" })
    ]);
    if (!cssResponse.ok) throw new Error(`css/tokens.css: ${cssResponse.status}`);
    state.vars = cssVariables(await cssResponse.text());
    state.tokens = catalog.map(token => ({ ...token, raw: state.vars.get(token.token) || token.value, value: resolveValue(state.vars.get(token.token) || token.value) }));
  }

  function flatten(items = state.nav) { return items.flatMap(group => group.items.map(item => ({ ...item, group: group.group }))); }

  function slug(value) {
    return decodeURIComponent(String(value || "")).toLowerCase().replace(/[?#].*$/, "").replace(/\.md$/, "").replace(/[\s_]+/g, "-").replace(/[^a-z0-9가-힣/-]/g, "");
  }

  function readRequestedPage() {
    const all = flatten();
    const params = new URLSearchParams(location.search);
    let hash = decodeURIComponent(location.hash.replace(/^#/, ""));
    if (hash.includes("?")) {
      const legacy = new URLSearchParams(hash.slice(hash.indexOf("?") + 1));
      hash = legacy.get("item") || legacy.get("p") || hash.slice(hash.indexOf("?") + 1);
    }
    const candidates = [hash, params.get("item"), params.get("p")].filter(Boolean);
    for (const candidate of candidates) {
      const exact = all.find(item => item.file === candidate || item.title === candidate || item.file.split("#")[0] === candidate);
      if (exact) return exact;
      const normalized = slug(candidate);
      const match = all.find(item => slug(item.title) === normalized || slug(item.file) === normalized || slug(item.file.split("#")[0].split("/").pop()) === normalized);
      if (match) return match;
    }
    return all.find(item => item.title === "Color") || all[0];
  }

  function updateAddress(item) {
    const url = new URL(location.href);
    url.searchParams.delete("item");
    url.searchParams.delete("p");
    url.hash = encodeURIComponent(item.file);
    history.replaceState(null, "", url);
  }

  function buildNavigation() {
    const host = $("#sidebar");
    host.innerHTML = `<div class="sidebar-top"><p>DESIGN SYSTEM</p><strong>기준 라이브러리</strong></div>` + state.nav.map(group => {
      const expanded = group.items.some(item => item.file === state.selected.file);
      return `<details class="nav-group" ${expanded ? "open" : ""}><summary>${esc(group.group)}</summary><div class="nav-items">${group.items.map(item => {
        const active = item.file === state.selected.file;
        return `<button class="nav-item ${item.status === "todo" ? "is-todo" : ""}" data-file="${esc(item.file)}" ${item.status === "todo" ? "aria-disabled=true" : ""} ${active ? 'aria-current="page"' : ""}><span>${esc(item.title)}</span>${item.status === "todo" ? '<span class="todo-label">준비 중</span>' : ""}</button>`;
      }).join("")}</div></details>`;
    }).join("");
    $$(".nav-item", host).forEach(button => button.addEventListener("click", () => {
      if (button.getAttribute("aria-disabled") === "true") return;
      const item = flatten().find(candidate => candidate.file === button.dataset.file);
      if (item) selectItem(item, true);
      closeNavigation();
    }));
  }

  function setTabs(isDevelopment) {
    $("#design-tab").setAttribute("aria-selected", String(!isDevelopment));
    $("#development-tab").setAttribute("aria-selected", String(isDevelopment));
    $("#design-panel").hidden = isDevelopment;
    $("#development-panel").hidden = !isDevelopment;
    updateTableOfContents();
    if (isDevelopment) $("#development-tab").focus({ preventScroll: true });
  }

  function tokenRows(tokens) {
    return `<div class="token-table-wrap"><table class="token-table"><thead><tr><th>토큰</th><th>값</th><th>쓰임</th></tr></thead><tbody>${tokens.map(token => `<tr><td><code>${esc(token.token)}</code></td><td><code>${esc(token.value)}</code></td><td>${esc(token.usage)}</td></tr>`).join("")}</tbody></table></div>`;
  }

  function paletteStrip(name, description, tokens) {
    const ordered = [...tokens].sort((a, b) => parseInt(a.name.match(/\d+/)?.[0] || "0", 10) - parseInt(b.name.match(/\d+/)?.[0] || "0", 10));
    return `<div class="palette-family"><div class="palette-family-head"><h3>${esc(name)}</h3><p>${esc(description)}</p></div><div class="swatch-strip" style="--swatch-count:${ordered.length}">${ordered.map(token => `<div class="swatch-step"><div class="swatch-color" style="background:${esc(token.value)}"></div><div class="swatch-meta"><strong>${esc(token.name.match(/\d+/)?.[0] || token.name)}</strong><span>${esc(token.value)}</span></div></div>`).join("")}</div></div>`;
  }

  const statusRoles = [
    { key: "info", title: "정보", chip: "안내", className: "ds-chip--info" },
    { key: "success", title: "성공", chip: "확인완료", className: "ds-chip--success" },
    { key: "warning", title: "주의", chip: "확인필요", className: "ds-chip--caution" },
    { key: "brand-sub", title: "진행", chip: "진행중", className: "ds-chip--brand-sub" },
    { key: "primary-hover-active", title: "기본", chip: "기본", className: "ds-chip--default" },
    { key: "danger", title: "오류", chip: "오류", className: "ds-chip--danger" },
    { key: "neutral", title: "중립", chip: "대기", className: "ds-chip--neutral" }
  ];

  function semanticValue(role, type) {
    const exact = {
      info: { bg: "bg-info-subtle", border: "border-info-subtle", text: "text-info-bold" },
      success: { bg: "bg-success-subtle", border: "border-success-subtle", text: "text-success-bold" },
      warning: { bg: "bg-warning-subtle", border: "border-warning", text: "text-warning-bold" },
      "brand-sub": { bg: "bg-brand-subtle", border: "border-brand-subtle", text: "text-brand-sub" },
      "primary-hover-active": { bg: "bg-brand", border: "border-brand", text: "text-primary-hover-active" },
      danger: { bg: "bg-danger-subtle", border: "border-danger-subtle", text: "text-danger-bold" },
      neutral: { bg: "bg-tertiary", border: "border-primary", text: "text-neutral" }
    };
    const suffix = exact[role]?.[type];
    const token = suffix && state.tokens.find(item => item.token === `--ds-color-${suffix}`);
    return token?.value || "#ffffff";
  }

  function semanticCards() {
    return `<div class="semantic-grid">${statusRoles.map(role => `<article class="semantic-card"><h3>${esc(role.title)}</h3><div class="semantic-values">${[["bg", "배경"], ["border", "선"], ["text", "글자"]].map(([type, label]) => {
      const color = semanticValue(role.key, type);
      return `<div class="semantic-value"><div class="semantic-swatch" style="background:${type === "bg" ? color : "#fff"};${type === "border" ? `border:2px solid ${color};` : type === "text" ? `color:${color};` : ""}">${esc(color)}</div><small>${label}</small></div>`;
    }).join("")}</div><div class="semantic-example"><span>예시</span><span class="ds-chip ${role.className}">${esc(role.chip)}</span></div></article>`).join("")}</div>`;
  }

  function section(id, title, lead, body) {
    return `<section class="content-section" id="${esc(id)}"><h2>${esc(title)}</h2>${lead ? `<p class="section-lead">${esc(lead)}</p>` : ""}${body}</section>`;
  }

  function colorPage() {
    const darkblue = state.tokens.filter(token => token.token.startsWith("--ds-color-darkblue-"));
    const lightgreen = state.tokens.filter(token => token.token.startsWith("--ds-color-lightgreen-"));
    const grey = state.tokens.filter(token => token.token.startsWith("--ds-color-grey-"));
    const base = state.tokens.filter(token => token.token.startsWith("--ds-color-base-"));
    const relevant = state.tokens.filter(token => token.group === "브랜드" || token.group === "회색" || token.group === "상태색 (배경·선·글자 세트)");
    const usages = `<div class="color-usage-grid"><article class="usage-example"><div><h3>주요 동작과 상호작용</h3><p class="section-note">브랜드 기본, hover, 비활성 상태의 변화입니다.</p></div><div class="brand-button-row"><button class="ds-btn ds-btn--primary ds-btn--md">주문하기</button><button class="ds-btn ds-btn--primary ds-btn--md" style="background:var(--ds-color-darkblue-800);border-color:var(--ds-color-darkblue-800)">Hover</button><button class="ds-btn ds-btn--primary ds-btn--md" disabled>비활성</button></div></article><article class="usage-example"><div><h3>선택 배경과 포커스 선</h3><p class="section-note">선택은 부드러운 배경으로, 입력 중에는 테두리로 식별합니다.</p></div><div class="selected-row"><span class="ds-chip ds-chip--default">선택됨</span><span>목록 항목의 선택 상태</span></div><label class="focus-example"><span>검색어</span><span class="focus-outline-demo">수급자 이름을 입력하세요</span></label></article></div>`;
    return section("brand", "브랜드 색", "기본 브랜드 팔레트는 주요 동작과 선택 상태에 사용합니다.", paletteStrip("브랜드 블루", "핵심 브랜드 계열", darkblue) + paletteStrip("브랜드 그린", "브랜드 보조 계열", lightgreen)) +
      section("grey", "회색", "정보의 위계를 만들고 콘텐츠와 표면을 구분하는 중립 팔레트입니다.", paletteStrip("회색 팔레트", "밝은 표면부터 강한 텍스트까지", grey)) +
      section("base", "기본 색", "텍스트와 표면의 가장 기본이 되는 검정·흰색입니다.", `<div class="base-colors">${base.map(token => `<article class="base-color" style="background:${esc(token.value)};color:${token.token.endsWith("black") ? "#fff" : "#111"}"><strong>${esc(token.name)}</strong><span>${esc(token.value)}</span></article>`).join("")}</div>`) +
      section("semantic", "상태색", "상태는 배경·선·글자의 세 가지 역할을 함께 사용하고, 의미는 문구로도 전달합니다.", semanticCards()) +
      section("usage", "쓰임 예시", "같은 브랜드색도 인터랙션 단계에 따라 대비와 면적을 다르게 적용합니다.", usages);
  }

  function fontScale() {
    const sizes = state.tokens.filter(token => token.group === "글자" && token.token.endsWith("-size"));
    const byName = name => state.tokens.find(token => token.token === name)?.value || "-";
    const rows = sizes.map(size => {
      const base = size.token.slice(0, -5);
      const line = byName(`${base}-line-height`);
      const font = base.match(/-(heavy|bold|semibold|regular)$/)?.[1] || "Regular";
      const mobile = size.token.includes("body-sm") ? "모바일 권장" : size.token.includes("body-ss") ? "PC 권장" : "공통";
      const sample = "모든 어르신과 보호자, 장기요양기관을 위한 이로움케어";
      return `<tr><td class="type-name">${esc(size.name.replace(/ · 크기$/, ""))}<span class="type-device">${mobile}</span></td><td>${esc(size.value)}</td><td>${esc(line)}</td><td>${esc(font)}</td><td><span class="type-example" style="font-size:${esc(size.value)};line-height:${esc(line)};font-weight:${font === "heavy" ? 800 : font === "bold" || font === "semibold" ? 650 : 400}">${sample}</span></td></tr>`;
    }).join("");
    return `<div class="type-table-wrap"><table class="type-table"><thead><tr><th>스타일</th><th>크기</th><th>줄 높이</th><th>굵기</th><th>실제 문장</th></tr></thead><tbody>${rows}</tbody></table></div><p class="section-note">본문은 PC 14px, 모바일 16px 기준을 우선 확인할 수 있도록 기기 권장 라벨을 표시합니다. 표를 좌우로 이동해 긴 문장을 비교할 수 있습니다.</p>`;
  }

  function spacingPage() {
    const spacing = state.tokens.filter(token => token.group === "간격").sort((a,b) => parseFloat(a.value) - parseFloat(b.value));
    const bars = `<div class="spacing-bars">${spacing.map(token => `<div class="spacing-row"><span>${esc(token.name.replace("간격 ", ""))}</span><div class="spacing-bar-track"><div class="spacing-bar" style="width:min(100%,${Math.max(4,parseFloat(token.value)*3)}px)"></div></div><code>${esc(token.value)}</code></div>`).join("")}</div>`;
    const space16 = state.tokens.find(token => token.token === "--ds-space-16")?.value || "16px";
    const space12 = state.tokens.find(token => token.token === "--ds-space-12")?.value || "12px";
    const demos = `<div class="spacing-demo-grid"><article class="spacing-demo"><h3>카드 안쪽 여백 · ${esc(space16)}</h3><div class="dimension-box"><span class="dimension-inner" style="padding:${esc(space16)}">주문 상품 정보</span><span class="dimension-guide horizontal">${esc(space16)}</span></div></article><article class="spacing-demo"><h3>입력칸 좌우 패딩 · ${esc(space12)}</h3><div class="dimension-box"><span class="dimension-inner" style="padding-inline:${esc(space12)}">수급자 이름</span><span class="dimension-guide horizontal">${esc(space12)}</span></div></article></div>`;
    return section("scale", "간격 단계", "간격은 요소 사이와 컴포넌트 내부의 리듬을 만듭니다.", `<div class="panel">${bars}</div>`) + section("application", "적용 예", "실제 UI에서 치수 관계를 간단한 다이어그램으로 확인합니다.", demos);
  }

  function shapePage() {
    const radii = state.tokens.filter(token => token.group === "모서리");
    const borders = state.tokens.filter(token => token.group === "테두리");
    const shadows = state.tokens.filter(token => token.group === "그림자");
    return section("radius", "모서리", "표면과 컨트롤의 역할에 맞춰 모서리 곡률을 선택합니다.", `<div class="shape-grid">${radii.map(token => `<article class="shape-card"><span class="radius-demo" style="border-radius:${esc(token.value)}"></span><strong>${esc(token.name)}</strong><span class="sample-caption">${esc(token.value)}</span></article>`).join("")}</div>`) +
      section("border", "테두리 굵기", "구분선, 일반 외곽선, 강조 테두리의 차이를 비교합니다.", `<div class="shape-grid">${borders.map(token => `<article class="shape-card"><span class="border-demo" style="border-width:${esc(token.value)}"></span><strong>${esc(token.name)}</strong><span class="sample-caption">${esc(token.value)}</span></article>`).join("")}</div>`) +
      section("shadow", "그림자", "밝은 바탕 위에서 elevation 단계의 깊이와 확산을 비교합니다.", `<div class="shadow-stage">${shadows.map(token => `<article class="shadow-demo" style="box-shadow:${esc(token.value)}"><strong>${esc(token.name)}</strong></article>`).join("")}</div>`);
  }

  function layoutPage() {
    const breakpoints = state.tokens.filter(token => token.group === "화면 폭");
    const modals = state.tokens.filter(token => token.group === "모달 폭").sort((a,b) => parseFloat(a.value) - parseFloat(b.value));
    const minWidth = breakpoints.find(token => token.token.endsWith("-min"))?.value || "360px";
    const maxWidth = breakpoints.find(token => token.token.endsWith("-max"))?.value || "1024px";
    const mobileMargin = state.tokens.find(token => token.token === "--ds-space-20")?.value || "20px";
    const desktopMin = `${parseInt(maxWidth,10)+1}px`;
    const screens = `<p class="width-explainer">모바일은 ${esc(minWidth)}–${esc(maxWidth)}, PC는 ${esc(desktopMin)}부터 전환됩니다. 채운 영역은 화면 예시입니다.</p><div class="width-track"><span class="width-range" style="width:28%">${esc(minWidth)}</span></div><div class="width-track"><span class="width-range" style="width:68%">${esc(maxWidth)} · 모바일</span></div><div class="width-track"><span class="width-range" style="width:84%">${esc(desktopMin)}~ · PC</span></div><p class="section-note">콘텐츠의 좌우 안전 여백은 ${esc(mobileMargin)}을 기본으로 두고, 넓은 화면에서는 본문 최대 폭을 제한합니다.</p>`;
    const modalBars = `<div class="modal-width-track">${modals.map(token => `<div class="modal-width-bar" style="width:min(${esc(token.value)},100%)"><strong>${esc(token.name.replace("모달 ", "Modal "))}</strong><span>${esc(token.value)}</span></div>`).join("")}</div>`;
    const tokenLegend = `<div class="dev-only">${breakpoints.map(token => `<span>${esc(token.name)} ${esc(token.value)}</span>`).join(" · ")}</div>`;
    return section("screen-width", "화면 기준 폭", "탐색 영역과 본문이 화면 너비에 따라 재배치되는 기준입니다.", `<div class="panel">${screens}${tokenLegend}</div>`) + section("modal-width", "모달 폭", "기본 크기 네 단계는 유지하고, 좁은 화면에서는 사용 가능한 폭에 맞춥니다.", `<div class="panel">${modalBars}</div>`);
  }

  function iconPage() {
    const icons = state.tokens.filter(token => token.group === "아이콘").sort((a,b) => parseFloat(a.value)-parseFloat(b.value));
    const examples = icons.map(token => { const size = parseInt(token.value,10); return `<div class="icon-example"><img src="${ROOT}icons/info.svg" width="${size}" height="${size}" alt=""><span>${esc(token.value)}</span></div>`; }).join("");
    const grid = `<div class="icon-comparison">${examples}</div><div class="subsection"><div class="subsection-heading"><h3>상태 아이콘 예시</h3><p>색은 배치된 텍스트와 함께 표현됩니다.</p></div><div class="brand-button-row"><span class="ds-field__hint"><img src="${ROOT}icons/info.svg" width="16" height="16" alt="">도움말</span><span class="ds-field__error"><img src="${ROOT}icons/error.svg" width="16" height="16" alt="">오류 안내</span></div></div>`;
    return section("icon-sizes", "아이콘 크기", "기본 그리드는 24px이며, 실제 슬롯에 맞는 크기를 선택합니다.", `<div class="panel">${grid}</div>`);
  }

  function foundationPage(item) {
    const config = FOUNDATION_MAP[item.title];
    const content = ({ Color: colorPage, Typography: () => section("type-scale", "글자 단계", "각 스타일을 실제 문장에 적용해 크기·줄 높이·굵기를 비교합니다.", fontScale()), Shape: shapePage, Layout: layoutPage, Icon: iconPage })[item.title]();
    return { id: config.id, description: config.description, body: content, tokens: state.tokens.filter(token => item.title === "Color" ? ["브랜드", "회색", "상태색 (배경·선·글자 세트)"].includes(token.group) : item.title === "Typography" ? token.group === "글자" : item.title === "Shape" ? ["모서리", "테두리", "그림자"].includes(token.group) : item.title === "Layout" ? ["화면 폭", "모달 폭", "간격"].includes(token.group) : token.group === "아이콘" || token.token.startsWith("--ds-color-text-")) };
  }

  function compactText(element) {
    return element?.textContent?.trim().replace(/\s+/g, " ") || "";
  }

  function componentSection(id, title, description, body) {
    return `<section class="component-section" id="${esc(id)}"><h2>${esc(title)}</h2>${description ? `<p class="section-description">${esc(description)}</p>` : ""}${body}</section>`;
  }

  function parseSampleSection(section) {
    return {
      type: section.dataset.section,
      title: section.dataset.title || COMPONENT_META[section.dataset.section]?.title || "구성",
      description: section.dataset.desc || "",
      html: section.innerHTML,
      source: section
    };
  }

  function buildStructure(item, sectionData) {
    const source = document.createElement("div");
    source.innerHTML = sectionData.html;
    const sample = $(".anatomy-sample, .sample-stage", source);
    const parts = $(".parts", source);
    if (sample) sample.classList.add("component-anatomy-stage");
    let partHtml = "";
    if (parts) {
      parts.classList.add("parts-grid");
      $$("li", parts).forEach(li => {
        const spans = $$('span:not(.part-no)', li);
        if (spans[1]) spans[1].classList.add("part-description");
      });
      partHtml = parts.outerHTML;
    }
    return componentSection("structure", "구조", sectionData.description, `${sample?.outerHTML || ""}${partHtml}`);
  }

  function makeCardPreview(article) {
    const clone = article.cloneNode(true);
    clone.querySelectorAll("[autofocus]").forEach(el => el.removeAttribute("autofocus"));
    clone.querySelectorAll("button").forEach(el => el.disabled = true);
    clone.querySelectorAll("input,textarea,select").forEach(el => el.disabled = true);
    clone.setAttribute("aria-hidden", "true");
    clone.setAttribute("inert", "");
    return clone;
  }

  function detailGallery(item, key, data, customCards) {
    const source = document.createElement("div");
    source.innerHTML = data.html;
    const originals = customCards || $$(".state-card, .size-card", source);
    if (!originals.length) return `<div class="panel">${data.html}</div>`;
    const chosen = state.selectedDetails.get(`${item.file}:${key}`) ?? -1;
    const cards = originals.map((original, index) => {
      const title = compactText($("strong, h3", original)) || `${data.title} ${index + 1}`;
      const body = compactText($("p, .measure, .sample-caption", original));
      return `<article class="gallery-card" role="button" tabindex="0" aria-pressed="${index === chosen}" data-card-index="${index}"><div class="gallery-preview">${makeCardPreview(original).innerHTML}</div><div class="gallery-meta"><strong>${esc(title)}</strong><span>${esc(body || "눌러서 상세 규격과 설명 보기")}</span></div></article>`;
    }).join("");
    return `<div class="gallery-grid" data-gallery="${esc(key)}">${cards}</div><div class="gallery-detail-slot" aria-live="polite"></div>`;
  }

  function modalTypes(item, data) {
    const typeData = [
      ["기본 안내형", "짧은 정보를 안내하고 닫기 동작을 제공합니다.", "안내", "요청 내용을 확인해 주세요.", "확인", ""],
      ["버튼형", "사용자가 취소 또는 진행을 선택합니다.", "주문하기", "주문 완료 후에는 수량과 옵션을 변경할 수 없습니다.", "취소", "확인"],
      ["정보 확인형", "다음 작업에 필요한 정보를 간결하게 보여줍니다.", "저장할까요?", "입력한 내용을 저장합니다.", "취소", "저장"]
    ];
    const cards = typeData.map(([title, desc, heading, body, secondary, primary]) => `<article class="state-card"><strong>${esc(title)}</strong><p>${esc(desc)}</p><div class="sample-stage"><div class="ds-modal-backdrop"><section class="ds-modal ds-modal--sm" role="group"><header class="ds-modal__header"><h3 class="ds-modal__title">${esc(heading)}</h3></header><div class="ds-modal__body">${esc(body)}</div><footer class="ds-modal__footer">${secondary ? `<button class="ds-btn ds-btn--outline-secondary ds-btn--md">${esc(secondary)}</button>` : ""}<button class="ds-btn ds-btn--primary ds-btn--md">${esc(primary)}</button></footer></section></div></div></article>`);
    return `<div class="gallery-grid modal-type-grid">${cards.map((card, index) => `<article class="gallery-card" role="button" tabindex="0" aria-pressed="false" data-card-index="${index}"><div class="gallery-preview">${card}</div><div class="gallery-meta"><strong>${esc(typeData[index][0])}</strong><span>${esc(typeData[index][1])}</span></div></article>`).join("")}</div><div class="gallery-detail-slot" aria-live="polite"></div>`;
  }

  function modalSizes() {
    const widths = ["sm", "md", "lg", "xl"].map(size => state.tokens.find(token => token.token === `--ds-modal-width-${size}`)).filter(Boolean);
    const use = { sm: "간단한 알림·확인", md: "일반적인 결정", lg: "정보가 많은 선택·입력", xl: "넓은 콘텐츠" };
    return `<div class="gallery-grid modal-size-grid">${widths.map((token, index) => `<article class="gallery-card" role="button" tabindex="0" aria-pressed="false" data-card-index="${index}"><div class="gallery-preview"><section class="ds-modal ds-modal--${token.name.split(" ").pop().toLowerCase()}" style="max-width:100%"><header class="ds-modal__header"><h3 class="ds-modal__title">${token.name.replace("모달 ", "Modal ")}</h3></header><div class="ds-modal__body">화면 폭에 맞춰 표시되는 모달입니다.</div><footer class="ds-modal__footer"><button class="ds-btn ds-btn--primary ds-btn--md">확인</button></footer></section></div><div class="gallery-meta"><strong>${esc(token.name.replace("모달 ", "Modal "))} · ${esc(token.value)}</strong><span>${use[token.name.split(" ").pop().toLowerCase()]}</span></div></article>`).join("")}</div><div class="gallery-detail-slot" aria-live="polite"></div>`;
  }

  function buildComponentPage(item, sections) {
    const description = sections.find(section => section.type === "anatomy")?.description || `${item.title}의 형태, 상태, 크기와 화면 사용 예입니다.`;
    const byType = new Map(sections.map(section => [section.type, section]));
    const content = [];
    content.push(componentSection("overview", "개요", "", `<div class="component-overview"><span class="overview-mark" aria-hidden="true">${esc(item.title.slice(0,1))}</span><p>${esc(description)}</p></div>`));
    if (byType.has("anatomy")) content.push(buildStructure(item, byType.get("anatomy")));
    if (byType.has("variants")) content.push(componentSection("types", "타입", byType.get("variants").description, item.title === "Modal" ? modalTypes(item, byType.get("variants")) : detailGallery(item, "variants", byType.get("variants"))));
    if (byType.has("sizes")) content.push(componentSection("sizes", "크기", byType.get("sizes").description, item.title === "Modal" ? modalSizes() : detailGallery(item, "sizes", byType.get("sizes"))));
    if (byType.has("states")) content.push(componentSection("states", "상태", byType.get("states").description, detailGallery(item, "states", byType.get("states"))));
    if (byType.has("usage")) content.push(componentSection("usage", "사용 예", byType.get("usage").description, `<div class="use-frame">${byType.get("usage").html}</div>`));
    if (byType.has("dos")) {
      const source = document.createElement("div"); source.innerHTML = byType.get("dos").html;
      const grid = $(".do-grid", source);
      content.push(componentSection("usage-principles", "사용 원칙", byType.get("dos").description, grid?.outerHTML || byType.get("dos").html));
    }
    const design = content.join("");
    const classes = [...new Set([...sections.flatMap(section => [...section.source.querySelectorAll("[class]")].flatMap(el => [...el.classList]))])].sort();
    const relevant = componentTokens(item.title);
    const code = state.sourceMarkup;
    return { id: slug(item.title), description, design, tokens: relevant, classes, code };
  }

  function componentTokens(title) {
    const filters = {
      Button: token => /color-darkblue|color-grey-(300|600|800)|font-body|radius-4|space-(4|16|36|48)/.test(token.token),
      "Text input": token => /color-(grey|darkblue|red|bg|border|text)|font-body|radius-4|space-(2|4|8|12|16|20|40|48)/.test(token.token),
      Textarea: token => /color-(grey|darkblue|red|bg|border|text)|font-body|radius-4|space-(4|8|12|16|20|40)/.test(token.token),
      Select: token => /color-(grey|darkblue|red|bg|border|text)|font-body|radius-4|space-(4|8|12|16|40|48)/.test(token.token),
      Modal: token => /modal-width|radius-16|shadow-4|color-bg-primary|font-body|space-(16|24)/.test(token.token),
      "Status Chip": token => /color-(blue|green|yellow|lightgreen|red|darkblue|grey|bg|border|text)|font-body|radius-circle|space-(4|8|12)/.test(token.token)
    };
    return state.tokens.filter(filters[title] || (() => false));
  }

  async function renderSelected() {
    if (!state.selected) return;
    const item = state.selected;
    const breadcrumb = [item.group, item.title].filter(Boolean);
    $("#breadcrumbs").innerHTML = breadcrumb.map((part, index) => `${index ? '<span class="crumb-separator" aria-hidden="true">›</span>' : ""}<span>${esc(part)}</span>`).join("");
    $("#page-eyebrow").textContent = item.group;
    $("#page-title").textContent = item.title;
    $("#doc-title").textContent = `${item.title} · 설명문서`;
    $("#design-content").innerHTML = '<div class="empty-state"><strong>불러오는 중</strong></div>';
    $("#development-content").innerHTML = "";
    if (item.group === "Foundation") {
      const foundation = foundationPage(item);
      $("#page-description").textContent = foundation.description;
      $("#design-content").innerHTML = foundation.body;
      $("#development-content").innerHTML = developerView(foundation.tokens, [], foundation.tokens.map(token => `${token.token}: ${token.raw};`).join("\n"));
    } else if (item.status === "todo" || !item.sample) {
      $("#page-description").textContent = item.figmaStatus || "현재 문서는 준비 중입니다.";
      $("#design-content").innerHTML = '<div class="empty-state"><strong>견본 준비 중</strong><span>문서와 Figma 출처부터 확인할 수 있습니다.</span></div>';
      $("#development-content").innerHTML = '<p class="dev-intro">견본이 준비되면 구현 정보를 이곳에서 확인할 수 있습니다.</p>';
    } else {
      try {
        const response = await fetch(fileUrl(`${ROOT}${item.sample}`), { cache: "no-cache" });
        if (!response.ok) throw new Error(`${item.sample}: ${response.status}`);
        state.sourceMarkup = await response.text();
        const parsed = new DOMParser().parseFromString(`<main>${state.sourceMarkup}</main>`, "text/html");
        const sections = $$("section[data-section]", parsed).map(parseSampleSection);
        const ordered = COMPONENT_ORDER.map(type => sections.find(section => section.type === type)).filter(Boolean);
        const page = buildComponentPage(item, ordered);
        $("#page-description").textContent = page.description;
        $("#design-content").innerHTML = page.design;
        $("#development-content").innerHTML = developerView(page.tokens, page.classes, page.code);
      } catch (error) {
        $("#page-description").textContent = "문서를 불러오지 못했습니다.";
        $("#design-content").innerHTML = `<div class="empty-state"><strong>견본을 불러오지 못했습니다</strong><span>${esc(error.message)}</span></div>`;
      }
    }
    buildNavigation();
    updateTableOfContents();
    attachPageInteractions(item);
    loadDocument();
  }

  function developerView(tokens, classes, code) {
    const classBlock = classes.length ? `<div class="dev-block"><h2>클래스</h2><div class="class-list">${classes.map(name => `<code>.${esc(name)}</code>`).join("")}</div></div>` : "";
    return `<p class="dev-intro">현재 디자인 기준과 연결된 구현 정보를 확인합니다. 토큰 값은 <code>tokens.css</code>를 원본으로 표시합니다.</p><section class="dev-block"><h2>토큰</h2>${tokenRows(tokens)}</section>${classBlock}<section class="dev-block"><h2>코드</h2><div class="code-card"><div class="code-head"><strong>현재 페이지 견본</strong><button class="copy-button" id="copy-code" type="button">복사</button></div><pre><code>${esc(code || "")}</code></pre></div></section>`;
  }

  function updateTableOfContents() {
    state.tocObserver?.disconnect();
    const panel = $("#page-toc");
    const headingSelector = $("#design-panel").hidden ? "#development-content h2" : "#design-content .content-section > h2, #design-content .component-section > h2";
    const headings = $$(headingSelector);
    $("#toc-links").innerHTML = headings.map((heading, index) => {
      const section = heading.closest("section") || heading.parentElement;
      if (!section.id) section.id = `dev-section-${index}`;
      return `<a class="toc-link" href="#${esc(section.id)}">${esc(heading.textContent)}</a>`;
    }).join("");
    panel.hidden = headings.length === 0;
    const links = $$(".toc-link", panel);
    links.forEach(link => link.addEventListener("click", event => {
      event.preventDefault();
      document.getElementById(decodeURIComponent(link.hash.slice(1)))?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `${location.pathname}${location.search}${location.hash}`);
    }));
    if ("IntersectionObserver" in window) {
      state.tocObserver = new IntersectionObserver(entries => {
        const visible = entries.filter(entry => entry.isIntersecting).sort((a,b) => a.boundingClientRect.top-b.boundingClientRect.top)[0];
        if (visible) links.forEach(link => link.classList.toggle("is-active", link.hash === `#${visible.target.id}`));
      }, { rootMargin: "-110px 0px -72% 0px" });
      headings.forEach(heading => state.tocObserver.observe(heading.closest("section") || heading.parentElement));
    }
  }

  function attachPageInteractions(item) {
    $$(".gallery-card", $("#design-content")).forEach(card => {
      const select = () => {
        const gallery = card.closest(".gallery-grid");
        if (!gallery) return;
        const index = Number(card.dataset.cardIndex);
        const slot = gallery.nextElementSibling;
        const alreadyOpen = card.getAttribute("aria-pressed") === "true";
        gallery.querySelectorAll(".gallery-card").forEach(other => other.setAttribute("aria-pressed", String(other === card && !alreadyOpen)));
        if (alreadyOpen) { slot.innerHTML = ""; return; }

        if (gallery.classList.contains("modal-type-grid")) {
          const types = [
            ["기본 안내형", "짧은 정보를 안내하고 닫기 동작을 제공합니다.", "안내", "요청 내용을 확인해 주세요.", "", "확인"],
            ["버튼형", "사용자가 취소 또는 진행을 선택합니다.", "주문하기", "주문 완료 후에는 수량과 옵션을 변경할 수 없습니다.", "취소", "확인"],
            ["정보 확인형", "다음 작업에 필요한 정보를 간결하게 보여줍니다.", "저장할까요?", "입력한 내용을 저장합니다.", "취소", "저장"]
          ][index];
          slot.innerHTML = `<div class="detail-panel"><div class="detail-panel-head"><div><h3>${esc(types[0])}</h3><p>${esc(types[1])}</p></div><button class="measure-toggle" type="button" aria-pressed="false">치수 보기</button></div><div class="detail-specimen"><div class="sample-stage"><div class="ds-modal-backdrop"><section class="ds-modal ds-modal--sm" role="group"><header class="ds-modal__header"><h3 class="ds-modal__title">${esc(types[2])}</h3><button class="ds-modal__close" aria-label="닫기"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M7 7 25 25M25 7 7 25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button></header><div class="ds-modal__body">${esc(types[3])}</div><footer class="ds-modal__footer">${types[4] ? `<button class="ds-btn ds-btn--outline-secondary ds-btn--md">${esc(types[4])}</button>` : ""}<button class="ds-btn ds-btn--primary ds-btn--md">${esc(types[5])}</button></footer></section></div></div></div><div class="dimension-readout"><span>내용에 맞는 폭</span><span>헤더 · 본문 · 액션</span></div></div>`;
        } else if (gallery.classList.contains("modal-size-grid")) {
          const widths = state.tokens.filter(candidate => candidate.group === "모달 폭").sort((a,b)=>parseFloat(a.value)-parseFloat(b.value));
          const token = widths[index];
          const size = token?.name.split(" ").pop().toLowerCase() || "sm";
          const use = {sm:"간단한 알림·확인",md:"일반적인 결정",lg:"정보가 많은 선택·입력",xl:"넓은 콘텐츠"}[size];
          const horizontal = state.tokens.find(candidate => candidate.token === "--ds-space-20")?.value || "20px";
          slot.innerHTML = `<div class="detail-panel"><div class="detail-panel-head"><div><h3>Modal ${size.toUpperCase()}</h3><p>${use}</p></div><button class="measure-toggle" type="button" aria-pressed="false">치수 보기</button></div><div class="detail-specimen"><div class="modal-detail-stage"><section class="ds-modal ds-modal--${size}"><header class="ds-modal__header"><h3 class="ds-modal__title">${size === "sm" ? "저장할까요?" : "주문 정보 확인"}</h3><button class="ds-modal__close" aria-label="닫기"><svg width="32" height="32" viewBox="0 0 32 32" fill="none"><path d="M7 7 25 25M25 7 7 25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg></button></header><div class="ds-modal__body">${size === "sm" ? "입력한 내용을 저장합니다." : "요청 내용을 검토하고 다음 단계로 진행합니다."}</div><footer class="ds-modal__footer"><button class="ds-btn ds-btn--outline-secondary ds-btn--md">취소</button><button class="ds-btn ds-btn--primary ds-btn--md">확인</button></footer></section></div></div><div class="dimension-readout"><span>최대 폭 ${esc(token?.value || "340px")}</span><span>화면 좌우 여백 ${esc(horizontal)}</span></div></div>`;
        } else {
          const key = gallery.dataset.gallery;
          state.selectedDetails.set(`${item.file}:${key}`, index);
          const sourceSection = $$("section[data-section]", new DOMParser().parseFromString(`<main>${state.sourceMarkup}</main>`, "text/html")).find(section => section.dataset.section === key);
          const original = sourceSection && $$(".state-card, .size-card", sourceSection)[index];
          if (original) {
            const title = compactText($("strong, h3", original)) || `예시 ${index + 1}`;
            const summary = compactText($("p", original) || $(".measure", original)) || "상태와 시각적 규격을 확인합니다.";
            slot.innerHTML = `<div class="detail-panel"><div class="detail-panel-head"><div><h3>${esc(title)}</h3><p>${esc(summary)}</p></div><button class="measure-toggle" type="button" aria-pressed="false">치수 보기</button></div><div class="detail-specimen">${makeCardPreview(original).innerHTML}</div><div class="dimension-readout"><span>내부 여백</span><span>요소 높이</span><span>요소 간격</span></div></div>`;
          }
        }
        slot.scrollIntoView({ behavior: "smooth", block: "nearest" });
      };
      card.addEventListener("click", select);
      card.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); select(); } });
    });
    $("#design-content").addEventListener("click", event => {
      const button = event.target.closest(".measure-toggle");
      if (!button) return;
      const pressed = button.getAttribute("aria-pressed") !== "true";
      button.setAttribute("aria-pressed", String(pressed));
      button.textContent = pressed ? "치수 숨기기" : "치수 보기";
      button.closest(".detail-panel")?.querySelector(".detail-specimen")?.classList.toggle("measure-on", pressed);
    });
    $("#copy-code")?.addEventListener("click", async event => {
      const code = $("#development-content pre code")?.textContent || "";
      try { await navigator.clipboard.writeText(code); event.currentTarget.textContent = "복사됨"; }
      catch { event.currentTarget.textContent = "복사할 수 없음"; }
      setTimeout(() => { if (event.currentTarget.isConnected) event.currentTarget.textContent = "복사"; }, 1300);
    });
    $$(".dev-only", $("#design-content")).forEach(el => el.remove());
  }

  function markdownUrl(href, documentFile) {
    if (/^(https?:|mailto:|#)/i.test(href)) return href;
    return new URL(href, fileUrl(`${ROOT}${documentFile.split("#")[0]}`)).href;
  }

  function renderFigmaSources(item) {
    const sources = $("#figma-sources");
    const figma = item.figma || {};
    const groups = [["DS 라이브러리", figma.ds], ["프레임워크", figma.framework]];
    sources.innerHTML = groups.map(([label, source]) => source?.nodes?.length ? `<section><h3>${label}</h3><div class="figma-link-list">${source.nodes.map(node => `<a target="_blank" rel="noopener" href="https://www.figma.com/design/${encodeURIComponent(source.file)}/?node-id=${node.replace(":","-")}">${esc(node)}</a>`).join("")}</div></section>` : "").join("") || '<section><h3>Figma 출처</h3><p class="sample-caption">등록된 출처가 없습니다.</p></section>';
  }

  async function loadDocument() {
    const box = $("#markdown-body");
    const target = state.selected.file.split("#")[0];
    try {
      const response = await fetch(fileUrl(`${ROOT}${target}`), { cache: "no-cache" });
      if (!response.ok) throw new Error(String(response.status));
      const source = await response.text();
      const fragment = state.selected.file.includes("#") ? state.selected.file.split("#")[1] : "";
      box.innerHTML = window.marked ? window.marked.parse(source) : `<pre>${esc(source)}</pre>`;
      if (fragment) {
        const heading = $$("h1,h2,h3,h4", box).find(node => slug(node.textContent).includes(slug(fragment)));
        if (heading) setTimeout(() => heading.scrollIntoView({ block: "start" }), 40);
      }
      $$("a[href]", box).forEach(link => {
        const href = link.getAttribute("href");
        link.href = markdownUrl(href, state.selected.file);
        if (/^https?:/i.test(href) && new URL(href, location.href).host !== location.host) { link.target = "_blank"; link.rel = "noopener"; }
      });
    } catch (error) { box.innerHTML = `<p>설명문서를 불러오지 못했습니다. (${esc(error.message)})</p>`; }
    renderFigmaSources(state.selected);
  }

  function setDocOpen(open) {
    state.docOpen = open;
    $("#doc-panel").classList.toggle("is-open", open);
    $("#doc-panel").setAttribute("aria-hidden", String(!open));
    $("#doc-toggle").setAttribute("aria-expanded", String(open));
    $("#doc-scrim").hidden = !open || matchMedia("(min-width: 1025px)").matches;
  }

  function closeNavigation() {
    $("#sidebar").classList.remove("is-open");
    $("#nav-scrim").hidden = true;
  }

  function selectItem(item, updateUrl = false) {
    state.selected = item;
    if (updateUrl) updateAddress(item);
    renderSelected();
  }

  function setupControls() {
    $("#design-tab").addEventListener("click", () => setTabs(false));
    $("#development-tab").addEventListener("click", () => setTabs(true));
    for (const button of [$("#doc-toggle"), $("#doc-close"), $("#doc-scrim")]) button.addEventListener("click", () => setDocOpen(!state.docOpen));
    $("#nav-toggle").addEventListener("click", () => { $("#sidebar").classList.add("is-open"); $("#nav-scrim").hidden = false; });
    $("#nav-scrim").addEventListener("click", closeNavigation);
    const resize = $("#doc-resize");
    resize.addEventListener("pointerdown", event => {
      if (matchMedia("(max-width: 1024px)").matches) return;
      event.preventDefault(); resize.setPointerCapture(event.pointerId);
      const move = current => document.documentElement.style.setProperty("--doc-width", `${Math.max(340,Math.min(innerWidth * .72,innerWidth - current.clientX))}px`);
      const stop = () => { resize.removeEventListener("pointermove", move); resize.removeEventListener("pointerup", stop); };
      resize.addEventListener("pointermove", move); resize.addEventListener("pointerup", stop);
    });
    document.addEventListener("keydown", event => { if (event.key === "Escape") { setDocOpen(false); closeNavigation(); } });
    window.addEventListener("resize", () => { if (state.docOpen) setDocOpen(true); });
  }

  async function init() {
    setupControls();
    try {
      state.nav = await fetchJson("nav.json");
      await loadTokens();
      state.selected = readRequestedPage();
      await renderSelected();
    } catch (error) {
      $("#design-content").innerHTML = `<div class="empty-state"><strong>디자인 시스템을 불러오지 못했습니다</strong><span>${esc(error.message)} · 로컬 서버에서 열어주세요.</span></div>`;
    }
  }

  init();
})();
