# Checkbox

문서 상태: **초안 / 검토 필요** · 마지막 확인일: `2026-10-12`

## 1. 개요 · 언제 쓰는지

독립적인 항목의 선택 여부 또는 복수 선택을 표시한다. Figma 원본 이름은 `checkbox`다. 컨트롤 자체의 스타일과 화면의 선택·동의 정책을 구분한다. 이번 문서는 CSS·JS 구현을 포함하지 않는다.

## 2. Figma 출처

| 항목 | 출처 |
|---|---|
| DS 파일·캔버스 | [64Q1Re56aiAA8Al89pqjnV / 36:11730](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=36-11730) |
| 컴포넌트 세트 `checkbox` | [6568:9409](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9409) |
| 라벨 조합 관찰 예시 | [11195:14350](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=11195-14350) |
| 이로움케어 프레임워크 | [Checkbox / 238:13303](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=238-13303) |
| 프로젝트 기준 | [CLAUDE.md](../../CLAUDE.md) 3-0·3-7·9장: 컨트롤 20×20, 모바일 줄 전체 터치·줄 높이 44 이상 |
| 토큰 기준 | [Foundations](../foundations.md), [tokens.css](../css/tokens.css) |

원본 컴포넌트에는 라벨이 없다. 라벨 조합 예시는 관찰값이며 모든 사용처의 규격으로 확대하지 않는다.

## 3. 변형(variant) · 크기

| 항목 | 확인한 값 | 출처 |
|---|---|---|
| `State` | `Default`, `Pressed`, `Disabled` | [checkbox](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9409) |
| `Selected` | `off`, `on` | 같은 세트, 총 6개 변형 |
| 세트 기본값 | `State=Default`, `Selected=off` | 같은 세트의 속성 정의; 화면 기본 선택 정책과 별개 |
| 컨트롤 크기·모서리 | 20×20px, radius 4px | 같은 세트의 모든 변형 |
| 미선택·Disabled 테두리 | 1px; 활성 선택 상태에는 stroke 없음 | 같은 세트 |
| 체크 아이콘 | 16×16px, 컨트롤 안 x/y 2px | [Default/on](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9406) |
| 라벨 조합 | gap 8px, SUIT Regular 14/20, 자간 0%, 가운데 정렬 | [11195:14350](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=11195-14350) |
| 관찰 예시의 항목 간격 | 16px, 가로 배치 | [11195:14349](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=11195-14349); CLAUDE.md 3-7 PC 필터 규칙과 일치 |

## 4. 상태

| Figma 변형 | 배경 | 테두리 | 체크 | 출처 |
|---|---|---|---|---|
| Default / off | `#FFFFFF` | `#616161`, 1px | 없음 | [6568:9408](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9408) |
| Default / on | `#323DA3` | 없음 | `#FFFFFF` | [6568:9406](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9406) |
| Pressed / off | `#FFFFFF` | `#333333`, 1px | 없음 | [6568:9407](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9407) |
| Pressed / on | `#141E76` | 없음 | `#FFFFFF` | [6568:9404](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9404) |
| Disabled / off | `#EEEEEE` | `#BDBDBD`, 1px | 없음 | [6568:9405](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9405) |
| Disabled / on | `#EEEEEE` | `#BDBDBD`, 1px | `#BDBDBD` | [6568:9403](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9403) |

`Pressed`는 원본 상태명 그대로 기록하며 hover·focus로 매핑하지 않는다. 공통 상호작용 규칙 hover/focus/pressed: 정의 없음(현행 유지). 위 세트의 모든 변형은 그림자 효과가 없다. Disabled 라벨의 색상은 아이콘만 있는 세트에서 확인할 수 없다.

## 5. 토큰 매핑

아래 CSS 변수는 기존 변수와 값이 같은 재사용 후보다. Figma의 시맨틱 이름과 일대일로 연결되지 않은 항목도 명시한다. 이번에 토큰을 추가하지 않는다.

