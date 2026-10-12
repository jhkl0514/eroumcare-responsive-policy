# Status Chip

Figma 출처: 파일 `64Q1Re56aiAA8Al89pqjnV` / 노드 ID `13139:11578`, `13864:12146`, `13920:12833`, `13027:12231`, `13079:12197` / 마지막 확인일 `2026-10-12`

## 1. 개요 · 언제 쓰는지

상태칩은 주문, 대여, 회수, A/S, 반품의 처리 상태를 짧은 텍스트와 시맨틱 컬러로 보여주는 컴포넌트다. 같은 라벨이 있어도 도메인별 Figma 컴포넌트가 다르므로, 화면 도메인에 맞는 상태칩을 사용한다.

개인정보가 필요한 화면 예시는 실제값 대신 `홍*동`, `010-0000-0000`, `L0000000000` 같은 가상값만 사용한다.

## 2. Figma 출처

| 도메인 | Figma 컴포넌트 | 노드 |
|---|---|---|
| 구입 주문 | `Status chip-Order` | [13139:11578](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13139-11578) |
| 대여 주문 | `Status chip-Rental` | [13864:12146](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13864-12146) |
| 회수 | Figma 컴포넌트명 `Status chip-Collect`; 별칭(alias) `Status chip-Return` | [13920:12833](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13920-12833) |
| A/S | Figma 컴포넌트명 `Status chip_AS`; 별칭(alias) `Status chip-AS` | [13027:12231](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13027-12231) |
| 반품 | `Status chip-Return` | [13079:12197](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13079-12197) |

## 3. 변형(variant) · 크기

| 항목 | 값 | 비고 | Figma 출처 |
|---|---|---|---|
| 기본 높이 | `32px` | PC / 모바일 공통 | 상태칩 5종 |
| 모서리 | `999px` | 알약형 | `border/radius/radius-circle` |
| 패딩 | `4px 12px` | 상하 4, 좌우 12 | 상태칩 5종 |
| 내부 gap | `4px` | 아이콘이 붙는 경우 기준 | 상태칩 5종 |
| 텍스트 | SUIT SemiBold 14px / line-height 20px | letter spacing 0 | `Suit/Body/SS/Semibold` |
| 테이블 안 배지 | 높이 `24px`, 12px Medium | 테이블 셀 안에서만 축소 | `CLAUDE.md` 3-9 |

## 4. 상태

### 4-1. 시맨틱 색

| 시맨틱 | 배경 | 테두리 | 글자 |
|---|---:|---:|---:|
| Info | `#EFF6FF` | `#DBEAFE` | `#1E40AF` |
| Success | `#E8F5E9` | `#C8E6C9` | `#166534` |
| Caution | `#FFF8E1` | `#FFB300` | `#FF8F00` |
| BrandSub | `#F2FDE4` | `#C6F68D` | `#09AF00` |
| Default | `#E3E5F5` | `#CED2F4` | `#141E76` |
| Danger | `#FFEBEE` | `#FFCDD2` | `#C62828` |
| Neutral | `#F5F5F5` | `#BDBDBD` | `#555555` |
| Neutral · White | `#FFFFFF` | `#BDBDBD` | `#555555` |

### 4-2. 구입 주문

| 상태 | 시맨틱 | Figma 출처 |
|---|---|---|
| 주문접수 | Info | [Status chip-Order](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13139-11578) |
| 주문확인중 | Success | [Status chip-Order](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13139-11578) |
| 상품준비 | Caution | [Status chip-Order](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13139-11578) |
| 출고중 | BrandSub | [Status chip-Order](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13139-11578) |
| 출고완료 | BrandSub | [Status chip-Order](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13139-11578) |
| 배송완료 | Default | [Status chip-Order](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13139-11578) |
| 취소요청 | Caution | [Status chip-Order](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13139-11578) |
| 주문취소 | Danger | 단일 상태로 통일. Figma의 주체별 3종은 D-05로 정리 예정 |
| 추가상품 | Neutral · White | [Status chip-Order](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13139-11578); 개발 화면 색은 DS 현행과 다름 |

