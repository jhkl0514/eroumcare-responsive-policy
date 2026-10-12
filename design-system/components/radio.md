# Radio

문서 상태: **초안 / 검토 필요** · 마지막 확인일: `2026-10-12`

## 1. 개요 · 언제 쓰는지

하나의 선택 그룹에서 한 항목을 선택할 때 사용한다. Figma 원본 이름은 `Radio`다. 그룹의 기본 선택·필수 여부는 화면별 정책이고, 세트의 기본값과 구분한다. 이번 문서는 CSS·JS 구현을 포함하지 않는다.

## 2. Figma 출처

| 항목 | 출처 |
|---|---|
| DS 파일·캔버스 | [64Q1Re56aiAA8Al89pqjnV / 36:11730](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=36-11730) |
| 컴포넌트 세트 `Radio` | [52:46](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-46) |
| 라벨·가로 그룹 관찰 예시 | [11758:16219](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=11758-16219), [11758:16218](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=11758-16218) |
| 이로움케어 프레임워크 | [Radio / 239:14963](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=239-14963) |
| 프로젝트 기준 | [CLAUDE.md](../../CLAUDE.md) 3-0·9장: 컨트롤 20×20, 모바일 줄 전체 터치·줄 높이 44 이상 |
| 토큰 기준 | [Foundations](../foundations.md), [tokens.css](../css/tokens.css) |

Figma 세트에는 컨트롤만 있고 라벨은 없다. 조합 예시의 측정값을 모든 화면의 공통 규격으로 확대하지 않는다.

## 3. 변형(variant) · 크기

| 항목 | 확인한 값 | 출처 |
|---|---|---|
| `State` | `Default`, `Pressed`, `Disabled`, `check`, `checkLine` | [Radio](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-46) |
| `Selected` | `Off`, `On` | 같은 세트, 총 10개 변형; Checkbox의 소문자 값과 구분 |
| 세트 기본값 | `State=Default`, `Selected=Off` | 세트 속성 정의; 화면 초기값과 별개 |
| 컨트롤·모서리 | 20×20px, radius 999px | 같은 세트 모든 변형 |
| 원형 선택 표시 | 흰 원 10×10px, x/y 5px | [Default/On](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-54) |
| 체크형 선택 표시 | 체크 아이콘 16×16px, x/y 2px | [checkLine/On](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13113-11910), [check/On](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13113-11916) |
| 라벨 조합 | gap 8px, SUIT Regular 14/20, 자간 0%, 가운데 정렬 | [11758:16219](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=11758-16219) |
| 가로 그룹 | 항목 gap 16px, 가운데 정렬 | [11758:16218](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=11758-16218) |

Pressed/On·Disabled/On의 내부에 8×8 원도 있으나 `visible=false`다. 실제 보이는 원은 10×10이므로 숨겨진 원을 스펙으로 사용하지 않는다. `check`·`checkLine`은 원본에서 `State` 값이지만 외형 변형처럼 보인다. 용도와 API 분류는 확인 필요다.

## 4. 상태

| Figma 변형 | 배경 | 테두리 | 선택 표시 | 출처 |
|---|---|---|---|---|
| Default / Off | `#FFFFFF` | `#616161`, 1px | 없음 | [52:45](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-45) |
| Default / On | `#323DA3` | 없음 | 흰 원 10 | [52:54](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-54) |
| Pressed / Off | `#FFFFFF` | `#333333`, 1px | 없음 | [52:48](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-48) |
| Pressed / On | `#141E76` | 없음 | 흰 원 10 | [52:56](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-56) |
| Disabled / Off | `#EEEEEE` | `#BDBDBD`, 1px | 없음 | [52:49](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-49) |
| Disabled / On | `#EEEEEE` | `#BDBDBD`, 1px | 흰 원 10 | [52:57](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-57) |
| checkLine / Off | `#FFFFFF` | `#BDBDBD`, 1px | 없음 | [13113:11909](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13113-11909) |
| checkLine / On | `#323DA3` | 없음 | 흰 체크 16 | [13113:11910](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13113-11910) |
| check / Off | `#FFFFFF` | `#FFFFFF`, 1px | 없음 | [13113:11915](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13113-11915) |
| check / On | `#323DA3` | 없음 | 흰 체크 16 | [13113:11916](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13113-11916) |

모든 변형은 그림자 효과가 없다. 공통 상호작용 규칙 hover/focus/pressed: 정의 없음(현행 유지). Pressed를 hover·focus로 임의 매핑하지 않는다. Disabled 선택 원의 흰색은 확인한 원본 값이며 Checkbox 비활성 체크의 회색과 다르다. 통일 여부를 임의 결정하지 않는다.

## 5. 토큰 매핑

값이 같은 기존 CSS 토큰을 후보로 기록한다. Figma 시맨틱 이름과 동일한 CSS 토큰이 없으면 별도 표시한다.

