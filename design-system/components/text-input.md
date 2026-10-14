# Text input

문서 상태: 초안 · 검토 필요  
Figma 출처: DS 라이브러리 파일 `64Q1Re56aiAA8Al89pqjnV` / [Textfield 7837:8282](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7837-8282), [Inactive PC 6201:9256](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6201-9256), [Default PC 6201:9260](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6201-9260), [Default MO 53:137](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-137), [Focused MO 53:145](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-145), [Disabled MO 53:141](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-141)  
프레임워크 출처: [Text input 475:22492](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=475-22492)

## 1. 개요 · 언제 쓰는지

Text input은 짧은 한 줄 문자열·숫자·날짜 등 사용자가 직접 입력하는 값에 사용한다. 고정 선택지는 [Select](select.md), 긴 문장과 메모는 [Textarea](textarea.md)를 사용한다.

## 2. Figma 출처

| 항목 | 출처 | 확인 내용 |
|---|---|---|
| DS Textfield | [7837:8282](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7837-8282) | PC/MO, 외곽선형 및 상태 |
| PC Inactive / Default | [6201:9256](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6201-9256), [6201:9260](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6201-9260) | 값 없음과 값 입력 상태 |
| MO Default / Focused / Disabled | [53:137](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-137), [53:145](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-145), [53:141](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-141) | 모바일 상태 표현 |
| 프레임워크 | [Text input 475:22492](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=475-22492) | 구조·사용 원칙 참고 |

## 3. 변형(variant) · 크기

### Textfield

| 속성 | 값 | 설명 |
|---|---|---|
| `Device` | `PC`, `MO` | 크기 변형 |
| `Style` | Figma 원문 `Outlne` | 외곽선형. 원문 표기는 그대로 기록 |
| 높이 | PC `40px`, MO `48px` | 입력 영역 높이 |
| 좌우 패딩 | `12px` | 텍스트와 필드 경계 간격 |
| 글자 크기 | PC `14px`, MO `16px` | 입력값·placeholder |
| 모서리 | `4px` | 입력 필드 외곽 |

근거: Textfield `7837:8282`, `CLAUDE.md` 3-0·3-2.

## 4. 상태

| 상태 | 의미 | 표시 |
|---|---|---|
| `Inactive` | 비어 있고 선택되지 않음 | PC 테두리 `1px #616161`, MO `1px #BDBDBD`; 값 글자색은 변경하지 않고 placeholder만 `#BDBDBD` |
| `Default` | 값 입력 완료 | PC/MO 테두리 `1px #333333`, 흰 배경 |
| `Focused` | 선택되었거나 입력 중 | 테두리 `2px #323DA3`, 바깥 outline 없음 |
| `Disabled` | 비활성화 | 비활성 배경과 흐린 글자 |
| `Error` | 입력 오류 | 테두리 `2px #E53935`, 오류 아이콘과 빨간 안내 문구 |
| `ReadOnly` | 값은 보이지만 수정 불가 | 비활성 배경, 값 글자색은 진하게 유지 |
| 도움말 | 입력 조건을 안내하는 보조 문구 | 정보 아이콘과 회색 글자. 필드 인터랙션 상태와 별개 |

Figma의 오기 `Incative`는 표준 표기 `Inactive`로 정규화한다. 관련 상태 노드는 위 Figma 출처 표를 참고한다.

## 5. 토큰 매핑

| 토큰 | 값 | 용도 | 출처 |
|---|---|---|---|
| `--ds-radius-4` | `4px` | 필드 모서리 | DS Textfield `7837:8282` |
| `--ds-space-12` | `12px` | 좌우 패딩 | DS Textfield `7837:8282` |
| `--ds-color-bg-primary` | `#FFFFFF` | 기본 배경 | DS Textfield `7837:8282` |
| `--ds-color-bg-disabled` | `#EEEEEE` | Disabled·ReadOnly 배경 | DS Textfield `7837:8282` |
| `--ds-color-grey-600` | `#616161` | PC Inactive 테두리 | DS `6201:9256` |
| `--ds-color-grey-400` | `#BDBDBD` | MO Inactive 테두리·placeholder | DS `3065:29264` |
| `--ds-color-grey-800` | `#333333` | Default 테두리 | DS `6201:9260`, `53:137` |
| `--ds-color-darkblue-600` | `#323DA3` | Focused 테두리 | DS `53:145` |
| `--ds-color-red-600` | `#E53935` | Error 테두리 | DS `7837:8282` |

## 6. PC / 모바일(≤1024) 차이

| 항목 | PC (≥1025px) | 모바일 (≤1024px) | 근거 |
|---|---|---|---|
| 높이 | `40px` | `48px` | `CLAUDE.md` 3-0·3-2 |
| 글자 | `14px` | `16px` | `CLAUDE.md` 3-0·3-2 |
| Inactive 테두리 | `1px #616161` | `1px #BDBDBD` | DS `6201:9256`, `3065:29264` |
| Default 테두리 | `1px #333333` | `1px #333333` | DS `6201:9260`, `53:137` |
| Focused 테두리 | `2px #323DA3` | `2px #323DA3` | DS `53:145` |

