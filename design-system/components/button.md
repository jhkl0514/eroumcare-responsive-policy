# Button

Figma 출처: 파일 `64Q1Re56aiAA8Al89pqjnV` / 노드 ID `7696:4607`, `6534:185304` / 마지막 확인일 `2026-10-12`

## 1. 개요 · 언제 쓰는지

버튼은 사용자가 저장, 검색, 확인, 취소처럼 명확한 동작을 실행할 때 쓴다. 이동 링크나 단순 선택 상태 표현에는 버튼을 쓰지 않는다. 기본형은 채움(`Button/Filled`), 보조형은 외곽선(`Button/outline`)에서 화면의 동작 우선순위에 맞춰 선택한다.

## 2. Figma 출처

| 컴포넌트 | Figma 출처 | 설명 |
|---|---|---|
| `Button/Filled` | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) | 채움형 버튼 세트 |
| `Button/outline` | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) | 외곽선 버튼 세트 |
| 모바일 하단 액션 배치 | [주문요청관리 대여 상세 신규배정 6534:185304](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6534-185304) | 하단 고정 버튼 영역 사례 |

## 3. 변형(variant) · 크기

### 버튼 종류

| Figma 변형 | 사용 목적 | 표현 |
|---|---|---|
| `Filled / Default` | 화면의 주 동작 | 브랜드 채움 |
| `Filled / Secondary` | 보조 동작 | 보조 채움 |
| `Filled / Tertiary` | 약한 우선순위 동작 | 낮은 강조의 채움 |
| `outline / Default` | 보조 동작, 선택 가능한 보조 액션 | 브랜드 외곽선 |
| `outline / Secondary` | 중립 보조 동작 | 중립 외곽선 |
| `outline / Tertiary` | 약한 강조의 보조 동작 | 낮은 강조의 외곽선 |

`outline / Secondary`의 정사각형 MD 변형은 흰 배경, 1px `#616161` 테두리, `#555555` 글자, radius 4px이다. 기본·호버·비활성 표현은 Figma [7697:19573](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7697-19573), [7697:19657](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7697-19657), [7697:19741](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7697-19741)에서 확인했다.

### 크기

| 크기 | 높이 | 기본 용도 | Figma 출처 |
|---|---:|---|---|
| `SM_36px` | `36px` | 툴바·입력칸 옆·작은 보조 액션 | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) |
| `MD_48px` | `48px` | 일반 주요·보조 액션, 모달 버튼 | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) |
| `LG_54px` | `54px` | 모바일 화면 하단 고정 및 바텀시트 하단 액션 | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) |

일반 버튼은 라벨과 패딩에 맞춰 늘어난다. 최소 너비를 공통 적용하지 않는다. 모달 하단 버튼은 150px을 기본 폭으로 두고, 공간이 부족하면 같은 비율로 줄어든다. `.ds-btn--block`은 부모 폭 전체를 사용한다.

## 4. 상태

| 상태 | 표시 | 동작 규칙 | Figma 출처 |
|---|---|---|---|
| `Default` | 기본 색상과 테두리 | 사용 가능한 상태 | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) |
| `Hover:Active` | 호버·눌림 시 강조 표현 | 포인터·키보드·터치 입력에서 같은 액션을 실행 | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) |
| `Disabled` | 비활성 배경과 텍스트 | 선행 조건을 충족할 때까지 실행되지 않음 | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) |

## 5. 토큰 매핑

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---|---|---|
| 버튼 모서리 | `border/radius/radius1` = `4px` | Filled 및 Square 외곽선 버튼 | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) |
| Round 모서리 | `border/radius/radius-circle` = `999px` | 외곽선 Round 형태 | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) |
| 좌우 패딩 | `spacing/16` = `16px` | 버튼 라벨 좌우 여백 | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) |
| SM 세로 패딩 | `spacing/8` = `8px` | 36px 버튼 | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) |
| MD 세로 패딩 | `spacing/12` = `12px` | 48px 버튼 | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) |
| LG 세로 패딩 | `spacing/14` = `14px` | 54px 버튼 | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) |
| Filled 기본 배경 | `color/bg/primitive/primary` = `#323DA3` | 주 동작 | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) |
| 버튼 글자 | SUIT SemiBold, 크기별 `14 / 16 / 18px` | SM / MD / LG 라벨 | [Button 7696:4607](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7696-4607) |
| Outline Secondary 테두리 | `Color/Grey/600` = `#616161` | 중립 외곽선 | [7697:19573](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7697-19573) |
| Outline Secondary 글자 | `Color/text/Primitive/secondary` = `#555555` | 중립 외곽선 버튼 라벨 | [7697:19573](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7697-19573) |

## 6. PC / 모바일(≤1024) 차이

| 구분 | PC (≥1025px) | 모바일 (≤1024px) | 출처 |
|---|---|---|---|
| 일반 버튼 | SM 36 / MD 48 | SM 36 / MD 48 | `CLAUDE.md` 3-0, 3-4 |
| 하단 고정 액션 | 페이지 타이틀 오른쪽에 내용 너비로 배치 | 화면 하단 고정, 버튼이 가용 너비를 나눠 사용, 높이 54 | `CLAUDE.md` 3-4 |
| 바텀시트 하단 액션 | 해당 없음 | 전체 너비, 높이 54 | `CLAUDE.md` 3-3, 3-4 |
| 입력칸 옆 액션 | SM 36, 입력칸 가운데 정렬 | SM 36, 입력칸 가운데 정렬 | `CLAUDE.md` 3-2, 3-4 |

