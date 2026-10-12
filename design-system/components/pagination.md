# Pagination

문서 상태: **초안 / 검토 필요** · 마지막 확인일: `2026-10-12`

## 1. 개요 · 언제 쓰는지

결과가 여러 페이지로 나뉠 때 현재 위치를 표시하고 페이지 이동을 제공한다. 전체 결과 수·페이지 크기 선택은 필요할 때 별도 정보로 조합한다.

## 2. Figma 출처

| 출처 | 노드 |
|---|---|
| DS 라이브러리 `Pagination` | [8462:8629](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=8462-8629) |
| DS Pagination page/control | [6102:8144](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6102-8144), [6102:8154](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6102-8154) |
| DS Compact 설명 | [14055:12316](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=14055-12316), [14072:12344](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=14072-12344) |
| Framework `Pagination` | [1:4426](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-4426) |

## 3. 변형(variant) · 크기

| DS variant | 확인한 구조 | 출처 |
|---|---|---|
| `Default` | 이전/다음 컨트롤과 페이지 번호 목록 | [8462:8629](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=8462-8629) |
| `Combination` | 페이지 컨트롤과 보조 정보를 좌우로 조합하는 구성 | 같은 노드 |
| `Compact` | 큰 화살표 컨트롤과 `현재 / 전체` 표시 텍스트. 숫자 페이지 버튼이 아님 | [14055:12316](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=14055-12316) |

기본 페이지 번호 셀은 32×32px, 모서리 4px, 숫자 14/20px다. Default 화살표 아이콘은 24×24px다. Compact 화살표 컨트롤은 48×48px, 아이콘 32×32px이며 표시 텍스트는 18/26px이다. Compact 크기를 모바일 전용이라고 단정하지 않는다.

## 4. 상태

| 상태 | DS 표현 | 근거 |
|---|---|---|
| 기본 페이지 | Regular 14/20, 기본 텍스트색 | [6102:8144](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6102-8144) |
| 현재 페이지 | 선택 배경 `#EFF1FD`, 선택 텍스트 `#141E76`, SemiBold | [8945:10280](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=8945-10280) |
| Compact 표시 | 현재 숫자 강조, 구분자와 전체 숫자는 회색이며 비조작 텍스트 | [14055:12316](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=14055-12316) |
| 화살표 조작 | 눌림 사례의 배경 `#EFF1FD`, radius 4px; hover·disabled 스타일 없음 | [14072:12344](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=14072-12344) |

공통 상호작용 규칙 hover/focus/pressed: 정의 없음(현행 유지). Figma의 화살표 눌림 사례는 개별 관찰값으로 기록하며 공통 규칙으로 일반화하지 않는다. 첫/마지막 페이지에서 화살표 disabled 처리와 로딩 상태는 확인 필요다.

## 5. 크기·토큰 매핑

Figma에서 확인한 값은 spacing 4/32/48, radius 4, 기본·선택 텍스트 스타일이다. 정확한 기존 CSS 토큰명과 모든 색상의 매핑은 foundations 및 tokens.css 대조가 추가로 필요하므로 토큰 이름을 여기서 새로 확정하지 않는다.

## 6. PC / 모바일(≤1024) 차이

DS는 `Default`, `Combination`, `Compact` 변형을 제공하지만 breakpoint별 사용 지정을 하지 않는다. 프레임워크 노드는 페이지 수, 정렬, 페이지 크기 선택 등 정보 구조를 안내한다. 모바일에서 Compact를 쓸 수 있다는 DS 설명은 있으나, 전환 breakpoint는 확인 필요다.

## 7. 사용 원칙

- 현재 페이지를 시각적으로 식별 가능하게 하고, 이동 가능한 페이지와 현재 페이지의 의미를 구분한다.
- Compact의 `현재 / 전체`는 상태 표시 텍스트로 다루며 페이지 번호 버튼처럼 보이게 하지 않는다.
- 프레임워크는 페이지 번호와 이전/다음 이동을 함께 제공하고, 목록·표의 결과 수에 따라 페이지 크기를 정하는 예를 제시한다. 구체 노출 개수·페이지 크기 선택은 화면 요구사항으로 확정한다.
- 결과가 적을 때의 컴포넌트 노출 여부와 첫·마지막 페이지 동작은 제품 정책을 정한 뒤 반영한다.

## 8. 사용 화면 예시

이번에 확인한 것은 Figma 컴포넌트 노드이며, 연결된 정책 프로토타입의 실제 페이지네이션 화면은 별도 확인하지 않았다.

## 9. 프레임워크와 차이

| 항목 | DS 값 | 프레임워크 값 | 노드 ID |
|---|---|---|---|
| 변형 | `Default`, `Combination`, `Compact` | 페이지 번호 목록 및 조합형 페이지 탐색 사용례 | DS [8462:8629](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=8462-8629) · Framework [1:4426](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-4426) |
| 페이지 셀 | 32×32px, 14/20 | 고정 셀 치수보다 페이지 수에 따른 목록 동작을 설명 | DS [6102:8144](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6102-8144) · Framework [1:4426](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-4426) |
| 표시 규칙 | 페이지 수 노출 상한은 이 DS 노드에서 미확정 | 7개 이내 번호 표시, 더 많으면 생략 표시를 사용하는 패턴 설명 | 같은 노드 |
| 페이지 크기 | DS variant에 페이지 크기 값 없음 | 20/50/100개 선택 예시 | 같은 노드 |

## 10. 확인 필요

1. 페이지 수별 번호 노출·생략 규칙을 DS 공통값으로 채택할지.
2. 페이지 크기 옵션 20/50/100을 제품 공통값으로 채택할지.
3. 첫/마지막 페이지 화살표 disabled 처리와 키보드 동작.
4. Compact를 모바일에서 사용하는 breakpoint와 전환 조건.