모달·바텀시트 내부에서도 1024px 이하에는 모바일 입력 크기를 적용한다.

## 7. 사용 규칙

- 각 필드에는 입력 목적을 설명하는 label을 연결한다. placeholder는 형식 힌트이며 label을 대신하지 않는다.
- 필수 입력은 라벨 바로 뒤에 빨간 `*`로 표시한다. 별표만으로 필수 여부를 전달하지 않도록 입력에도 `required` 또는 `aria-required="true"`를 지정한다.
- 도움말은 입력 조건이 필요한 경우에만 표시한다. 오류는 테두리뿐 아니라 이유를 문장으로 함께 안내한다.
- Disabled와 ReadOnly를 목적에 맞게 구분한다. 값이 조회만 가능하면 ReadOnly를 사용한다.
- 값이 있고 필드가 편집 가능한 경우 지우기 동작을 제공할 수 있다. Disabled·ReadOnly·날짜·Select에는 지우기 버튼을 두지 않는다.
- 검색 입력은 별도 패턴으로 취급한다. 검색 버튼을 유지하고 일반 입력의 지우기 동작을 중복하지 않는다.
- 모바일 텍스트 입력은 16px 이상을 적용하고, 전화번호 등은 입력 종류에 맞는 `type`·`inputmode`를 사용한다.
- 프레임워크에서는 입력 목적에 맞는 너비를 선택하고, 오류·도움말을 필드와 연결하도록 안내한다. placeholder로 필드 목적을 대신하지 않는다.

### 접근성 권장

`<label>`과 입력을 연결하고, 도움말·오류 문구는 `aria-describedby`로 연결한다. 오류 상태에는 `aria-invalid="true"`를 사용한다. 이 항목은 접근성 권장사항이며 Figma 시각 규격과 별개다.

## 8. 사용 화면 예시

| 화면·목적 | 예시 |
|---|---|
| 수급자 연락처 | 가상 전화번호 `010-0000-0000` |
| 배송 주소 | `서울시 예시구 가상로 10` |
| 우편번호 검색 결과 | ReadOnly 입력 + `우편번호 찾기` 버튼 |

## 9. 확인 필요

현재 추가 확인 항목 없음. 도움말 아이콘의 구체적인 asset 연결은 화면 구현 시 선택한다.

## CSS 클래스

| 클래스·속성 | 용도 |
|---|---|
| `.ds-field`, `.ds-field__label` | 필드와 라벨 |
| `.ds-field__required` | 필수 라벨 뒤의 빨간 별표 |
| `.ds-input-wrap`, `.ds-input` | 입력과 지우기 버튼을 묶는 영역, 입력 필드 |
| `.ds-input__clear` | 입력값 지우기 버튼 |
| `.ds-field__hint`, `.ds-field__error` | 도움말·오류 문구 |
| `.ds-is-inactive`, `.ds-is-readonly`, `.ds-is-error` | 명시적 상태 변형 |
| `:focus`, `:disabled`, `[readonly]`, `[aria-invalid="true"]` | 네이티브 상태 |

## HTML 예시

```html
<label class="ds-field">
  <span class="ds-field__label">연락처 <span class="ds-field__required" aria-hidden="true">*</span></span>
  <span class="ds-input-wrap">
    <input class="ds-input" type="tel" inputmode="tel" placeholder="연락처" aria-describedby="phone-hint" required>
    <button class="ds-input__clear" type="button" aria-label="입력 지우기">
      <svg aria-hidden="true" focusable="false" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18 6 6 18M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
      </svg>
    </button>
  </span>
  <span class="ds-field__hint" id="phone-hint">숫자만 입력해 주세요.</span>
</label>
```

## 프레임워크와 차이

| 항목 | DS 값 | 프레임워크 값 | 노드 ID |
|---|---|---|---|
| 입력 규격 | 높이·상태값은 DS 기준 | 라벨, 입력 폭, 입력 목적과 오류 안내 원칙을 설명 | 프레임워크 Figma `475:22492` |

## 정책 반영 이력

| 정책 조항 | 정책 기준 | 반영 내용 |
|---|---|---|
| 정책 3-0, 3-2 | 1024px 이하에서 48px·16px 변형을 적용하고, 편집 가능한 값이 있을 때 지우기 동작을 제공한다. | 뷰어에 입력·지우기 동작과 PC/MO 규격 비교를 추가했다. |
| 정책 3-2 | 검색 입력은 검색 버튼을 유지하고 일반 지우기 X를 중복하지 않는다. | 검색 견본은 X를 제외하고, 일반 편집 필드에만 X를 표시한다. |
| 정책 3-2, 3-4 | 입력 옆 액션은 SM 36px이며 입력 영역의 세로 중앙에 정렬한다. | 입력 폼 견본 버튼을 라벨 덩어리가 아닌 입력 높이 기준으로 정렬했다. |
