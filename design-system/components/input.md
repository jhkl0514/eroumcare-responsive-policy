# Input

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
| `Inactive` | 값이 없고 아직 입력하지 않음 | 기본 테두리와 placeholder | [Textfield 7837:8282](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7837-8282) |
| `Default` | 입력 가능한 기본 상태 또는 값 입력 후 | 흰 배경, 기본 테두리 | [Textfield 7837:8282](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7837-8282) |
| `Focused` | 사용자가 필드를 편집 중 | 2px 브랜드 테두리 | [Textfield 7837:8282](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7837-8282) |
| `Error` | 입력값 검증 실패 | 2px 위험 테두리와 에러 메시지 | [Textfield 7837:8282](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7837-8282) |
| `Disabled` | 현재 조건에서 입력할 수 없음 | 비활성 배경·테두리·글자 | [Textfield 7837:8282](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7837-8282) |
| `ReadOnly` | 값은 보여 주지만 직접 수정하지 않음 | 비활성 배경, 값은 읽을 수 있는 대비 | [Textfield 7837:8282](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7837-8282) |

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

## 6. PC / 모바일(≤1024) 차이

| 항목 | PC (≥1025px) | 모바일 (≤1024px) | 근거 |
|---|---|---|---|
| Textfield 높이 | `40px` | `48px` | `CLAUDE.md` 3-0, 3-2 |
| Textfield 좌우 패딩 | `8px 12px` | `12px` | `CLAUDE.md` 3-0, 3-2 |
| Textfield 글자 | `14px` | `16px` | `CLAUDE.md` 3-0, 3-2 |
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

| 항목 | 내용 |
|---|---|
| Figma 속성명 | Figma는 `Outlne`, `Incative`로 표기한다. 문서에서는 `Outline`, `Inactive`로 읽기 좋게 정규화했다. 라이브러리 속성명 수정 여부는 추후 확인한다. |
| 지우기(X) 아이콘 | 프로젝트 동작 규칙은 확정되어 있으나, CLAUDE 기준 DS Textfield에 X 옵션이 아직 없다. 컴포넌트 구현 연결 시 옵션 지원 여부를 확인한다. |
