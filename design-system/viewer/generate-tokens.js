const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const css = fs.readFileSync(path.join(root, 'css/tokens.css'), 'utf8');
const paletteNames = {
  black: '검정', white: '흰색', grey: '회색', darkblue: '브랜드 블루',
  blue: '정보 블루', green: '성공 그린', yellow: '주의 옐로',
  lightgreen: '브랜드 그린', red: '오류 레드'
};
const roleNames = {
  info: '정보', success: '성공', warning: '주의', danger: '오류',
  brand: '브랜드', neutral: '중립', primary: '기본', secondary: '보조',
  tertiary: '강조', disabled: '비활성', 'brand-sub': '브랜드 보조'
};
const koreanNames = {
  'base-black': '기본 검정', 'base-white': '기본 흰색',
  'text-primary-hover-active': '기본 글자 · hover/active',
  'font-family-suit': '글꼴 · SUIT',
  'radius-circle': '완전 원형', 'shadow-default': '기본 그림자',
  'shadow-card-list': '카드 목록 그림자', 'shadow-5-left': '왼쪽 패널 그림자',
  'shadow-6-top': '상단 고정 그림자',
  'breakpoint-mobile-min': '최소 모바일 폭',
  'breakpoint-mobile-max': '모바일 전환 최대 폭'
};

function getGroup(token) {
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
}

function getName(token, comment) {
  const key = token.replace(/^--ds-/, '');
  if (koreanNames[key]) return koreanNames[key];
  const font = key.match(/^font-(heading|body|caption)-(.+)-(size|line-height|letter-spacing)$/);
  if (font) {
    const style = font[1] === 'heading' ? '제목' : font[1] === 'body' ? '본문' : '캡션';
    return `${style} ${font[2].replaceAll('-', ' ')} · ${font[3] === 'size' ? '크기' : font[3] === 'line-height' ? '행간' : '자간'}`;
  }
  const palette = key.match(/^color-(base|grey|darkblue|blue|green|yellow|lightgreen|red)-(.+)$/);
  if (palette) return palette[1] === 'base' ? `기본 ${palette[2] === 'black' ? '검정' : '흰색'}` : `${paletteNames[palette[1]]} ${palette[2]}`;
  const semantic = key.match(/^color-(text|bg|border)-(.+)$/);
  if (semantic) {
    const category = { text: '글자', bg: '배경', border: '선' }[semantic[1]];
    const role = semantic[2].split('-').map(part => roleNames[part] || part).join(' ');
    return `${role} · ${category}`;
  }
  const modal = key.match(/^modal-width-(.+)$/);
  if (modal) return `모달 ${modal[1].toUpperCase()}`;
  const direct = key.match(/^(space|radius|border|icon)-(.+)$/);
  if (direct) return `${{space:'간격',radius:'모서리',border:'테두리',icon:'아이콘'}[direct[1]]} ${direct[2]}`;
  const shadow = key.match(/^shadow-(.+)$/);
  if (shadow) return `그림자 ${shadow[1]}`;
  return comment || key;
}

function getUsage(group, token, comment) {
  const note = comment?.trim();
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
}

const tokens = [];
const pattern = /(--ds-[\w-]+)\s*:\s*([^;]+);(?:\s*\/\*\s*([^*]*?)\s*\*\/)?/g;
for (const match of css.matchAll(pattern)) {
  const token = match[1];
  const value = match[2].trim();
  const group = getGroup(token);
  tokens.push({ group, name: getName(token, match[3]), token, value, usage: getUsage(group, token, match[3]) });
}

fs.writeFileSync(path.join(root, 'tokens.json'), `${JSON.stringify(tokens, null, 2)}\n`);
console.log(`Wrote ${tokens.length} tokens from tokens.css`);