### 4-3. 대여 주문

| 상태 | 시맨틱 | Figma 출처 |
|---|---|---|
| 신규배정 | Info | [Status chip-Rental](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13864-12146) |
| 주문확인중 | Success | [Status chip-Rental](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13864-12146) |
| 주문완료 | BrandSub | [Status chip-Rental](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13864-12146) |
| 출고준비중 | Caution | [Status chip-Rental](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13864-12146) |
| 출고완료 | BrandSub | [Status chip-Rental](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13864-12146) |
| 배송완료 | Default | [Status chip-Rental](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13864-12146) |
| 취소요청 | Caution | [Status chip-Rental](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13864-12146) |
| 주문취소 | Danger | [Status chip-Rental](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13864-12146) |
| 취소완료 | Neutral | [Status chip-Rental](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13864-12146) |

### 4-4. 회수

| 상태 | 시맨틱 | Figma 출처 |
|---|---|---|
| 회수접수 | Info | [Status chip-Collect](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13920-12833) |
| 회수확인중 | Success | [Status chip-Collect](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13920-12833) |
| 회수요청 | Caution | [Status chip-Collect](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13920-12833) |
| 회수준비중 | BrandSub | [Status chip-Collect](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13920-12833) |
| 회수완료 | Default | [Status chip-Collect](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13920-12833) |
| 회수취소 | Danger | [Status chip-Collect](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13920-12833) |
| 회수취소완료 | Neutral | [Status chip-Collect](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13920-12833) |

### 4-5. A/S

| 상태 | 시맨틱 | Figma 출처 |
|---|---|---|
| A/S접수 | Info | [Status chip_AS](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13027-12231) |
| A/S접수 확인 | Success | [Status chip_AS](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13027-12231) |
| A/S진행중 | BrandSub | [Status chip_AS](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13027-12231) |
| A/S완료 | Default | [Status chip_AS](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13027-12231) |
| A/S접수 취소 | Danger | [Status chip_AS](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13027-12231) |
| A/S접수 불가 | Danger | [Status chip_AS](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13027-12231) |
| A/S 불가 | Danger | [Status chip_AS](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13027-12231) |

### 4-6. 반품

| 상태 | 시맨틱 | Figma 출처 |
|---|---|---|
| 반품접수 | Info | [Status chip-Return](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13079-12197) |
| 반품접수 확인 | Success | [Status chip-Return](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13079-12197) |
| 반품요청 | Caution | [Status chip-Return](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13079-12197) |
| 회수요청 | Caution | [Status chip-Return](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13079-12197) |
| 회수진행 | BrandSub | [Status chip-Return](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13079-12197) |
| 반품완료 | Default | [Status chip-Return](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13079-12197) |
| 반품철회 | Default | [Status chip-Return](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13079-12197) |
| 반품접수 취소 | Danger | [Status chip-Return](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13079-12197) |
| 반품접수 불가 | Danger | [Status chip-Return](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13079-12197) |
| 반품불가 | Danger | [Status chip-Return](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13079-12197) |

## 5. 토큰 매핑

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---:|---|---|
| `status-chip.height` | `32px` | 기본 상태칩 높이 | 상태칩 5종 |
| `status-chip.radius` | `999px` | 알약형 모서리 | `border/radius/radius-circle` |
| `status-chip.padding` | `4px 12px` | 내부 여백 | 상태칩 5종 |
| `status-chip.gap` | `4px` | 아이콘/텍스트 간격 | 상태칩 5종 |
| `status-chip.font` | SUIT SemiBold 14 / 20 | 기본 텍스트 | `Suit/Body/SS/Semibold` |
| `status-chip.info` | bg `#EFF6FF`, border `#DBEAFE`, text `#1E40AF` | 시작/접수 | `Sementic` Variables |
| `status-chip.success` | bg `#E8F5E9`, border `#C8E6C9`, text `#166534` | 확인 | `Sementic` Variables |
| `status-chip.caution` | bg `#FFF8E1`, border `#FFB300`, text `#FF8F00` | 요청/대기 | `Sementic` Variables |
| `status-chip.brandSub` | bg `#F2FDE4`, border `#C6F68D`, text `#09AF00` | 진행/준비/출고 | `Sementic` Variables |
| `status-chip.default` | bg `#E3E5F5`, border `#CED2F4`, text `#141E76` | 완료 | `Sementic` Variables |
| `status-chip.danger` | bg `#FFEBEE`, border `#FFCDD2`, text `#C62828` | 취소/불가 | `Sementic` Variables |
| `status-chip.neutral` | bg `#F5F5F5`, border `#BDBDBD`, text `#555555` | 취소완료 등 중립 | `Sementic` Variables |
| `status-chip.neutral-white` | bg `#FFFFFF`, border `#BDBDBD`, text `#555555` | 추가상품 | `Sementic` Variables |

