# 이로움Care 디자인 시스템 Foundations

이 문서는 Figma DS 라이브러리와 `CLAUDE.md` 3장·5장의 확정값을 기준으로 작성한다. Figma와 문서 확정값이 다른 항목은 임의 확정하지 않고 “확인 필요”로 표시한다.

- Figma DS 라이브러리: [64Q1Re56aiAA8Al89pqjnV / Component 36:11730](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=36-11730)
- 기준 컬렉션: `Primitive`, `Theme`, `Sementic`, `Breakpoint`
- 기준 모드: `대대여`
- 참고 출처(접근 불가, 추후 확인): [uxuithkc.netlify.app/framework](https://uxuithkc.netlify.app/framework)

## 1. 컬러

### 1-1. 원본 팔레트

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---:|---|---|
| `Color/Base/black` | `#000000` | 기본 검정 | `Primitive` Variables |
| `Color/Base/white` | `#FFFFFF` | 기본 흰색, 칩/카드 배경 | `Primitive` Variables |
| `Color/Grey/50` | `#FAFAFA` | 보조 배경, 검색 패널 배경 | `Primitive` Variables |
| `Color/Grey/100` | `#F5F5F5` | 테이블 헤더, 중립 배경 | `Primitive` Variables |
| `Color/Grey/200` | `#EEEEEE` | 비활성 배경, 약한 구분선 | `Primitive` Variables |
| `Color/Grey/300` | `#E0E0E0` | 보조 버튼 활성 배경 | `Primitive` Variables |
| `Color/Grey/400` | `#BDBDBD` | 기본 테두리, 비활성 텍스트 | `Primitive` Variables |
| `Color/Grey/500` | `#999999` | 3차 텍스트 | `Primitive` Variables |
| `Color/Grey/600` | `#616161` | 보조 텍스트, 보조 테두리 | `Primitive` Variables |
| `Color/Grey/700` | `#555555` | 중립 강조 텍스트 | `Primitive` Variables |
| `Color/Grey/800` | `#333333` | 강한 테두리, 아이콘 기본 | `Primitive` Variables |
| `Color/Grey/900` | `#1A1A1A` | 본문 기본 텍스트 | `Primitive` Variables |
| `Color/Darkblue/50` | `#EFF1FD` | 선택 배경, 브랜드 subtle | `Primitive` Variables |
| `Color/Darkblue/100` | `#E3E5F5` | 완료 상태 배경 | `Primitive` Variables |
| `Color/Darkblue/200` | `#CED2F4` | 완료 상태 테두리 | `Primitive` Variables |
| `Color/Darkblue/600` | `#323DA3` | 브랜드 기본, 포커스 | `Primitive` Variables |
| `Color/Darkblue/800` | `#141E76` | 브랜드 강조 텍스트 | `Primitive` Variables |
| `Color/blue/50` | `#EFF6FF` | 정보 상태 배경 | `Primitive` Variables |
| `Color/blue/100` | `#DBEAFE` | 정보 상태 테두리 | `Primitive` Variables |
| `Color/blue/800` | `#1E40AF` | 정보 상태 텍스트 | `Primitive` Variables |
| `Color/green/50` | `#E8F5E9` | 성공 상태 배경 | `Primitive` Variables |
| `Color/green/100` | `#C8E6C9` | 성공 상태 테두리 | `Primitive` Variables |
| `Color/green/800` | `#166534` | 성공 상태 텍스트 | `Primitive` Variables |
| `Color/Yellow/50` | `#FFF8E1` | 주의 상태 배경 | `Primitive` Variables |
| `Color/Yellow/600` | `#FFB300` | 주의 상태 테두리 | `Primitive` Variables |
| `Color/Yellow/800` | `#FF8F00` | 주의 상태 텍스트 | `Primitive` Variables |
| `Color/lightgreen/50` | `#F2FDE4` | 진행 상태 배경 | `Primitive` Variables |
| `Color/lightgreen/200` | `#C6F68D` | 진행 상태 테두리 | `Primitive` Variables |
| `Color/lightgreen/800` | `#09AF00` | 진행 상태 텍스트 | `Primitive` Variables |
| `Color/red/50` | `#FFEBEE` | 위험 상태 배경 | `Primitive` Variables |
| `Color/red/100` | `#FFCDD2` | 위험 상태 테두리 | `Primitive` Variables |
| `Color/red/600` | `#E53935` | 에러, 위험 기본 | `Primitive` Variables |
| `Color/red/800` | `#C62828` | 위험 상태 텍스트 | `Primitive` Variables |

### 1-2. 시맨틱 컬러

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---:|---|---|
| `Color/text/primary` | `#1A1A1A` | 기본 본문 텍스트 | `Sementic` Variables |
| `Color/text/secondary` | `#616161` | 보조 텍스트 | `Sementic` Variables |
| `Color/text/teritiary` | `#999999` | 3차 텍스트 | `Sementic` Variables |
| `Color/text/disabled` | `#BDBDBD` | 비활성 텍스트 | `Sementic` Variables |
| `Color/text/info-bold` | `#1E40AF` | Info 상태칩 텍스트 | `Sementic` Variables |
| `Color/text/success-bold` | `#166534` | Success 상태칩 텍스트 | `Sementic` Variables |
| `Color/text/warning-bold` | `#FF8F00` | Caution 상태칩 텍스트 | `Sementic` Variables |
| `Color/text/brandSub` | `#09AF00` | BrandSub 상태칩 텍스트 | `Sementic` Variables |
| `Color/text/Primitive/primary-hover:active` | `#141E76` | Default 상태칩 텍스트 | `Sementic` Variables |
| `Color/text/danger-bold` | `#C62828` | Danger 상태칩 텍스트 | `Sementic` Variables |
| `Color/text/Primitive/secondary` | `#555555` | Neutral 상태칩 텍스트 | `Sementic` Variables |
| `Color/bg/primary` | `#FFFFFF` | 기본 표면, Neutral White 칩 | `Sementic` Variables |
| `Color/bg/secondary` | `#FAFAFA` | 보조 표면, 검색 패널 | `Sementic` Variables |
| `Color/bg/teritiary` | `#F5F5F5` | 테이블 헤더, Neutral 칩 | `Sementic` Variables |
| `Color/bg/disabled` | `#EEEEEE` | 비활성 입력 배경 | `Sementic` Variables |
| `Color/bg/info-subtle` | `#EFF6FF` | Info 상태 배경 | `Sementic` Variables |
| `Color/bg/success-subtle` | `#E8F5E9` | Success 상태 배경 | `Sementic` Variables |
| `Color/bg/warning-subtle` | `#FFF8E1` | Caution 상태 배경 | `Sementic` Variables |
| `Color/bg/brandSub-subtle` | `#F2FDE4` | BrandSub 상태 배경 | `Sementic` Variables |
| `Color/bg/brand_subtle` | `#E3E5F5` | Default 상태 배경 | `Sementic` Variables |
| `Color/bg/danger-subtle` | `#FFEBEE` | Danger 상태 배경 | `Sementic` Variables |
| `Color/border/primary` | `#BDBDBD` | 기본 테두리 | `Sementic` Variables |
| `Color/border/secondary` | `#EEEEEE` | 약한 구분선 | `Sementic` Variables |
| `Color/border/info-subtle` | `#DBEAFE` | Info 상태 테두리 | `Sementic` Variables |
| `Color/border/success-subtle` | `#C8E6C9` | Success 상태 테두리 | `Sementic` Variables |
| `Color/border/warning` | `#FFB300` | Caution 상태 테두리 | `Sementic` Variables |
| `Color/border/brandSub_subtle` | `#C6F68D` | BrandSub 상태 테두리 | `Sementic` Variables |
| `Color/border/brand-subtle` | `#CED2F4` | Default 상태 테두리 | `Sementic` Variables |
| `Color/border/danger-subtle` | `#FFCDD2` | Danger 상태 테두리 | `Sementic` Variables |

## 2. 타이포

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---|---|---|
| `Suit/Heading/XXL/Heavy` | SUIT Heavy 36 / 46, letter `-2%` | 최상위 제목 | Text Styles |
| `Suit/Heading/XL/Heavy` | SUIT Heavy 32 / 42, letter `-2%` | 큰 섹션 제목 | Text Styles |
| `Suit/Heading/LG/Heavy` | SUIT Heavy 28 / 38, letter `-2%` | 페이지 제목 | Text Styles |
| `Suit/Heading/MD/Bold` | SUIT Bold 24 / 34, letter `-2%` | 모달/상세 제목 | Text Styles |
| `Suit/Heading/SM/Bold` | SUIT Bold 20 / 30, letter `-2%` | 섹션 제목 | Text Styles |
| `Suit/Body/MD/Regular` | SUIT Regular 18 / 26, letter `-1.5%` | 큰 본문 | Text Styles |
| `Suit/Body/MD/SemiBold` | SUIT SemiBold 18 / 26, letter `-1.5%` | 큰 본문 강조 | Text Styles |
| `Suit/Body/SM/Regular` | SUIT Regular 16 / 24, letter `-1.5%` | 모바일 입력, 일반 본문 | Text Styles |
| `Suit/Body/SM/SemiBold` | SUIT SemiBold 16 / 24, letter `-1.5%` | 모바일 본문 강조 | Text Styles |
| `Suit/Body/SS/Regular` | SUIT Regular 14 / 20, letter `0%` | PC 입력, 표 본문 | Text Styles |
| `Suit/Body/SS/Semibold` | SUIT SemiBold 14 / 20, letter `0%` | 상태칩, 표 헤더 | Text Styles |
| `Suit/Caption/XS` | SUIT Medium 12 / 18, letter `-1.5%` | 캡션, 보조 배지 | Text Styles |

## 3. 간격

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---:|---|---|
| `spacing/0` | `0` | 간격 없음 | `Sementic` Variables |
| `spacing/2` | `2` | 미세 간격 | `Sementic` Variables |
| `spacing/4` | `4` | 칩 내부 세로 패딩, 작은 gap | `Sementic` Variables |
| `spacing/6` | `6` | 모바일 카드 줄 간격 | `Sementic` Variables |
| `spacing/8` | `8` | 입력/옵션 내부 간격 | `Sementic` Variables |
| `spacing/12` | `12` | 상태칩 좌우 패딩, 카드 목록 간격 | `Sementic` Variables |
| `spacing/16` | `16` | 카드 내부 기본 패딩 | `Sementic` Variables |
| `spacing/20` | `20` | 모바일 화면 좌우 여백 | `Sementic` Variables |
| `spacing/24` | `24` | 상세/입력 화면 상단 여백 | `Sementic` Variables |
| `spacing/32` | `32` | 모바일 하단 고정 버튼 위 여백 | `Sementic` Variables |
| `spacing/36` | `36` | SM 버튼 높이 | `Sementic` Variables |
| `spacing/40` | `40` | PC 입력 높이, 일부 컨트롤 높이 | `Sementic` Variables |
| `spacing/48` | `48` | 모바일 입력 높이, MD 버튼 높이 | `Sementic` Variables |
| 카드 목록 간격 | `12` | 카드 사이 간격 | `CLAUDE.md` 3-8, 3-9 |
| 상태칩 gap | `4` | 아이콘/텍스트 조합 여백 | [Status chip-Order 13139:11578](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=13139-11578) |

## 4. 모서리

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---:|---|---|
| `border/radius/radius0` | `0` | 각진 표/구분 요소 | `Sementic` Variables |
| `border/radius/radius1` | `4` | 입력칸, 셀렉트, 버튼, 검색 패널 | `Sementic` Variables |
| `border/radius/Radius2` | `8` | 모바일 카드 목록 | `Sementic` Variables, `CLAUDE.md` 3-9 |
| `border/radius/Radius3` | `12` | 큰 표면/패널 후보 | `Sementic` Variables |
| `border/radius/Radius4` | `16` | 강조 표면 후보 | `Sementic` Variables |
| `border/radius/Radius5` | `40` | 큰 알약형 요소 | `Sementic` Variables |
| `border/radius/radius-circle` | `999` | 상태칩, 필터칩 알약 | `Sementic` Variables |

## 5. 그림자

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---|---|---|
| `shadow1_default` | `0 0 1px rgba(0,0,0,.2), 0 2px 16px rgba(0,0,0,.08)` | 기본 떠 있는 표면 | Effect Styles |
| `elevation/shadow2` | `0 0 1px rgba(0,0,0,.2), 0 1px 2px rgba(0,0,0,.12)` | 낮은 elevation | Effect Styles |
| `elevation/shadow3` | `0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.12)` | 중간 elevation | Effect Styles |
| `elevation/shadow4` | `0 0 4px rgba(0,0,0,.12), 0 8px 24px rgba(0,0,0,.2)` | 바텀시트/강한 overlay | Effect Styles |
| `elevation/shadow5_Left` | `0 0 8px rgba(0,0,0,.12), -8px 0 16px rgba(0,0,0,.12)` | 좌측 방향 elevation | Effect Styles |
| `elevation/shadow6_Top` | `0 -4px 16px rgba(0,0,0,.12)` | 상단 방향 elevation | Effect Styles |
| 카드 목록 그림자 | `0 2px 8px rgba(0,0,0,.08), 0 0 .5px rgba(0,0,0,.2)` | 모바일 카드 목록 기본 그림자 | `CLAUDE.md` 3-9 |

## 6. 브레이크포인트

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---:|---|---|
| 프로젝트 기준 / PC 전환 | `1025px 이상` (기준값 `1024px`) | PC 컴포넌트/레이아웃 적용 | `CLAUDE.md` 1장, 3장 |
| 프로젝트 기준 / 모바일 전환 | `1024px 이하` | 모바일 컴포넌트/레이아웃 적용 | `CLAUDE.md` 1장, 3장 |
| 프로젝트 기준 / 최소 모바일 폭 | `360px` | 모바일 기준 프레임, 콘텐츠 320px | `CLAUDE.md` 1장, 3장 |
| 디자인 캔버스 폭 / Min-width | Mobile `360`, PC `1200` | Figma 디자인 프레임 범위 | `Breakpoint` Variables |
| 디자인 캔버스 폭 / Max-width | Mobile `768`, PC `1920` | Figma 디자인 프레임 범위 | `Breakpoint` Variables |

## 7. 확인 필요

| 항목 | 내용 |
|---|---|
| 브레이크포인트 기록 구분 | 프로젝트 기준은 `1024 / 360`이며, Figma의 Mobile `360-768`, PC `1200-1920`은 디자인 캔버스 폭으로 기록한다. |
| 참고 URL 접근 | [uxuithkc.netlify.app/framework](https://uxuithkc.netlify.app/framework)는 접근 불가, 추후 확인. |
