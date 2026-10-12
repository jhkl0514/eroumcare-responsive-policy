# Chips

문서 상태: **초안 / 검토 필요** · 마지막 확인일: `2026-10-12`

## 1. 개요 · 언제 쓰는지

짧은 라벨로 옵션 선택이나 결과 필터를 표시한다. DS의 `Option Chips_Line`은 옵션 선택, `Filter Chips`는 목록 필터링 역할로 구분한다. 상태를 전달하는 비조작형 상태칩과 혼용하지 않는다.

## 2. Figma 출처

| 출처 | 노드 |
|---|---|
| DS 라이브러리 `chips` | [7723:6790](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7723-6790) |
| DS component set | [7723:9844](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7723-9844) |
| Filter Chips 예시 | [7723:10025](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7723-10025) |
| Framework `Chips` | [239:14543](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=239-14543) |

## 3. 변형(variant) · 크기

| 속성 | DS 값 | 설명 |
|---|---|---|
| `type` | `Option Chips_Line`, `Filter Chips` | 옵션 선택 / 결과 필터 |
| `size` | `XL`, `SM` | Option: 높이 44/32px; Filter: 높이 40/32px 사례 |
| `color` | `Brand`, `SubBrand`, `Neutral` | 각 타입·크기에서 제공되는 색 분류 |
| 선택 | `Selected=Off/On` | 선택 유무 |
| 아이콘 | leading/trailing 선택 속성 | 아이콘 노출 여부에 따라 label과 간격 구성 |

Option Chips는 radius 4px, XL label 18/26·가로 padding 20px, SM label 14px·가로 padding 20px 사례다. Filter Chips는 원형 radius, XL 높이 40px·가로 padding 16px, SM 높이 32px·가로 padding 16px 사례다. 아이콘은 XL 24px, SM 20px 예시가 있다. 기준 노드 [7723:9844](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7723-9844).

## 4. 상태

| 상태 | 확인한 동작·표현 | 출처 |
|---|---|---|
| Default / 미선택 | 흰 배경·회색 테두리 사례 | [7723:9850](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7723-9850) |
| Default / 선택 | Brand·SubBrand·Neutral별 선택 배경과 테두리 | [7723:9875](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7723-9875) |
| Hover:active | 미선택·선택 상태별 상호작용 표현 | [7723:9905](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7723-9905) |
| Disabled | 선택 전·후 모두 비활성 배경·테두리 표현 | [7723:9965](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7723-9965) |

컴포넌트 속성 상태는 `Default`, `Press`, `Disabled`, `Hover:active`로 표기되며, 개별 시각 예시는 Default, Hover:active, Disabled로 확인된다. Press 상태의 독립된 시각값과 키보드 focus 값은 추가 확인이 필요하다.

## 5. 크기·토큰 매핑

DS examples에서 Option 높이 44/32px, Filter 높이 40/32px, radius 4/circle, spacing 4/8/16/20, 아이콘 20/24px 사례를 확인했다. 색상은 Brand·SubBrand·Neutral마다 선택 여부와 상태에 따라 달라진다. 각 Figma 색 변수 이름과 기존 CSS 토큰의 일대일 매핑을 모두 확인하기 전에는 CSS 토큰명을 확정하지 않는다.

## 6. PC / 모바일(≤1024) 차이

DS Chips에는 breakpoint별 크기나 PC/MO 전용 변형이 명시되지 않았다. XL·SM은 화면 기기가 아닌 컴포넌트 크기 변형이다. 프레임워크의 필터칩 색 범주 중 DS에서 찾지 못한 Black·Important는 해당 Figma 비교 차이에 기록하고, DS 색상 값처럼 사용하지 않는다.

## 7. 사용 원칙

- 옵션 선택과 필터링 목적을 구분해 `Option Chips_Line` 또는 `Filter Chips`를 사용한다.
- 선택 상태를 제공하면 시각적 선택 상태와 실제 선택/필터 결과를 동기화한다.
- 복수 선택 여부와 선택 즉시 결과 반영 또는 별도 적용 버튼 여부는 화면 정책으로 정한다. DS 모양만으로 동작을 추정하지 않는다.
- 아이콘은 의미를 보완할 때만 사용하고, 라벨을 불필요하게 대체하지 않는다.
- 상태를 설명하는 비조작형 상태칩은 이 문서의 선택·필터 칩과 분리한다.

## 8. 사용 화면 예시

DS 라이브러리의 Option Chips와 Filter Chips 예시를 확인했다. 서비스 화면에서의 적용 사례는 이번 범위에서 별도 검증하지 않았다.

## 9. 프레임워크와 차이

| 항목 | DS 값 | 프레임워크 값 | 노드 ID |
|---|---|---|---|
| 컴포넌트 구분 | `Option Chips_Line`, `Filter Chips` | 옵션칩과 필터칩의 목적을 분리 | DS [7723:9844](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7723-9844) · Framework [239:14543](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=239-14543) |
| 크기 | Option XL/SM 44/32px; Filter XL/SM 40/32px | XL/SM 44/32px 사례 | 같은 노드 |
| 색 범주 | Brand, SubBrand, Neutral | Filter Chips에 Black·Important 범주도 설명 | 같은 노드 |
| 선택 반영 | DS는 선택 variant를 제공하나 반영 시점 정책은 별도 | 옵션의 선택·적용 시점 및 필터 결과 갱신을 사용법으로 안내 | 같은 노드 |

## 10. 확인 필요

1. `Press`와 `Hover:active`의 구현 상태 매핑, 키보드 focus 표현.
2. 프레임워크의 Black·Important 색 범주가 DS에 없는 의도된 차이인지.
3. 옵션 선택의 단일/복수 선택 및 적용 버튼 유무는 각 사용 화면에서 결정.
4. 색상 변수와 기존 CSS 토큰의 전체 대응 관계.