## 6. PC / 모바일(≤1024) 차이

| 구분 | PC | 모바일(≤1024) | 비고 |
|---|---|---|---|
| 기본 상태칩 | 높이 32, 14px | 높이 32, 14px | 화면 폭에 따라 크기를 바꾸지 않는다 |
| 목록 카드 | 카드 헤더나 요약 영역에 사용 | 카드 헤더에 사용 | 모바일 카드 목록 간격은 12, 카드 radius 8 |
| 테이블 배지 | 테이블 안에서는 높이 24, 12px Medium | 모바일은 테이블 대신 카드가 기본 | `CLAUDE.md` 3-9 예외 |
| 도메인 선택 | 화면 도메인별 컴포넌트 사용 | 동일 | 같은 라벨이어도 도메인 컴포넌트를 바꾸지 않는다 |

## 7. 사용 규칙

1. 상태칩은 도메인별 컴포넌트를 사용한다. 구입 화면에서는 `Status chip-Order`, 대여 화면에서는 `Status chip-Rental`을 쓴다.
2. 같은 라벨이라도 도메인이 다르면 다른 컴포넌트로 본다. 예: `배송완료`는 구입/대여 각각의 상태칩에서 선택한다.
3. 색은 화면별로 직접 지정하지 않고 시맨틱 매핑을 따른다.
4. 상태 흐름은 Info → Success → Caution / BrandSub → Default → Danger / Neutral 순서로 읽히게 한다.
5. Figma에 남아 있어도 D-05 삭제 예정 항목은 본문 스펙에 포함하지 않는다.
6. 긴 라벨은 컴포넌트 고유 폭을 따른다. 임의로 축약하지 않는다.
7. 테이블 안 배지만 높이 24, 12px Medium 예외를 허용한다.

## 8. 사용 화면 예시

| 화면 | 사용 상태칩 | 예시 |
|---|---|---|
| 주문요청관리 리스트 / 상세 | 구입 주문, 대여 주문 | `주문접수`, `상품준비`, `배송완료`, `주문취소` |
| 대여 회수 관리 리스트 / 상세 | 회수 | `회수접수`, `회수준비중`, `회수완료` |
| 반품 / A/S 목록과 상세 | 반품, A/S | `반품접수 확인`, `A/S진행중`, `A/S 불가` |
| 모바일 주문 카드 | 구입 주문, 대여 주문 | 수급자 `홍*동`, 주문번호 `ORD-000000` 옆 상태 표시 |

## 9. 확인 필요

| 항목 | 내용 |
|---|---|
| DS 삭제 예정(D-05) | 미사용(D-05) |
| 구입 주문취소 | 주문취소는 단일 상태로 통일한다. Figma의 주체별 3종은 정리될 예정이다. |
| 구입 추가상품 색상 | DS 기준 `Neutral · White`를 따른다. 개발 화면의 초록은 현행과 다름. |

## CSS 클래스

기본 `.ds-chip`에 시맨틱 색 또는 도메인 상태 클래스를 하나 조합한다. D-05 제외 항목의 클래스는 제공하지 않는다.

