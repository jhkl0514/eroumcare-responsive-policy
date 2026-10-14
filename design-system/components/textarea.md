# Textarea

문서 상태: 초안 · 검토 필요  
Figma 출처: DS 라이브러리 파일 `64Q1Re56aiAA8Al89pqjnV` / [TextAreaField 7697:14799](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7697-14799), [입력 폼 사례 6591:177940](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6591-177940)  
프레임워크 출처: [Textarea 475:19957](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=475-19957)

## 1. 개요 · 언제 쓰는지

Textarea는 사유·메모처럼 여러 줄 입력이 필요한 긴 내용을 받는다. 한 줄의 짧은 값은 [Text input](text-input.md)을 사용한다.

## 2. Figma 출처

| 항목 | 출처 | 확인 내용 |
|---|---|---|
| DS TextAreaField | [7697:14799](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7697-14799) | 크기, 글자 수, 기본·포커스 표현 |
| 입력 폼 배치 사례 | [6591:177940](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6591-177940) | 라벨과 입력 영역 배치 |
| 프레임워크 Textarea | [475:19957](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=475-19957) | 구조·사용 원칙 참고 |

## 3. 변형(variant) · 크기

### TextAreaField

| 속성 | 값 | 설명 | 출처 |
|---|---|---|---|
| 글자 크기 | `16px` | PC·모바일 공통 | DS `7697:14799`, `CLAUDE.md` 3-0 |
| 줄 높이 | `24px` | 본문 행 높이 | DS `7697:14799` |
| 모서리 | `4px` | 외곽선 | DS `7697:14799` |
| 글자 수 | 우측 정렬, `14px` / line-height `20px` | 최대 입력량이 설정된 경우 | DS `7697:14799` |

## 4. 상태

| 상태 | 의미 | 표시 |
|---|---|---|
| `Inactive` | 비어 있고 선택되지 않음 | 기본 테두리와 placeholder |
| `Default` | 입력 완료 | 흰 배경과 기본 테두리 |
| `Focused` | 선택되었거나 입력 중 | 테두리 `2px #323DA3`, 바깥 outline 없음 |
| `Disabled` | 비활성화 | 비활성 배경과 흐린 글자 |
| `Error` | 입력 오류 | 위험 테두리, 에러 아이콘과 빨간 안내 문구 |
| `ReadOnly` | 값은 보이나 수정 불가 | 비활성 배경, 값 글자는 진하게 유지 |
| 도움말 | 입력 조건 안내 | 정보 아이콘과 회색 문구 |

일부 상태의 상세 시각값은 TextAreaField 개별 노드에서 분리 확인되지 않아 [확인 필요](#9-확인-필요)로 남긴다. 공통 입력 상태 안내는 [Text input](text-input.md)을 참고한다.

## 5. 토큰 매핑

| 토큰 | 값 | 용도 | 출처 |
|---|---|---|---|
| `--ds-radius-4` | `4px` | 모서리 | DS `7697:14799` |
| `--ds-space-20`, `--ds-space-12` | `20px`, `12px` | 본문 시작·아래쪽 패딩 | CSS 구현 |
| `--ds-color-bg-primary` | `#FFFFFF` | 기본 배경 | DS `7697:14799` |
| `--ds-color-darkblue-600` | `#323DA3` | Focused 테두리 | DS 공통 input 상태 |
| `--ds-color-red-600` | `#E53935` | Error 테두리 | DS 공통 input 상태 |
| `--ds-color-text-tertiary` | `#999999` | 글자 수 안내 | DS `7697:14799` |

## 6. PC / 모바일(≤1024) 차이

Textarea 글자 크기 `16px`, 줄 높이 `24px`, 모서리 `4px`는 공통이다. 입력 영역 높이는 내용과 행 수에 맞춰 확보한다. 글자 수 표시는 PC·모바일 모두 우측 정렬한다. 상세한 기기별 최소 높이는 Figma에서 지정값을 확인하지 못했다.

## 7. 사용 규칙

- 사유·메모처럼 여러 줄이 필요한 입력에만 사용한다.
- 입력 label을 연결하고 placeholder가 label을 대신하지 않게 한다.
- 필수 입력은 라벨 바로 뒤에 빨간 `*`로 표시한다. 별표만으로 필수 여부를 전달하지 않도록 입력에도 `required` 또는 `aria-required="true"`를 지정한다.
- 내용이 영역보다 길면 컴포넌트 크기를 무한히 키우지 않고 내부 스크롤을 허용한다.
- 글자 수 제한이 있으면 최대치와 현재 입력량을 함께 표시한다.
- 오류는 테두리뿐 아니라 원인을 설명하는 문장으로 전달한다.
- 프레임워크의 Textarea는 긴 내용을 위한 별도 컨트롤로 두고, 도움말·오류·글자 수를 해당 필드와 함께 배치한다.

### 접근성 권장

`<label>`을 연결하고 도움말·오류를 `aria-describedby`에 지정한다. 오류 상태는 `aria-invalid="true"`로 전달한다. 키보드로 포커스와 입력이 가능해야 하며, 이 권장사항은 시각 디자인 값과 구분한다.

## 8. 사용 화면 예시

| 화면·목적 | 예시 |
|---|---|
| 회수 사유 | `요청 사유를 입력해 주세요.` |
| 주문 메모 | `전달할 내용을 입력해 주세요.` |

## 9. 확인 필요

| 항목 | 내용 | 노드 ID |
|---|---|---|
| 상태별 Textarea 전용 수치 | Inactive·Disabled·ReadOnly·Error의 세부 색·선 굵기와 Textarea 최소 높이 | DS `7697:14799`에서 추가 확인 필요 |

## CSS 클래스

| 클래스·속성 | 용도 |
|---|---|
| `.ds-field`, `.ds-field__label` | 필드·라벨 |
| `.ds-textarea` | 여러 줄 입력 영역 |
| `.ds-field__hint`, `.ds-field__error` | 도움말·오류 |
| `.ds-textarea__count` | 글자 수 카운터 |
| `:focus`, `:disabled`, `[readonly]`, `[aria-invalid="true"]` | 입력 상태 |

## HTML 예시

```html
<label class="ds-field">
  <span class="ds-field__label">요청 사유 <span class="ds-field__required" aria-hidden="true">*</span></span>
  <textarea class="ds-textarea" aria-describedby="reason-help" placeholder="요청 사유를 입력해 주세요." required></textarea>
  <span class="ds-field__hint" id="reason-help">최대 200자까지 입력할 수 있습니다.</span>
  <span class="ds-textarea__count" aria-live="polite">0 / 200자</span>
</label>
```

## 프레임워크와 차이

| 항목 | DS 값 | 프레임워크 값 | 노드 ID |
|---|---|---|---|
| Textarea 사용 원칙 | 글자 수·상태 시각값은 DS 기준 | 긴 내용은 높이를 유지해 내부 스크롤, 제한량과 현재 입력량을 알림 | 프레임워크 Figma `475:19957` |