| 용도 | Figma 변수 또는 측정값 | 기존 CSS 토큰 | 출처 |
|---|---|---|---|
| 기본 배경 | `Color/bg/primary` / `#FFFFFF` | `--ds-color-bg-primary` | [Default/off](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9408) |
| 미선택 테두리 | `Color/border/Primitive/secondary` / `#616161` | `--ds-color-grey-600`; 동일 시맨틱 토큰 없음 | 같은 노드 |
| Pressed 미선택 테두리 | `Color/border/Primitive/secondary-hover:active` / `#333333` | `--ds-color-grey-800`; 동일 시맨틱 토큰 없음 | [Pressed/off](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9407) |
| 선택 배경 | `Color/bg/Primitive/primary` / `#323DA3` | `--ds-color-darkblue-600`; 동일 시맨틱 토큰 없음 | [Default/on](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9406) |
| Pressed 선택 배경 | `Color/bg/Primitive/primary-hover:active` / `#141E76` | `--ds-color-darkblue-800`; 동일 시맨틱 토큰 없음 | [Pressed/on](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9404) |
| 활성 체크 | `Color/icon/Primitive/inverse` / `#FFFFFF` | `--ds-color-base-white`; 아이콘 시맨틱 토큰 없음 | Default/on·Pressed/on |
| 비활성 배경 | `Color/bg/disabled` / `#EEEEEE` | `--ds-color-bg-disabled` | [Disabled/on](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9403) |
| 비활성 테두리·체크 | `Color/border/disabled`, `Color/icon/disabled` / `#BDBDBD` | `--ds-color-grey-400`; 해당 시맨틱 토큰 없음 | 같은 노드 |
| 크기·아이콘·간격 | 20 / 16 / 8px | `--ds-space-20`, `--ds-space-16`, `--ds-space-8`은 값만 동일; 크기 토큰 추가 후보 | 세트·라벨 조합 예시 |
| 모서리 | 4px | `--ds-radius-4` | 세트 |
| 예시 라벨 | `Suit/Body/SS/Regular` / 14/20, 자간 0 | `--ds-font-body-ss-regular-size`, `--ds-font-body-ss-regular-line-height`, `--ds-font-body-ss-regular-letter-spacing` | [11195:14352](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=11195-14352) |

추가 토큰 후보: 컨트롤 크기 20, 체크 아이콘 크기 16, 모바일 최소 터치 높이 44, 위 표에서 누락된 시맨틱 색상. 라벨의 SUIT Regular 굵기 토큰도 현재 CSS에 없어 후보로 남긴다. 명칭은 구현 전 검토한다.

## 6. PC / 모바일(≤1024) 차이

| 항목 | PC (≥1025) | 모바일 (≤1024) | 근거 |
|---|---|---|---|
| 컨트롤 | 20×20 | 20×20 | Figma 세트·CLAUDE.md 3-0 일치 |
| 터치 영역 | 컨트롤과 연결된 라벨 | 줄 전체가 터치 대상, 줄 높이 최소 44 | CLAUDE.md 3-0·9장; Figma 아이콘 크기와 다른 개념 |
| 라벨·내용 | 라벨 125px 고정, 내용 영역 flex. 수정형 전환 폭은 125+4+280=409px, 조회형은 125+8+180=313px이며 이 폭보다 좁으면 내용이 라벨 아래로 줄바꿈 | 동일한 구조 적용 | 프로젝트 정책 `input-field-compare-demo` / `text-table-compare-demo` |
| 선택지 배치 | 가로 나열, 항목 간격 24px; 공간이 부족하면 다음 줄로 배치 | 동일한 구조 적용 | 프로젝트 정책 기준 |
| 여러 줄 라벨 | 컨트롤을 라벨 첫 줄에 맞춤 | 동일한 구조 적용 | 프로젝트 정책 기준 |
| 최소 검토 폭 | 화면에 맞춤 | 360px | 프로젝트 반응형 기준 |

모바일에서 컨트롤을 44px로 키우는 것이 아니라 라벨 행의 터치 영역을 확보한다. 여러 줄 라벨은 내용에 따라 행이 늘어나며 컨트롤은 첫 줄에 맞춘다. 라벨과 내용 배치 규칙은 프로젝트 정책 `input-field-compare-demo` / `text-table-compare-demo`를 따른다.

## 7. 사용 규칙 · 접근성

권장: 독립·복수 선택에 사용하고 선택 표시를 색상과 체크로 함께 제공한다. 금지: Radio가 필요한 단일 선택을 Checkbox 외형만으로 표현하거나, 세트의 기본값을 모든 화면의 초기값으로 적용하지 않는다.

