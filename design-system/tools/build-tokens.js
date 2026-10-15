/* Figma 변수 스냅샷(tokens/figma-variables.json) → css/tokens.css · css/typography.css
   실행: node design-system/tools/build-tokens.js
   Figma 이름은 그대로 주석에 남기고, CSS 이름만 규칙대로 바꾼다.
   - Primitive 색: --ds-color-{팔레트}-{단계}
   - Theme 색: --ds-color-{역할}-{단계} (대대여 기본, .ds-theme-dolbom은 이로움돌봄 모드)
   - Semantic 색: --ds-color-{text|bg|border|icon}-{이름}  (Primitive/ → control-, hover:active → hover, teritiary → tertiary) */
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const src = JSON.parse(fs.readFileSync(path.join(root, 'tokens/figma-variables.json'), 'utf8'));

const palSlug = n => n.toLowerCase();
const roleSlug = { brand: 'brand', neutral: 'neutral', Infomation: 'info', Information: 'info', success: 'success', danger: 'danger', brandSub: 'brand-sub', warning: 'warning' };
const semSlug = name => name.replace(/^Color\//, '').replace('Primitive/', 'control-').replace(':active', '')
  .replace(/teritiary/g, 'tertiary').replace(/brandSub/g, 'brand-sub').replace(/_/g, '-').replace(/\//g, '-').toLowerCase();
const ref = alias => { // "neutral/900" | "Base/white"
  const [g, s] = alias.split('/');
  return g === 'Base' ? `var(--ds-color-base-${s})` : `var(--ds-color-${roleSlug[g]}-${s})`;
};
const L = [];
const line = (k, v, c) => L.push(`  ${k}: ${v};${c ? ` /* ${c} */` : ''}`);

L.push('/* 자동 생성 — tools/build-tokens.js. 직접 고치지 말고 tokens/figma-variables.json을 고친 뒤 다시 실행 */', ':root {');
L.push('  /* 1. 팔레트 (Figma Primitive) */');
for (const [k, v] of Object.entries(src.primitive)) {
  const [, fam, step] = k.split('/');
  line(fam === 'Base' ? `--ds-color-base-${step}` : `--ds-color-${palSlug(fam)}-${step}`, v, k);
}
L.push('', '  /* 2. 역할 팔레트 (Figma Theme · 대대여 모드) */');
for (const [role, [fam]] of Object.entries(src.theme.map)) {
  for (const s of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]) line(`--ds-color-${roleSlug[role]}-${s}`, `var(--ds-color-${palSlug(fam)}-${s})`, `Color/${role}/${s}`);
}
L.push('', '  /* 3. 의미 색 (Figma Semantic) */');
for (const [k, v] of Object.entries(src.semantic)) line(`--ds-color-${semSlug(k)}`, ref(v), k);
L.push('  /* 이전 이름(호환용) */');
line('--ds-color-text-primary-hover-active', 'var(--ds-color-text-control-primary-hover)');
line('--ds-color-text-neutral', 'var(--ds-color-text-control-secondary)');
line('--ds-color-bg-brand', 'var(--ds-color-bg-brand-subtle)');
line('--ds-color-border-brand', 'var(--ds-color-border-brand-subtle)');

L.push('', '  /* 4. 글자 (Figma Text styles · SUIT) */');
line('--ds-font-family-suit', '"SUIT", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif');
const typo = [];
for (const [name, w, size, lh, ls, deco] of src.textStyles) {
  const slug = name.toLowerCase().replace(/\//g, '-');
  const lsv = ls === 0 ? '0' : `${ls / 100}em`;
  line(`--ds-font-${slug}-size`, `${size}px`, `Suit/${name}`);
  line(`--ds-font-${slug}-line-height`, `${lh}px`);
  line(`--ds-font-${slug}-letter-spacing`, lsv, `${ls}%`);
  line(`--ds-font-${slug}-weight`, w);
  typo.push({ slug, w, size, lh, lsv, deco, name });
}

L.push('', '  /* 5. 간격 (Figma spacing) */');
for (const n of src.spacing) line(`--ds-space-${n}`, n ? `${n}px` : '0', `spacing/${n}`);
L.push('', '  /* 6. 모서리 · 테두리 (Figma border/radius · border/border) */');
for (const [k, v] of Object.entries(src.radius)) line(`--ds-radius-${k === 'radius-circle' ? 'circle' : v}`, v ? `${v}px` : '0', `border/radius/${k}`);
for (const [k, v] of Object.entries(src.border)) line(`--ds-border-${String(v).replace('.', '-')}`, `${v}px`, `border/border/${k}`);
L.push('', '  /* 7. 그림자 (Figma Effect styles) */');
const shadowName = { 'shadow1_default': 'default', 'elevation/shadow2': '2', 'elevation/shadow3': '3', 'elevation/shadow4': '4', 'elevation/shadow5_Left': '5-left', 'elevation/shadow6_Top': '6-top' };
for (const [k, list] of Object.entries(src.effects)) {
  line(`--ds-shadow-${shadowName[k]}`, list.map(([x, y, b, s, a]) => `${x}${x ? 'px' : ''} ${y}${y ? 'px' : ''} ${b}px ${s}${s ? 'px' : ''} rgba(0, 0, 0, ${a.toFixed(2)})`).join(', '), k);
}
line('--ds-shadow-card-list', '0 2px 8px rgba(0, 0, 0, 0.08), 0 0 0.5px rgba(0, 0, 0, 0.2)', '정책 3-9 카드 목록');
L.push('', '  /* 8. 흐림 · 투명도 (Figma blur · opacity) */');
for (const n of src.blur) line(`--ds-blur-${n}`, n ? `${n}px` : '0', `blur/blur-${n}`);
for (const n of src.opacity) line(`--ds-opacity-${n}`, n / 100, `opacity/opacity-${n}`);
L.push('', '  /* 9. 아이콘 크기 (프레임워크 Icon 1:9425) · 모달 폭 (Modal 6487:5122) · 화면 폭 (정책 1장) */');
for (const n of [16, 20, 24, 30, 36]) line(`--ds-icon-${n}`, `${n}px`);
for (const [k, v] of [['sm', 340], ['md', 480], ['lg', 600], ['xl', 800]]) line(`--ds-modal-width-${k}`, `${v}px`, `Modal/${k}`);
line('--ds-breakpoint-mobile-min', '360px', '문서용. 미디어쿼리에는 숫자를 직접 쓴다');
line('--ds-breakpoint-mobile-max', '1024px', '1024 이하 모바일 · 1025 이상 PC');
L.push('}', '');
L.push('/* 이로움돌봄 테마: 브랜드 색만 주황으로 바뀐다(Figma Theme 이로움돌봄 모드) */', '.ds-theme-dolbom {');
for (const s of [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]) line(`--ds-color-brand-${s}`, `var(--ds-color-orange-${s})`);
L.push('  /* 브랜드를 참조하는 의미 색은 여기서 다시 선언해야 새 브랜드 값으로 계산된다 */');
for (const [k, v] of Object.entries(src.semantic)) if (v.startsWith('brand/')) line(`--ds-color-${semSlug(k)}`, ref(v), k);
L.push('}', '');
fs.writeFileSync(path.join(root, 'css/tokens.css'), L.join('\n'));

const T = ['/* 자동 생성 — tools/build-tokens.js. Figma Text styles를 클래스 하나로 쓰는 도구 */'];
for (const t of typo) {
  T.push(`.ds-text-${t.slug} { font-family: var(--ds-font-family-suit); font-weight: ${t.w}; font-size: ${t.size}px; line-height: ${t.lh}px; letter-spacing: ${t.lsv};${t.deco ? ` text-decoration: ${t.deco};` : ''} }`);
}
fs.writeFileSync(path.join(root, 'css/typography.css'), T.join('\n') + '\n');

/* tokens.json keeps the shape consumed by the legacy viewer and documentation panel. */
const body = L.slice(0, L.indexOf('}'));  /* :root만 */
const vars = {}; const sourceTokens = [];
for (const l of body) {
  const m = l.match(/^\s*(--ds-[\w-]+): (.+?);(?: \/\* (.+) \*\/)?$/);
  if (!m) continue;
  vars[m[1]] = m[2];
  sourceTokens.push({ token: m[1], raw: m[2], note: m[3] || '' });
}
const resolve = v => { let guard = 0; while (/var\((--ds-[\w-]+)\)/.test(v) && guard++ < 10) v = v.replace(/var\((--ds-[\w-]+)\)/g, (_, k) => vars[k] || k); return v; };
const paletteNames = { black: '검정', white: '흰색', grey: '회색', darkblue: '브랜드 블루', blue: '정보 블루', green: '성공 그린', yellow: '주의 옐로', lightgreen: '브랜드 그린', red: '오류 레드' };
const roleNames = { info: '정보', success: '성공', warning: '주의', danger: '오류', brand: '브랜드', neutral: '중립', primary: '기본', secondary: '보조', tertiary: '강조', disabled: '비활성', 'brand-sub': '브랜드 보조' };
const fixedNames = { 'base-black': '기본 검정', 'base-white': '기본 흰색', 'font-family-suit': '글꼴 · SUIT', 'radius-circle': '완전 원형', 'shadow-default': '기본 그림자', 'shadow-card-list': '카드 목록 그림자', 'shadow-5-left': '왼쪽 패널 그림자', 'shadow-6-top': '상단 고정 그림자', 'breakpoint-mobile-min': '최소 모바일 폭', 'breakpoint-mobile-max': '모바일 전환 최대 폭' };
const getGroup = token => {
  if (/^--ds-color-grey-/.test(token)) return '회색';
  if (/^--ds-color-base-/.test(token) || /^--ds-color-darkblue-/.test(token)) return '브랜드';
  if (/^--ds-color-/.test(token)) return '상태색 (배경·선·글자 세트)';
  if (/^--ds-font-/.test(token)) return '글자';
  if (/^--ds-space-/.test(token)) return '간격';
  if (/^--ds-radius-/.test(token)) return '모서리';
  if (/^--ds-shadow-/.test(token)) return '그림자';
  if (/^--ds-border-/.test(token)) return '테두리';
  if (/^--ds-icon-/.test(token)) return '아이콘';
  if (/^--ds-breakpoint-/.test(token)) return '화면 폭';
  if (/^--ds-modal-width-/.test(token)) return '모달 폭';
  return '기타';
};
const getName = (token, note) => {
  const key = token.replace(/^--ds-/, '');
  if (fixedNames[key]) return fixedNames[key];
  const font = key.match(/^font-(heading|body|caption)-(.+)-(size|line-height|letter-spacing|weight)$/);
  if (font) return `${{ heading: '제목', body: '본문', caption: '캡션' }[font[1]]} ${font[2].replaceAll('-', ' ')} · ${{ size: '크기', 'line-height': '행간', 'letter-spacing': '자간', weight: '굵기' }[font[3]]}`;
  const palette = key.match(/^color-(base|grey|darkblue|blue|green|yellow|lightgreen|red)-(.+)$/);
  if (palette) return palette[1] === 'base' ? `기본 ${palette[2] === 'black' ? '검정' : '흰색'}` : `${paletteNames[palette[1]]} ${palette[2]}`;
  const semantic = key.match(/^color-(text|bg|border|icon)-(.+)$/);
  if (semantic) return `${semantic[2].split('-').map(part => roleNames[part] || part).join(' ')} · ${{ text: '글자', bg: '배경', border: '선', icon: '아이콘' }[semantic[1]]}`;
  const modal = key.match(/^modal-width-(.+)$/);
  if (modal) return `모달 ${modal[1].toUpperCase()}`;
  const direct = key.match(/^(space|radius|border|icon)-(.+)$/);
  if (direct) return `${{ space: '간격', radius: '모서리', border: '테두리', icon: '아이콘' }[direct[1]]} ${direct[2]}`;
  const shadow = key.match(/^shadow-(.+)$/);
  if (shadow) return `그림자 ${shadow[1]}`;
  return note || key;
};
const getUsage = (group, token, note) => {
  if (group === '화면 폭') return token.endsWith('min') ? '모바일 레이아웃의 최소 기준 폭' : '이 폭 이하에서 모바일 레이아웃으로 전환';
  if (group === '상태색 (배경·선·글자 세트)') return `상태 표현에 사용하는 ${token.includes('-bg-') ? '배경색' : token.includes('-border-') ? '테두리색' : '글자색'}`;
  if (group === '글자') return note || '텍스트 스타일의 글꼴·크기·행간·자간';
  if (group === '브랜드') return '브랜드의 기본 팔레트';
  if (group === '회색') return '중립 UI와 텍스트 계층에 사용하는 회색 팔레트';
  if (group === '모서리') return '컴포넌트 모서리 형태';
  if (group === '그림자') return note || '레이어의 깊이와 분리를 표현';
  if (group === '간격') return '레이아웃과 컴포넌트 내부 간격';
  if (group === '모달 폭') return '모달 크기별 최대 폭';
  if (group === '테두리') return '테두리 굵기';
  if (group === '아이콘') return '아이콘 표시 크기';
  return note || '디자인 시스템 토큰';
};
const tokens = sourceTokens.map(({ token, raw, note }) => {
  const group = getGroup(token);
  return { group, name: getName(token, note), token, value: resolve(raw), usage: getUsage(group, token, note) };
});
fs.writeFileSync(path.join(root, 'tokens.json'), `${JSON.stringify(tokens, null, 2)}\n`);
console.log('tokens.css', L.length, 'lines · typography.css', typo.length, 'styles · tokens.json', tokens.length);
