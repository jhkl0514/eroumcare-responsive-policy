# Tab

문서 상태: **초안 / 검토 필요** · 마지막 확인일: `2026-10-12`

## 1. 개요 · 언제 쓰는지

같은 계층의 관련 콘텐츠를 한 화면 안에서 전환할 때 사용한다. 각 탭은 대응하는 콘텐츠 패널과 연결되어야 하며, 탭 이동이 별도 페이지 이동인지 화면 내 콘텐츠 전환인지는 화면 정책으로 정한다.

## 2. Figma 출처

| 출처 | 노드 |
|---|---|
| DS 라이브러리 `Tab` | [7988:12496](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7988-12496) |
| DS Underline 사례 | [6106:10089](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6106-10089) |
| Framework `Tab` | [10:16409](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=10-16409) |

## 3. 변형(variant) · 크기

| DS 속성 | 값 | 관찰된 치수·표현 | 출처 |
|---|---|---|---|
| `type` | `Underline`, `Outlined`, `Roound`(원본 표기) | Underline은 텍스트 폭 사례, Outlined 48px 높이, Roound 40px 높이 | [7988:12496](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7988-12496) |
| `state` | `Default`, `Hover`, `Hover:Active` | 기본·hover·선택/상호작용 조합 사례 | 같은 노드 |
| 선택 | `selected` boolean | 선택 여부에 따른 밑줄·테두리·배경 | 같은 노드 |
| 보조 속성 | `leadingIcon`, `line`, `radius` | 아이콘 및 경계 연결 상황 조정 | 같은 노드 |

Underline의 대표 사례는 좌우 20px, 세로 16px padding이며 16/24 라벨이다. Outlined는 좌우 20px, 세로 12px padding, 48px 높이 사례다. Round는 좌우 12px, 세로 8px padding, 40px 높이와 원형 radius 사례다. 이 수치는 관찰된 컴포넌트 변형에 한정한다.

## 4. 상태

| 상태 | 확인한 표현 | 출처 |
|---|---|---|
| Default / 미선택 | 일반 텍스트 및 기본 배경·경계 표현 | [7988:12496](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7988-12496) |
| Hover / 미선택 | Underline 사례에서 옅은 배경 표현 | [6106:10090](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6106-10090) |
| Default / 선택 | Underline 사례에서 2px 하단 표시 | [6106:10091](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6106-10091) |
| Hover:Active / 선택 | Outlined·Round 등에서 선택 배경/경계 사례 | [7988:12496](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7988-12496) |

Disabled 상태는 확인되지 않는다. 오류·로딩 표현도 공통 Tab 상태로 확인되지 않아 확인 필요다.

공통 상호작용 규칙 hover/focus/pressed: 정의 없음(현행 유지). 위 Hover·Hover:Active는 Figma에 기록된 Tab 자체의 관찰 변형이며, 다른 컴포넌트에 적용하는 공통 규칙으로 일반화하지 않는다.

## 5. 크기·토큰 매핑

Figma 변형에서 라벨 16/24, padding 4/8/12/16/20, Tab 높이 40/48, radius 4/circle, selected underline 2px 사례를 확인했다. 값이 기존 foundations/tokens.css의 토큰과 연결되는지는 구현 시점에 대조한다. 이름이나 미확인 색상 토큰을 임의로 만들지 않는다.

## 6. PC / 모바일(≤1024) 차이

DS 컴포넌트 자체에는 PC/MO 분기 속성이나 breakpoint가 명시되지 않았다. 프레임워크는 Underline을 공통, Outlined를 PC, Round를 모바일 2단계 탭 용례로 설명한다. 이는 프레임워크의 적용 가이드이며 DS 컴포넌트의 사용 가능 범위를 제한하는 값으로 취급하지 않는다.

## 7. 사용 원칙

- 같은 계층의 콘텐츠를 전환하는 데 사용하고, 각 탭의 이름과 연결된 패널을 명확히 한다.
- 선택 상태가 표시만 바꾸는지 실제 콘텐츠를 전환하는지 상호작용을 일관되게 한다.
- 탭이 많을 때 프레임워크는 가로 스크롤 사례를 안내한다. 중요 항목을 임의로 숨기거나 탭을 줄임표로 대체하지 않는다.
- 비활성 탭은 공통 variant로 확인되지 않았다. 사용할 경우 디자인과 접근성 동작을 별도로 확정한다.
- 프레임워크의 중첩 탭 권장 구성은 참고 패턴으로 제공한다. 화면 계층과 PC/MO 구조를 확인한 뒤 적용한다.

## 8. 사용 화면 예시

DS 원본의 Underline·Outlined·Round 변형을 확인했다. 이번 범위에서 정책 사이트 프로토타입 링크는 검증하지 않았다.

## 9. 프레임워크와 차이

| 항목 | DS 값 | 프레임워크 값 | 노드 ID |
|---|---|---|---|
| 변형 명칭 | `Underline`, `Outlined`, `Roound`(원본 속성 표기) | Underlined, Outlined, Round | DS [7988:12496](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7988-12496) · Framework [10:16409](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=10-16409) |
| 적용 기기 가이드 | DS 노드에서 유형별 PC/MO 범위 미지정 | Underlined 공통, Outlined PC, Round 모바일 2단계 예시 | 같은 노드 |
| 탭 너비 | Underline 사례 81px; 다른 유형은 콘텐츠·구성 기준 사례 | Underline/Round는 라벨 중심, Outlined는 균등 폭으로 맞추는 원칙 | 같은 노드 |
| 비활성 상태 | 공통 Disabled 변형 확인되지 않음 | 비활성 탭 대신 불필요 탭 제거 또는 설명 권고 | 같은 노드 |

## 10. 확인 필요

1. 원본 variant `Roound` 표기를 구현 API에서 `Round`로 정규화할지.
2. 탭 라벨의 font-weight 및 선택 텍스트·경계 색상 전체 매핑.
3. Disabled·키보드 접근성 상태와 탭-패널 연결 규칙.
4. 모바일 가로 스크롤, 고정 너비/콘텐츠 너비, PC/MO 변형 권장 범위를 DS 정책으로 채택할지.