‘전체 동의’와 개별 동의 연동, 기본 선택, 필수 여부, 회수 계약·임대료 문구는 화면별 정책이다. CLAUDE.md 3-7의 ‘전체’ 필터 정책을 동의 폼에 자동 적용하지 않는다.

- 그룹 오류 표시: 정의 없음. UX 제안 DS-U1 참고(프로토타입)
- 부분 선택(Indeterminate): 정의 없음. UX 제안 DS-U2 참고(프로토타입)

아래는 Figma 디자인 값과 구분한 접근성 권장사항이다.

- native `input type="checkbox"`와 연결된 `label`을 사용한다. 커스텀 외형에서도 native input의 키보드·접근성 기능을 유지한다. [W3C 라벨 가이드](https://www.w3.org/WAI/tutorials/forms/labels/)
- Tab으로 이동하고 Space로 선택을 전환할 수 있어야 한다. 키보드 포커스는 보이게 제공한다. 시각 표현의 공통 규칙은 정의 없음(현행 유지). [W3C Checkbox 패턴](https://www.w3.org/WAI/ARIA/apg/patterns/checkbox/)
- 관련 항목은 필요에 따라 `fieldset`·`legend`로 묶는다. [W3C 그룹 가이드](https://www.w3.org/WAI/tutorials/forms/grouping/)
- 설명은 `aria-describedby`로 연결한다. 오류 시 `aria-invalid="true"`와 오류 텍스트를 함께 제공하되 미정인 오류 외형을 임의 확정하지 않는다.

최소 HTML 예시는 의미 구조만 보여준다. DS 클래스·스타일이 구현된 예시가 아니다.

```html
<fieldset>
  <legend>알림 수신 채널</legend>
  <label for="notice-email">
    <input id="notice-email" name="notice-channel" type="checkbox" value="email"
           aria-describedby="notice-help">
    <span>이메일</span>
  </label>
  <p id="notice-help">필요한 채널을 선택하세요.</p>
</fieldset>
```

## 8. 사용 화면 예시

| 확인한 예시 | 내용·범위 | 출처 |
|---|---|---|
| Figma 필터 조합 | ‘전체’ 라벨, gap 8, 항목 gap 16 | [11195:14349](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=11195-14349) |
| 구입 주문 상세 | 주문 변경 동의 Checkbox 구조를 로컬 소스에서 확인. DS 적용 완료를 뜻하지 않음 | [정책 사이트 프로토타입](https://eroumcare-responsive-policy.vercel.app/prototypes/order-detail-purchase.html); 근거: 로컬 `prototypes/order-detail-purchase.html`의 `cr-ck` 입력·연결 라벨. 배포본은 이번에 미검증 |

## 9. 확인 필요

| ID | 항목 | 확인 내용 |
|---|---|---|
| C-01 | Disabled 라벨 | 아이콘만 있는 세트에서 Disabled 라벨 색상은 확인할 수 없음 |
| C-02 | 토큰 추가 | 20·16 크기, 모바일 터치 높이 44, 누락 시맨틱 색·Regular 굵기 토큰 검토. 기존 spacing을 크기 토큰으로 대신 쓰지 않음 |

작성 범위: 공통 목차 9개, 상태 6개. 확인 필요 2건. Figma와 프로젝트의 확인된 컨트롤 크기·PC 필터 예시 값에는 불일치 없음. CSS 클래스는 이번에 추가하지 않음.

## 10. 프레임워크와 차이

프레임워크 Checkbox 노드의 컴포넌트 표현과 사용 원칙을 비교했다. 시각값은 DS 라이브러리 기준을 유지한다.

| 항목 | DS 값 | 프레임워크 값 | 노드 ID |
|---|---|---|---|
| 컨트롤 크기 | 20×20px | 20×20px | DS [6568:9409](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6568-9409) · Framework [238:13303](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=238-13303) |
| 상태 표현 | `Default`, `Pressed`, `Disabled` × `off/on` | 기본·눌림·비활성 및 선택 여부 | 같은 노드 |
| 사용 지침 | 공통 컴포넌트 세트에는 행위 정책 없음 | 다중 선택에 사용; 전체 선택은 하위 항목과 연동하는 패턴으로 설명 | 같은 노드 |

프레임워크의 전체 선택 연동은 화면 패턴이며, 이 문서에서 공통 컴포넌트 동작으로 정의하지 않는다.
