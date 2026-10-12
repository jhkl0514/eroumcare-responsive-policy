# 이로움Care Design System

Figma 출처: 파일 `64Q1Re56aiAA8Al89pqjnV` / 노드 ID `36:11730` / 마지막 확인일 `2026-10-12`

이 문서는 디자이너와 개발자가 함께 사용하는 이로움Care 디자인 시스템 문서의 시작점이다. 구현 규칙은 프로젝트 확정값을 기준으로 하고, Figma 라이브러리의 원본 노드와 변수 출처를 각 문서에 연결한다.

## 문서

| 문서 | 다루는 내용 |
|---|---|
| [Foundations](./foundations.md) | 원본·시맨틱 컬러, 타이포, 간격, 모서리, 그림자, 브레이크포인트 |
| [Button](./components/button.md) | 버튼 종류, 크기, 상태, 배치 규칙 |
| [Input](./components/input.md) | Textfield, TextAreaField, 입력 상태와 키보드 규칙 |
| [Select](./components/select.md) | SelectField, SelectOption, OptionGroup, 선택 흐름 |
| [Modal](./components/modal.md) | 모달 크기와 모바일 팝업 형태 선택 |
| [Status Chip](./components/status-chip.md) | 구입·대여·회수·A/S·반품 상태 표시 |

## 프로젝트 기준

| 항목 | 기준 |
|---|---|
| 반응형 분기 | PC는 `1025px 이상`, 모바일은 `1024px 이하` |
| 최소 모바일 폭 | `360px`; 콘텐츠 최소 너비는 `320px` |
| 입력 컴포넌트 | Textfield·SelectField는 PC 40px, 모바일 48px. SelectOption은 PC 36px, 모바일 44px |
| 버튼 | SM 36px / MD 48px는 PC·모바일 공통. 화면 하단 고정과 BottomSheet 하단 액션만 LG 54px |
| 모달 폭 | md 480 / lg 600 / xl 800px; sm 340px은 Figma DS 기준, 사용 여부 확인 중 |
| 카드 목록 | 카드 사이 간격 12px, 모서리 8px, 그림자 사용 |

세부 값과 Figma 출처는 [Foundations](./foundations.md) 및 각 컴포넌트 문서를 따른다. 모달 SM 340px은 Figma DS 출처이며, 프로젝트 사용 여부는 확인 중이다. 나머지 프로젝트 기준은 `CLAUDE.md` 확정 규칙을 따른다.

## 출처와 표기

- Figma DS 라이브러리: [64Q1Re56aiAA8Al89pqjnV](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=36-11730)
- 프로젝트 기준: `CLAUDE.md` 3장·5장
- 참고 링크: [uxuithkc.netlify.app/framework](https://uxuithkc.netlify.app/framework) (접근 불가, 추후 확인)
- Figma 속성명·컴포넌트명은 문서에서 표준화해 쓸 수 있으며, 원본과 다른 이름이나 값은 해당 문서에 원문과 함께 기록한다.
- 확정되지 않았거나 출처 간 차이가 남은 내용은 각 문서의 `확인 필요`에 기록한다.
- 개발 미사용으로 삭제 예정인 항목은 승인된 결정 번호와 문서 처리 기준에 따라 본문 스펙에서 제외한다.

## CSS 사용법

저장소 루트 기준 경로입니다. 다른 하위 폴더에서 사용할 때는 현재 문서 경로에 맞게 상대 경로를 조정합니다. 토큰을 먼저 불러온 뒤 컴포넌트 스타일을 불러옵니다.

```html
<link rel="stylesheet" href="/design-system/css/tokens.css">
<link rel="stylesheet" href="/design-system/css/components.css">
```

모든 컴포넌트 클래스는 `ds-`로 시작합니다. 색·크기·간격은 tokens.css의 사용자 정의 속성을 사용합니다. CSS는 표현만 제공하며 입력 지우기, Select 열기, Modal 표시·닫기 동작은 구현하지 않습니다.

### 클래스 목록

| 컴포넌트 | 클래스 |
|---|---|
| Button | `.ds-btn`, `.ds-btn--primary`, `.ds-btn--secondary`, `.ds-btn--tertiary`, `.ds-btn--outline`, `.ds-btn--outline-secondary`, `.ds-btn--sm`, `.ds-btn--md`, `.ds-btn--lg`, `.ds-btn--block` |
| Input | `.ds-field`, `.ds-field__label`, `.ds-input-wrap`, `.ds-input`, `.ds-input__clear`, `.ds-textarea`, `.ds-field__hint`, `.ds-field__error`, `.ds-textarea__count`, `.ds-is-readonly`, `.ds-is-error` |
| Select | `.ds-select`, `.ds-select__trigger`, `.ds-select__list`, `.ds-select__option`, `.ds-is-readonly`, `.ds-is-error` |
| Modal | `.ds-modal-backdrop`, `.ds-modal`, `.ds-modal--sm`, `.ds-modal--md`, `.ds-modal--lg`, `.ds-modal--xl`, `.ds-modal__header`, `.ds-modal__title`, `.ds-modal__body`, `.ds-modal__footer`, `.ds-modal__close`, `.ds-bottom-sheet`, `.ds-bottom-sheet__body`, `.ds-bottom-sheet__footer` |
| Status Chip | `.ds-chip` + 의미 또는 도메인 상태 modifier, `.ds-chip--table` |

상태는 `:hover`, `:focus-visible`, `:disabled`, `[aria-invalid="true"]`로 표현합니다. 읽기전용 클래스는 접두사 규칙에 따라 `.ds-is-readonly`를 사용합니다.

### Button

```html
<button class="ds-btn ds-btn--primary ds-btn--md" type="button">저장</button>
<button class="ds-btn ds-btn--primary ds-btn--lg ds-btn--block" type="button">주문하기</button>
```

### Input

```html
<label class="ds-field">
  <span class="ds-field__label">연락처</span>
  <span class="ds-input-wrap">
    <input class="ds-input" type="tel" inputmode="tel" value="010-0000-0000" placeholder="연락처">
    <button class="ds-input__clear" type="button" aria-label="입력 지우기">
      <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
    </button>
  </span>
</label>
```

### Select

```html
<div class="ds-select">
  <button class="ds-select__trigger" type="button" aria-haspopup="listbox" aria-expanded="true">수급자</button>
  <div class="ds-select__list" role="listbox" aria-label="검색 기준">
    <button class="ds-select__option" type="button" role="option" aria-selected="true">수급자</button>
    <button class="ds-select__option" type="button" role="option" aria-selected="false">연락처</button>
  </div>
</div>
```

### Modal

```html
<div class="ds-modal-backdrop">
  <section class="ds-modal ds-modal--sm" role="dialog" aria-modal="true" aria-labelledby="confirm-title">
    <h2 class="ds-modal__title" id="confirm-title">저장할까요?</h2>
    <div class="ds-modal__body">입력한 내용을 저장합니다.</div>
    <footer class="ds-modal__footer">
      <button class="ds-btn ds-btn--outline ds-btn--md" type="button">취소</button>
      <button class="ds-btn ds-btn--primary ds-btn--md" type="button">확인</button>
    </footer>
  </section>
</div>
```

### Status Chip

```html
<span class="ds-chip ds-chip--purchase-preparing">상품준비</span>
```
