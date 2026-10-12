# Input

Figma 출처: 파일 `64Q1Re56aiAA8Al89pqjnV` / 노드 ID `7837:8282`, `7697:14799`, `6591:177940` / 마지막 확인일 `2026-10-12`

## 1. 개요 · 언제 쓰는지

입력 컴포넌트는 사용자가 문자·숫자 등 값을 직접 입력할 때 사용한다. 한 줄 입력은 `Textfield`, 여러 줄의 사유·메모는 `TextAreaField`를 사용한다. 고정된 선택지 중 하나를 고르는 필드는 `SelectField` 문서를 따른다.

## 2. Figma 출처

| 컴포넌트 | Figma 출처 | 설명 |
|---|---|---|
| `Textfield` | [Textfield 7837:8282](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7837-8282) | PC/MO 및 입력 상태 변형 |
| `TextAreaField` | [TextAreaField 7697:14799](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7697-14799) | 긴 글 입력과 글자 수 표시 |
| 입력 폼 배치 사례 | [배송조회 입력폼 6591:177940](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6591-177940) | 라벨과 입력 콘텐츠 배치 |

## 3. 변형(variant) · 크기

### Textfield

| 속성 | 값 | 설명 | Figma 출처 |
|---|---|---|---|
| `Device` | `PC`, `MO` | 장치별 높이·패딩·글자 크기 | [Textfield 7837:8282](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7837-8282) |
| `Style` | `Outlne` | Figma 원본 속성명. 외곽선형 입력 필드 | [Textfield 7837:8282](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7837-8282) |
| 높이 | PC `40px`, MO `48px` | 콘텐츠 영역 높이 | `CLAUDE.md` 3-0, 3-2 |
| 좌우 패딩 | `12px` | 텍스트·아이콘과 필드 경계 사이 | `CLAUDE.md` 3-2 |
| 글자 크기 | PC `14px`, MO `16px` | 입력 값과 placeholder | `CLAUDE.md` 3-0, 3-2 |
| 모서리 | `4px` | 기본 입력 필드 | [Textfield 7837:8282](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7837-8282) |

### TextAreaField

| 속성 | 값 | 설명 | Figma 출처 |
|---|---|---|---|
| 글자 크기 | `16px` | PC·모바일 공통 | [TextAreaField 7697:14799](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7697-14799), `CLAUDE.md` 3-0 |
| 줄 높이 | `24px` | 입력 본문 | [TextAreaField 7697:14799](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7697-14799) |
| 모서리 | `4px` | 긴 글 입력 필드 | [TextAreaField 7697:14799](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7697-14799) |
| 글자 수 | 우측 정렬, `14px` / line-height `20px` | 설정된 최대 글자 수 표시 | [TextAreaField 7697:14799](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7697-14799) |

## 4. 상태

| 상태 | 사용 시점 | 표시 규칙 | Figma 출처 |
|---|---|---|---|
| `Inactive` | 값이 없고 아직 입력하지 않음 | MO 테두리 1px `#BDBDBD`, 흰 배경 | [Textfield Inactive MO 3065:29264](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=3065-29264) |
| `Default` | 입력 가능한 기본 상태 | PC·MO 테두리 1px `#333333`, 흰 배경 | [Textfield Default MO 53:137](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-137), [PC 6201:9260](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6201-9260) |
| `Focused` | 사용자가 필드를 편집 중 | 2px 브랜드 테두리, 바깥 outline 없음 | [Textfield Focused MO 53:145](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-145) |
| `Error` | 입력값 검증 실패 | 2px 위험 테두리와 에러 메시지 | [Textfield 7837:8282](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7837-8282) |
| `Disabled` | 현재 조건에서 입력할 수 없음 | MO 테두리 1px `#BDBDBD`, 비활성 배경·글자 | [Textfield Disabled MO 53:141](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-141) |
| `ReadOnly` | 값은 보여 주지만 직접 수정하지 않음 | 비활성 배경, 값은 읽을 수 있는 대비 | [Textfield 7837:8282](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7837-8282) |

Figma 속성 원문 `Outlne`, `Incative`는 각각 표준명 `Outline`, `Inactive`로 정규화해 표기한다.

## 5. 토큰 매핑

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---|---|---|
| `border/radius/radius1` | `4px` | Textfield·TextAreaField 모서리 | Textfield `7837:8282`, TextAreaField `7697:14799` |
| `spacing/12` | `12px` | 입력 필드 좌우 여백, MO 내부 패딩 | Textfield `7837:8282` |
| `color/bg/primary` | `#FFFFFF` | 활성 입력 배경 | Textfield `7837:8282` |
| `color/bg/disabled` | `#EEEEEE` | Disabled·ReadOnly 배경 | Textfield `7837:8282` |
| `color/border/primitive/secondary-hover:active` | `#333333` | 기본 입력 테두리 | Textfield `7837:8282` |
| `color/border/primitive/primary` | `#323DA3` | 포커스 테두리 | Textfield `7837:8282` |
| `color/border/danger` | `#E53935` | 오류 테두리 | Textfield `7837:8282` |
| `color/border/disabled` | `#BDBDBD` | 비활성·읽기전용 테두리 | Textfield `7837:8282` |
| `Color/Grey/400` | `#BDBDBD` | MO 값 없음(Inactive) 테두리 | [Textfield Inactive MO 3065:29264](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=3065-29264) |