화면 폭만으로 일반 버튼 크기를 바꾸는 미디어쿼리는 두지 않는다. 하단 고정 또는 바텀시트 하단에서만 LG 54를 선택한다.

## 7. 사용 규칙

1. 한 화면에서 가장 중요한 동작은 Filled Default로 표시하고, 동등하지 않은 보조 동작은 Outline 또는 낮은 우선순위 타입으로 구분한다.
2. 버튼 라벨은 실행 결과를 구체적으로 표현한다. 예: `저장`, `검색`, `회수 신청`.
3. 버튼 크기는 화면이 아니라 배치 목적에 따라 선택한다. 모바일이라는 이유만으로 일반 버튼을 키우지 않는다.
4. 입력칸 옆 버튼은 SM 36을 쓰고 입력칸 높이의 수직 가운데에 맞춘다.
5. 비활성 상태는 실행할 수 없는 이유가 화면에서 분명할 때 사용하고, 조건을 만족하면 활성화한다.
6. 호버만으로 핵심 피드백이나 실행 기회를 제공하지 않는다. 키보드와 터치에서도 같은 기능을 쓸 수 있어야 한다.
7. 아이콘만으로 동작을 식별하기 어려우면 텍스트 라벨을 함께 둔다.

## 8. 사용 화면 예시

| 화면 | 사용 예시 | 기준 |
|---|---|---|
| 페이지 타이틀 액션 | `등록`, `수정`, `삭제` | PC에서는 타이틀 오른쪽에 내용 너비로 배치 |
| 검색 영역 | `초기화` + `검색` | 각각 SM 36, 우선순위에 따라 Outline / Filled 선택 |
| 입력 폼 | `우편번호 찾기` | SM 36, 입력칸 가운데 정렬 |
| 모바일 상세 화면 | `주문 취소` + 주요 동작 | 하단 고정, 가용 폭 분배, 높이 54 |
| 모달 | `취소` + `확인` | MD 48, 폭은 모달 규칙 참조 |

## 9. 확인 필요

| 항목 | 내용 |
|---|---|
| 너비 | 일반 버튼은 내용에 맞춰 hug. 모달 하단 버튼만 기본 폭 150px이며 공간이 좁으면 같은 비율로 축소한다. |

## CSS 클래스

기본 클래스와 변형 클래스를 조합한다. 상태는 HTML `disabled`와 `:focus-visible`로 표현한다.

| 클래스 | 용도 |
|---|---|
| `.ds-btn` | 버튼 기본 스타일 |
| `.ds-btn--primary` | Filled 주 동작 |
| `.ds-btn--secondary` | 보조 채움 |
| `.ds-btn--tertiary` | 낮은 강조 채움 |
| `.ds-btn--outline` | 외곽선 보조 동작 |
| `.ds-btn--outline-secondary` | 회색 외곽선 중립 보조 동작 |
| `.ds-btn--sm` | 36px 높이 |
| `.ds-btn--md` | 48px 높이 |
| `.ds-btn--lg` | 54px 높이 |
| `.ds-btn--block` | 부모 너비 전체를 사용하는 버튼 |
| `.ds-modal__footer .ds-btn` | 기본 폭 150px, 좁은 모달에서는 같은 비율로 축소 |
| `.ds-btn:disabled` | 비활성 상태 |
| `.ds-btn:focus-visible` | 키보드 포커스 상태 |

## 프레임워크 사용 원칙

- 버튼은 명확한 동작 실행이나 상태 변경에 사용한다. 단순 이동 링크나 선택 상태 표시와 혼용하지 않는다.
- 액션 중요도에 따라 Primary, Secondary, Tertiary 위계를 두고 가장 중요한 동작이 먼저 읽히게 한다.
- 라벨을 중심으로 구성하고 아이콘은 동작을 보조할 때만 사용한다. 아이콘만으로 뜻이 불명확하면 텍스트를 함께 둔다.
- 프레임워크의 위계 명칭은 기존 DS의 Filled/Outline 변형과 일대일 대응한다고 단정하지 않는다.

출처: 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [Button 164:14191](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=164-14191)

## 프레임워크와 차이

| 항목 | DS 값 | 프레임워크 값 | 노드 ID |
|---|---|---|---|
| Primary 버튼 배경색 | `#323DA3` | `#323DA3` | 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [164:14191](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=164-14191) |

## 정책 반영 이력

| 정책 조항 | 정책 기준 | 반영 내용 |
|---|---|---|
| 정책 3-0, 3-4 | 일반 버튼은 화면 폭에 따라 크기를 바꾸지 않으며, 입력 인접 버튼은 SM 36px로 입력 높이 중앙에 정렬한다. 모바일 하단 고정 액션만 LG 54px을 사용한다. | PC·모바일 크기 차이를 배치 규칙으로 정리하고, 입력 옆 버튼을 입력 영역 기준으로 정렬하도록 예시와 뷰어를 보완했다. |
| 정책 3-3, 3-4 | 모달 하단 버튼은 MD 48px, 기본 폭 150px, 간격 12px이다. | 공통 버튼 너비 규칙과 모달 하단 전용 최소 폭 규칙을 분리했다. |