| 도메인·상태 | 클래스 |
|---|---|
| 구입 주문: 주문접수, 주문확인중, 상품준비, 출고중, 출고완료, 배송완료, 취소요청, 주문취소, 추가상품 | `.ds-chip--purchase-received`, `.ds-chip--purchase-confirming`, `.ds-chip--purchase-preparing`, `.ds-chip--purchase-shipping`, `.ds-chip--purchase-shipped`, `.ds-chip--purchase-delivered`, `.ds-chip--purchase-cancel-requested`, `.ds-chip--purchase-cancelled`, `.ds-chip--purchase-additional-product` |
| 대여 주문: 신규배정, 주문확인중, 주문완료, 출고준비중, 출고완료, 배송완료, 취소요청, 주문취소, 취소완료 | `.ds-chip--rental-assigned`, `.ds-chip--rental-confirming`, `.ds-chip--rental-completed`, `.ds-chip--rental-shipping-preparing`, `.ds-chip--rental-shipped`, `.ds-chip--rental-delivered`, `.ds-chip--rental-cancel-requested`, `.ds-chip--rental-cancelled`, `.ds-chip--rental-cancellation-completed` |
| 회수: 회수접수, 회수확인중, 회수요청, 회수준비중, 회수완료, 회수취소, 회수취소완료 | `.ds-chip--collection-received`, `.ds-chip--collection-confirming`, `.ds-chip--collection-requested`, `.ds-chip--collection-preparing`, `.ds-chip--collection-completed`, `.ds-chip--collection-cancelled`, `.ds-chip--collection-cancellation-completed` |
| A/S: 접수, 접수 확인, 진행중, 완료, 접수 취소, 접수 불가, A/S 불가 | `.ds-chip--service-received`, `.ds-chip--service-confirmed`, `.ds-chip--service-in-progress`, `.ds-chip--service-completed`, `.ds-chip--service-cancelled`, `.ds-chip--service-unavailable`, `.ds-chip--service-not-available` |
| 반품: 접수, 접수 확인, 요청, 회수 요청, 회수 진행, 완료, 철회, 접수 취소, 접수 불가, 반품불가 | `.ds-chip--return-received`, `.ds-chip--return-confirmed`, `.ds-chip--return-requested`, `.ds-chip--return-collection-requested`, `.ds-chip--return-collection-progress`, `.ds-chip--return-completed`, `.ds-chip--return-withdrawn`, `.ds-chip--return-cancelled`, `.ds-chip--return-unavailable`, `.ds-chip--return-not-allowed` |
| 공통 시맨틱 | `.ds-chip--info`, `.ds-chip--success`, `.ds-chip--caution`, `.ds-chip--brand-sub`, `.ds-chip--default`, `.ds-chip--danger`, `.ds-chip--neutral`, `.ds-chip--neutral-white` |
| 테이블 축약 배지 | `.ds-chip--table` |

## HTML 예시

```html
<span class="ds-chip ds-chip--purchase-preparing">상품준비</span>
```

## 프레임워크 사용 원칙

- 상태칩은 대상의 현재 진행 상태를 짧게 보여준다. 한 영역에는 대표 상태를 우선 표시한다.
- 상태 의미에 맞는 시맨틱 타입과 간결한 업무 용어를 선택한다. 색만으로 상태를 구분하지 않는다.
- 부가 정보를 여러 개 보여줘야 할 때 상태칩을 무작정 늘어놓지 말고 배지 등 보조 표현을 검토한다.
- 앞쪽 아이콘은 상태 이해에 도움이 될 때 사용하고, 텍스트만으로 충분하면 생략한다.
- 프레임워크의 타입 이름과 Filled/Transparent/Outline 표현은 참고 원칙이며, 기존 DS의 도메인별 매핑을 대체하지 않는다.

출처: 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [Status Chips 10:15762](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=10-15762)

## 프레임워크와 차이

| 항목 | DS 값 | 프레임워크 값 | 노드 ID |
|---|---|---|---|
| 상태 타입 | Info, Success, Caution, BrandSub, Default, Danger, Neutral, Neutral-white | Info, Success, Error, Default, BrandSub, Caution | 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [10:15762](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=10-15762) |
| 시각 변형 | DS 시맨틱 상태 색상 매핑을 사용 | Filled, Transparent, Outline | 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [10:15762](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=10-15762) |