CSS에서는 기본 입력이 placeholder 유무와 관계없이 Default 테두리(`#333333`)를 사용한다. Figma Inactive 모습이 필요한 경우에만 `.ds-is-inactive`를 추가해 `#BDBDBD` 테두리와 흰 배경을 표시한다. HTML `disabled` 상태는 Disabled 스타일을 적용한다.

## 6. PC / 모바일(≤1024) 차이

| 항목 | PC (≥1025px) | 모바일 (≤1024px) | 근거 |
|---|---|---|---|
| Textfield 높이 | `40px` | `48px` | `CLAUDE.md` 3-0, 3-2 |
| Textfield 좌우 패딩 | `8px 12px` | `12px` | `CLAUDE.md` 3-0, 3-2 |
| Textfield 글자 | `14px` | `16px` | `CLAUDE.md` 3-0, 3-2 |
| 값 없음(Inactive) 테두리 | `1px #616161` | `1px #BDBDBD` | `CLAUDE.md` 3-2; Figma MO [3065:29264](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=3065-29264) |
| 값 입력(Default) 테두리 | `1px #333333` | `1px #333333` | Figma PC [6201:9260](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6201-9260), MO [53:137](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-137) |
| 포커스 테두리 | `2px #323DA3` | `2px #323DA3` | Figma MO [53:145](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-145) |
| TextAreaField 글자 | `16px` | `16px` | 동일 |
| 입력 폼 라벨 | 폭 `125px` 고정 | 폭 `125px` 고정 | `CLAUDE.md` 3-2 |

모달·바텀시트 안에서도 입력 필드는 동일 기준으로 1024px 이하에서 MO 크기로 바꾼다. 입력 폼은 가용 폭에 따라 재배치되며, 409px·313px 줄바꿈 지점은 브레이크포인트가 아니라 라벨·gap·최소 너비 계산 결과다.

## 7. 사용 규칙

1. 필드마다 사용 목적을 설명하는 라벨을 연결한다. 필수 입력은 라벨 뒤에 빨간 `*`를 표시한다.
2. 도움말은 입력 형식이나 조건을 안내해야 할 때만 필드 아래에 둔다. 기본 상태를 설명하는 문구를 반복해서 넣지 않는다.
3. 검증 오류는 테두리만 바꾸지 말고 입력 필드 아래에 오류 이유를 텍스트로 제공한다.
4. 비활성 필드와 읽기전용 필드를 구분한다. 우편번호처럼 버튼을 통해 값이 채워지는 필드는 읽기전용으로 표시한다.
5. 입력 텍스트와 아이콘은 필드 높이 안에서 세로 가운데 정렬한다. 위아래 패딩으로 높이를 맞추지 않는다.
6. 일반 텍스트 입력은 값이 있을 때 지우기(X)를 표시한다. X를 누르면 값만 비우고 입력 포커스와 모바일 키보드를 유지한다. Disabled·ReadOnly·날짜·SelectField에는 X를 두지 않는다.
7. 검색 입력은 별도 예외다. 오른쪽 돋보기 버튼을 유지하고 X를 표시하지 않으며, 필드를 다시 누르면 검색어 전체를 선택한다.
8. 모바일 글자 입력은 `16px` 이상으로 둔다. 숫자 입력은 전화번호·우편번호 목적에 맞는 `inputmode`를 지정한다.
9. TextAreaField에는 줄바꿈을 허용하고, 설정된 글자 수 제한과 현재 입력량을 함께 표시한다.

## 8. 사용 화면 예시

| 화면·목적 | 컴포넌트 | 예시 |
|---|---|---|
| 수급자 연락처 입력 | Textfield | 가상 전화번호 `010-0000-0000` |
| 배송지 주소 입력 | Textfield | `서울시 예시구 가상로 10` |
| 사유·메모 작성 | TextAreaField | `요청 사유를 입력해 주세요.` |
| 우편번호 찾기 | ReadOnly Textfield + Button | 버튼으로 검색한 값을 필드에 표시 |

## 9. 확인 필요

현재 확인 필요 항목 없음.

## CSS 클래스

| 클래스 | 용도 |
|---|---|
| `.ds-field` | 라벨·입력·도움말을 묶는 필드 |
| `.ds-field__label` | 필드 라벨 |
| `.ds-input` | 한 줄 입력. 기본(Default) 테두리는 `#333333` |
| `.ds-input-wrap` | 입력과 지우기 버튼의 위치 기준 |
| `.ds-input__clear` | 값이 있고 입력 그룹에 포커스가 있을 때 표시되는 지우기 버튼. Disabled·ReadOnly에서는 숨김 |
| `.ds-textarea` | 여러 줄 입력 |
| `.ds-field__hint` | 입력 도움말 |
| `.ds-field__error` | 오류 메시지 |
| `.ds-textarea__count` | 글자 수 표시 |
| `.ds-is-readonly` | 읽기전용 표시용 클래스 |
| `.ds-is-inactive` | Figma Inactive 변형 표시용 클래스 |
| `.ds-is-error` | 오류 표시용 클래스 |
| `:focus-visible` | 키보드 포커스 테두리 |
| `:disabled` | 비활성 상태 |
| `[aria-invalid="true"]` | 검증 오류 상태 |

## HTML 예시

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
  <span class="ds-field__hint">숫자만 입력해 주세요.</span>
</label>
```

```html
<label class="ds-field">
  <span class="ds-field__label">요청 사유</span>
  <textarea class="ds-textarea" aria-invalid="true"></textarea>
  <span class="ds-field__error">요청 사유를 입력해 주세요.</span>
</label>
```
