# Table

문서 상태: **초안 / 검토 필요** · 마지막 확인일: `2026-10-12`

## 1. 개요 · 언제 쓰는지

행과 열로 여러 레코드의 속성을 비교하거나 관리할 때 사용한다. 표의 셀은 텍스트, 상태, 프로필, 입력, 선택, 버튼 등 데이터와 작업 요소를 담는다. 실제 표 구조는 데이터와 화면 목적에 맞춰 구성한다.

## 2. Figma 출처

| 출처 | 노드 |
|---|---|
| DS 라이브러리 `Table` | [6503:13134](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6503-13134) |
| DS 셀·헤더 조합 | [6102:8080](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6102-8080) |
| Framework `Table` | [10:17056](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=10-17056) |

## 3. 변형(variant) · 크기

DS의 주요 셀 타입은 `Text`, `Label`, `Status`, `Profile`, `Checkbox`, `TextField`, `SelectField`, `SelectOption`, `Button`, `TwoButton`, `Text+Button` 등이며 LG·SM 크기 조합이 제공된다. 행은 텍스트, 아이콘 조합, 입력·선택, 한 개 또는 두 개의 버튼 등을 포함한다. 정렬 변형은 Left·Center·Right로 확인된다.

| 항목 | DS에서 확인한 값 | 출처 |
|---|---|---|
| 행 크기 | LG 높이 52px, SM 높이 44px | [Table / 6102:8080](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6102-8080) |
| 셀 타입 | Text, Label, Status, Profile, Checkbox, TextField, SelectField/Option, Button, TwoButton, Text+Button | [Table / 6503:13134](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6503-13134) |
| 정렬 | 텍스트 기준 Left / Center / Right 사례 | [Header / 6102:7387](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6102-7387) |
| 정렬 아이콘 | sorting, sorting_asc, sorting_desc | [Sorting / 6503:13497](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6503-13497) |

프레임워크는 일반 열 중심 표와 행 중심 정보표를 설명한다. DS 셀 컴포넌트는 이 두 배치를 구성할 재료를 제공하지만, 모든 표를 강제하는 단일 레이아웃 변형은 확인되지 않았다.

## 4. 상태

| 상태·표현 | 확인한 내용 | 근거 |
|---|---|---|
| 정렬 기본 | 정렬 아이콘 `sorting` | [6503:13496](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6503-13496) |
| 오름차순 | `sorting_asc` | [6503:13495](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6503-13495) |
| 내림차순 | `sorting_desc` | [6503:13494](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6503-13494) |
| 행·셀 상호작용 | Checkbox, TextField, Select, Button 셀 타입 존재 | [6503:13134](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6503-13134) |

Hover, focus, disabled, loading, empty, error 행 스타일은 이 컴포넌트 노드만으로 공통 규격을 확정할 수 없어 확인 필요다. 개별 셀 컨트롤의 상태는 해당 컴포넌트 문서를 따른다.

## 5. 크기·토큰 매핑

행 높이 52/44px, 표면·테두리 색, 텍스트 스타일은 각 셀·헤더 컴포넌트의 Figma 스타일을 따른다. 공통 표에 적용되는 고정 열 너비, 셀 패딩, 경계선 색/굵기 토큰은 이 DS 노드에서 단일 값으로 확정하지 않았다. 임의로 CSS 토큰이나 값을 새로 만들지 않는다.

## 6. PC / 모바일(≤1024) 차이

프레임워크는 가로 공간이 부족할 때 표의 가로 스크롤을 허용하고, 중요한 열을 제한적으로 고정하는 패턴을 안내한다. DS의 Table 라이브러리 노드에는 PC/MO별 별도 컴포넌트나 전환 폭이 명시되지 않아 반응형 동작은 확인 필요다. 화면별 우선 열, 고정 열, 카드형 전환 여부를 설계 단계에서 정한다.

## 7. 사용 원칙

- 열 제목은 각 열 데이터의 의미를 분명히 나타내고, 한 열 안에서는 같은 종류의 값을 일관되게 보여준다.
- 정렬이 제공되는 열에만 정렬 조작을 둔다. 단순 장식용으로 정렬 아이콘을 노출하지 않는다.
- 텍스트·상태·프로필·입력·선택·작업에 알맞은 DS 셀 타입을 사용한다.
- 긴 데이터를 다룰 때는 화면 너비와 핵심 열의 우선순위를 고려한다. 잘림, 줄바꿈, 가로 스크롤 정책을 화면에서 명시적으로 결정한다.
- 비어 있는 값의 대체 표기, 숫자·금액 정렬, 셀 내 작업 버튼 수 등 프레임워크에서 제시하는 세부 규칙은 프로젝트 공통 정책으로 확인되기 전까지 권장 참고로만 취급한다.

프레임워크 표 셀 정렬·스크롤·고정 열은 구조 설명으로 요약했다. 프레임워크 원문을 그대로 복사하지 않았다.

## 8. 사용 화면 예시

DS 라이브러리의 Header 및 Cell 조합 예시를 확인했다. 정책 사이트 프로토타입의 표 화면은 이번 범위에서 별도 검증하지 않아 구체 화면 링크는 추가하지 않는다.

## 9. 프레임워크와 차이

| 항목 | DS 값 | 프레임워크 값 | 노드 ID |
|---|---|---|---|
| 기본 구조 | LG·SM 셀 타입 조합 중심; 별도 고정 레이아웃 규칙 없음 | 열 중심 표와 행 중심 정보표 모두 안내 | DS [6503:13134](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6503-13134) · Framework [10:17056](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=10-17056) |
| 크기 | LG 52px / SM 44px 행 사례 | 대응하는 공통 행 높이 값 없음 | DS [6102:8080](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6102-8080) · Framework [10:17056](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=10-17056) |
| 정렬·좁은 화면 | 정렬 아이콘 세 가지; 표 공통 스크롤 규격 없음 | 데이터 유형별 정렬과 수평 스크롤·중요 열 고정 원칙을 안내 | DS [6503:13497](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6503-13497) · Framework [10:17056](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=10-17056) |

## 10. 확인 필요

1. 공통 헤더·행·셀의 경계선, 패딩, 폭과 토큰 매핑.
2. 모바일(≤1024)의 가로 스크롤·고정 열·카드 전환 기준.
3. Hover/focus/disabled/loading/empty/error 행 상태와 접근성 동작.
4. 프레임워크의 데이터 정렬·빈 값·버튼 수 정책을 프로젝트 공통 규칙으로 채택할지.