| 용도 | Figma 변수 또는 측정값 | 기존 CSS 토큰 | 출처 |
|---|---|---|---|
| 기본 배경·기본 선택 원 | `Color/bg/primary` / `#FFFFFF` | `--ds-color-bg-primary` | [Default/On](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-54) |
| 미선택 테두리 | `Color/border/Primitive/secondary` / `#616161` | `--ds-color-grey-600`; 동일 시맨틱 토큰 없음 | [Default/Off](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-45) |
| Pressed 미선택 테두리 | `Color/border/Primitive/secondary-hover:active` / `#333333` | `--ds-color-grey-800`; 동일 시맨틱 토큰 없음 | [Pressed/Off](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-48) |
| 선택 배경 | `Color/bg/Primitive/primary` / `#323DA3` | `--ds-color-darkblue-600`; 동일 시맨틱 토큰 없음 | Default/On·check/On·checkLine/On |
| Pressed 선택 배경 | `Color/bg/Primitive/primary-hover:active` / `#141E76` | `--ds-color-darkblue-800`; 동일 시맨틱 토큰 없음 | [Pressed/On](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-56) |
| 비활성 배경 | `Color/bg/disabled` / `#EEEEEE` | `--ds-color-bg-disabled` | [Disabled/On](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-57) |
| 비활성 테두리 | `Color/border/disabled` / `#BDBDBD` | `--ds-color-grey-400`; 동일 시맨틱 토큰 없음 | 같은 노드 |
| checkLine 미선택 테두리 | `Color/border/primary` / `#BDBDBD` | `--ds-color-border-primary` | [checkLine/Off](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13113-11909) |
| check 미선택 테두리 | `Color/border/Primitive/inverse` / `#FFFFFF` | `--ds-color-base-white`; 동일 시맨틱 토큰 없음 | [check/Off](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13113-11915) |
| 체크 아이콘 | `Color/icon/Primitive/inverse` / `#FFFFFF` | `--ds-color-base-white`; 아이콘 시맨틱 토큰 없음 | check/On·checkLine/On |
| 크기·원·아이콘 | 20 / 10 / 16px | 크기 전용 토큰 없음. 20·16은 spacing과 값만 같음, 10은 spacing에도 없음 | 세트의 가시 도형 |
| 모서리·라벨 gap | 999 / 8px | `--ds-radius-circle`, `--ds-space-8` | 세트·라벨 예시 |
| 예시 라벨 | `Suit/Body/SS/Regular` / 14/20, 자간 0 | `--ds-font-body-ss-regular-size`, `--ds-font-body-ss-regular-line-height`, `--ds-font-body-ss-regular-letter-spacing` | [11758:16221](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=11758-16221) |

추가 토큰 후보: 컨트롤 크기 20, 선택 원 크기 10, 체크 아이콘 크기 16, 모바일 최소 터치 높이 44, 누락 시맨틱 색상·Regular 굵기. 크기는 간격 토큰의 계산식으로 대신 정의하지 않는다. 변수명과 채택 여부는 구현 전 검토한다.

## 6. PC / 모바일(≤1024) 차이

| 항목 | PC (≥1025) | 모바일 (≤1024) | 근거 |
|---|---|---|---|
| 컨트롤 | 20×20 | 20×20 | Figma 세트·CLAUDE.md 3-0 일치 |
| 클릭·터치 영역 | 라벨과 연결 | 줄 전체 터치, 줄 높이 최소 44 | CLAUDE.md 3-0·9장 |
| 라벨·내용 | 라벨 125px 고정, 내용 영역 flex. 수정형 전환 폭은 125+4+280=409px, 조회형은 125+8+180=313px이며 이 폭보다 좁으면 내용이 라벨 아래로 줄바꿈 | 동일한 구조 적용 | 프로젝트 정책 `input-field-compare-demo` / `text-table-compare-demo` |
| 선택지 배치 | 가로 나열, 항목 간격 24px; 공간이 부족하면 다음 줄로 배치 | 동일한 구조 적용 | 프로젝트 정책 기준 |
| 여러 줄 라벨 | 컨트롤을 라벨 첫 줄에 맞춤 | 동일한 구조 적용 | 프로젝트 정책 기준 |
| 최소 검토 폭 | 화면에 맞춤 | 360px | 프로젝트 기준 |

라벨·내용 폭과 선택지 줄바꿈은 프로젝트 정책 `input-field-compare-demo` / `text-table-compare-demo`를 따른다. 좁은 화면에서는 선택지를 다음 줄로 배치하고, 여러 줄 라벨의 컨트롤은 첫 줄에 맞춘다.

## 7. 사용 규칙 · 접근성

권장: 단일 선택 그룹에 사용하고 옵션 라벨을 명확히 제공한다. 금지: 기본 선택·필수 여부를 세트의 기본값으로 결정하거나 `check` 외형을 이유로 복수 선택 동작을 적용하지 않는다. `check`·`checkLine`의 사용처는 먼저 확인한다.

- 그룹 오류 표시: 정의 없음. UX 제안 DS-U1 참고(프로토타입)

아래는 디자인 값과 구분한 접근성 권장사항이다.

- native `input type="radio"`와 연결된 `label`을 사용한다. 같은 그룹은 동일한 `name`, 각 항목은 구분되는 `value`를 사용한다. [HTML Radio 표준](https://html.spec.whatwg.org/multipage/input.html#radio-button-state-(type=radio))
- 관련 선택지는 `fieldset`·`legend`로 묶는다. 라벨에는 `for`와 `id` 연결 또는 input을 포함하는 구조를 사용한다. [W3C 그룹 가이드](https://www.w3.org/WAI/tutorials/forms/grouping/), [라벨 가이드](https://www.w3.org/WAI/tutorials/forms/labels/)
- native 키보드 동작을 유지하고 Tab·방향키·Space로 선택할 수 있게 한다. APG의 커스텀 그룹 패턴과 native 브라우저 동작의 차이를 고려한다. 포커스 시각 표현의 공통 규칙은 정의 없음(현행 유지). [W3C Radio 패턴](https://www.w3.org/WAI/ARIA/apg/patterns/radio/)
- 설명·오류 텍스트를 `aria-describedby`로 연결하고 오류 입력에 `aria-invalid="true"`를 표시한다. 비활성은 native `disabled`로 동작과 표시를 함께 처리한다.

최소 HTML 예시는 의미 구조만 보여준다. DS 클래스와 CSS는 아직 추가하지 않았으며 기본 선택·필수 여부를 예시에서 확정하지 않는다.

```html
<fieldset aria-describedby="channel-help">
  <legend>연락 방법</legend>
  <label for="channel-phone">
    <input id="channel-phone" name="contact-channel" type="radio" value="phone">
    <span>전화</span>
  </label>
  <label for="channel-email">
    <input id="channel-email" name="contact-channel" type="radio" value="email">
    <span>이메일</span>
  </label>
  <p id="channel-help">한 가지 연락 방법을 선택하세요.</p>
</fieldset>
```

## 8. 사용 화면 예시

| 확인한 예시 | 내용·범위 | 출처 |
|---|---|---|
| Figma 표 셀 안의 단일 선택 | 가로 그룹 gap 16, 라벨 gap 8, 14/20 Regular | [11758:16218](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=11758-16218) |

정책 사이트의 특정 배포 화면에서 Radio 적용을 직접 검증하지 않았으므로 링크를 임의로 추가하지 않는다. CLAUDE.md의 품목 필터 정책은 화면별 규칙이며 셀렉트 전환 여부까지 실제 화면 확인 후 예시를 보완한다.

## 9. 확인 필요

| ID | 항목 | 확인 내용 |
|---|---|---|
| R-01 | check·checkLine | 세트에는 State로 들어 있으나 외형 변형처럼 보임. 사용처·명명·단일 선택 의미·Disabled 지원 범위 확인 |
| R-02 | Disabled 라벨 | 아이콘만 있는 세트에서 Disabled 라벨 색상은 확인할 수 없음 |
| R-03 | Disabled 선택 표시 | 원본은 회색 배경 안 흰 원 10. Checkbox와 차이는 원본 그대로 보존. 가독성과 유지 여부 검토 |
| R-04 | 토큰 추가 | 크기 20·10·16, 터치 높이 44, 누락 시맨틱 색·Regular 굵기 토큰 후보 검토 |

작성 범위: 공통 목차 9개, 상태 10개. 확인 필요 4건. 확인된 20×20 크기는 프로젝트와 일치. CSS 클래스는 이번에 추가하지 않음.

## 10. 프레임워크와 차이

프레임워크 Radio 노드와 DS 세트를 대조했다. 프레임워크의 Radio 예시는 일반 원형 선택 컨트롤이며, DS 세트의 `check`·`checkLine` 표현은 DS에만 기록한다.

| 항목 | DS 값 | 프레임워크 값 | 노드 ID |
|---|---|---|---|
| 컨트롤 크기 | 20×20px | 20×20px | DS [52:46](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=52-46) · Framework [239:14963](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=239-14963) |
| 상태 표현 | `Default`, `Pressed`, `Disabled`, `check`, `checkLine` × `Off/On` | 기본·눌림·비활성 및 선택 여부 | 같은 노드 |
| 선택 원 | Default/On 내부 원 10×10px | 선택 표시가 있는 원형 Radio | 같은 노드 |
| 사용 지침 | 단일 선택 그룹; 초기 선택·필수 여부는 화면 정책 | 한 그룹에서 하나를 선택하는 컨트롤 | 같은 노드 |

DS의 `check`·`checkLine`이 Radio와 같은 단일 선택 용도로 유지되는지는 확인 필요(R-01).
