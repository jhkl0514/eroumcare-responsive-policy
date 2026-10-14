# 이로움Care 디자인 시스템 Foundations

Figma 출처: 파일 `64Q1Re56aiAA8Al89pqjnV` / 노드 ID `36:11730` / 마지막 확인일 `2026-10-12`

이 문서는 Figma DS 라이브러리와 `CLAUDE.md` 3장·5장의 확정값을 기준으로 작성한다. Figma와 문서 확정값이 다른 항목은 임의 확정하지 않고 “확인 필요”로 표시한다.

- Figma DS 라이브러리: [64Q1Re56aiAA8Al89pqjnV / Component 36:11730](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=36-11730)
- 기준 컬렉션 표기: `Primitive`, `Theme`, `Sementic`, `Breakpoint` (`Sementic`의 Figma Variables 원문 표기는 확인 필요)
- 캔버스에서 관찰한 텍스트: `대대여` (Variables mode 이름인지는 확인되지 않음)
- 참고 출처: 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [Color 1:6893](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-6893), [Typography 1:8157](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-8157), [Layout 1:8547](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-8547), [아이콘 1:9425](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-9425), [Shape 1:10475](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-10475)

<a id="color"></a>
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

<a id="typography"></a>
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

<a id="shape"></a>
## 4. 모서리

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---:|---|---|
| `border/radius/radius0` | `0` | 각진 표/구분 요소 | `Sementic` Variables |
| `border/radius/radius1` | `4` | 입력칸, 셀렉트, 버튼, 검색 패널 | `Sementic` Variables |
| `border/radius/Radius2` | `8` | 모바일 카드 목록 | `Sementic` Variables, `CLAUDE.md` 3-9 |
| `border/radius/Radius3` | `12` | 큰 표면/패널 후보 | `Sementic` Variables |
| `border/radius/Radius4` | `16px` | Modal 외곽 모서리 | `Sementic` Variables; [Modal 6487:5122](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6487-5122) |
| `border/radius/Radius5` | `40` | 큰 알약형 요소 | `Sementic` Variables |
| `border/radius/radius-circle` | `999` | 상태칩, 필터칩 알약 | `Sementic` Variables |

### 테두리 굵기

DS 라이브러리에서 공통 굵기 토큰을 확인하지 못해 프레임워크 값을 프로젝트 토큰으로 채택했다.

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---:|---|---|
| `--ds-border-1` | `1px` | 기본 테두리·구분선 | 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [Shape 1:10475](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-10475) |
| `--ds-border-1-5` | `1.5px` | 아이콘 선 굵기 용례 | 같은 노드 |
| `--ds-border-2` | `2px` | 강조·포커스 테두리 | 같은 노드 |

## 5. 그림자

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---|---|---|
| `shadow1_default` | `0 0 1px rgba(0,0,0,.2), 0 2px 16px rgba(0,0,0,.08)` | 기본 떠 있는 표면 | Effect Styles |
| `elevation/shadow2` | `0 0 1px rgba(0,0,0,.2), 0 1px 2px rgba(0,0,0,.12)` | 낮은 elevation | Effect Styles |
| `elevation/shadow3` | `0 0 2px rgba(0,0,0,.12), 0 2px 4px rgba(0,0,0,.12)` | 중간 elevation | Effect Styles |
| `elevation/shadow4` | `0 8px 24px 0 rgba(0,0,0,.20), 0 0 4px 0 rgba(0,0,0,.12)` | Modal 및 BottomSheet | Effect Styles; [Modal 6487:5122](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6487-5122) |
| `elevation/shadow5_Left` | `0 0 8px rgba(0,0,0,.12), -8px 0 16px rgba(0,0,0,.12)` | 좌측 방향 elevation | Effect Styles |
| `elevation/shadow6_Top` | `0 -4px 16px rgba(0,0,0,.12)` | 상단 방향 elevation | Effect Styles |
| 카드 목록 그림자 | `0 2px 8px rgba(0,0,0,.08), 0 0 .5px rgba(0,0,0,.2)` | 모바일 카드 목록 기본 그림자 | `CLAUDE.md` 3-9 |

<a id="icon"></a>
## 아이콘 크기

공통 아이콘 크기는 DS 라이브러리에서 정하지 않아 프레임워크 기준을 토큰으로 채택한다. 기본 그리드는 24px이며, 실제 자산의 원본 비율과 컴포넌트 슬롯을 우선한다.

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---:|---|---|
| `--ds-icon-16` | `16px` | 작은 보조 아이콘 | 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [아이콘 1:9425](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-9425) |
| `--ds-icon-20` | `20px` | 소형 컨트롤 아이콘 | 같은 노드 |
| `--ds-icon-24` | `24px` | 기본 아이콘 그리드 | 같은 노드 |
| `--ds-icon-30` | `30px` | 중대형 아이콘 | 같은 노드 |
| `--ds-icon-36` | `36px` | 큰 조작 아이콘 | 같은 노드 |

### 아이콘 파일과 사용

오류·도움말 아이콘 원본은 `design-system/icons/`에 SVG로 둔다. 파일 색은 `currentColor`를 사용하므로 적용 위치의 CSS `color`를 따른다.

| 파일 | DS 출처 | 적용 방식 |
|---|---|---|
| `icons/error.svg` | DS `icon/x-circle` 노드 [53:260](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-260) | `.ds-field__error`의 CSS mask로 표시하며 오류 텍스트와 같은 색을 사용 |
| `icons/info.svg` | DS `icon_default` 노드 [6185:1733](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6185-1733) | `.ds-field__hint`의 CSS mask로 표시하며 도움말 텍스트와 같은 색을 사용 |

필드 도움말과 오류에는 각각 `.ds-field__hint`, `.ds-field__error`를 사용하면 `components.css`가 아이콘을 자동으로 붙인다. 독립적으로 사용할 때는 SVG를 복제하거나 색을 고정하지 말고, 해당 파일을 CSS mask로 참조해 컨텍스트의 `color`를 상속시킨다.

<a id="layout"></a>
## 6. 브레이크포인트

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---:|---|---|
| 프로젝트 기준 / PC 전환 | `1025px 이상` (기준값 `1024px`) | PC 컴포넌트/레이아웃 적용 | `CLAUDE.md` 1장, 3장 |
| 프로젝트 기준 / 모바일 전환 | `1024px 이하` | 모바일 컴포넌트/레이아웃 적용 | `CLAUDE.md` 1장, 3장 |
| 프로젝트 기준 / 최소 모바일 폭 | `360px` | 모바일 기준 프레임, 콘텐츠 320px | `CLAUDE.md` 1장, 3장 |
| 디자인 캔버스 폭 / Min-width | Mobile `360`, PC `1200` | Figma 디자인 프레임 범위 | `Breakpoint` Variables |
| 디자인 캔버스 폭 / Max-width | Mobile `768`, PC `1920` | Figma 디자인 프레임 범위 | `Breakpoint` Variables |

## 7. 모달 너비

| 토큰명 | 값 | 용도 | 출처 |
|---|---:|---|---|
| `Modal/sm` | `340px` | 짧은 안내·확인 모달 기준 너비 | Figma DS 기준(노드 [6487:5122](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6487-5122)), CLAUDE.md 3-3도 이 기준으로 갱신 예정 |
| `Modal/md` | `480px` | 기본 안내·확인 모달 기준 너비 | Figma DS 기준(노드 [6487:5122](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6487-5122)), CLAUDE.md 3-3도 이 기준으로 갱신 예정 |
| `Modal/lg` | `600px` | 표 포함 모달 기준 너비 | Figma DS 기준(노드 [6487:5122](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6487-5122)), CLAUDE.md 3-3도 이 기준으로 갱신 예정 |
| `Modal/xl` | `800px` | 넓은 표·문서 모달 기준 너비 | Figma DS 기준(노드 [6487:5122](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6487-5122)), CLAUDE.md 3-3도 이 기준으로 갱신 예정 |

## 8. 확인 필요

| 항목 | 내용 |
|---|---|
| 브레이크포인트 기록 구분 | 프로젝트 기준은 `1024 / 360`이며, Figma의 Mobile `360-768`, PC `1200-1920`은 디자인 캔버스 폭으로 기록한다. |
| 프레임워크 참고 범위 | 지정된 Figma 노드만 확인했다. 사내 웹 문서 URL은 출처로 기재하지 않는다. |
| Variables 원문 표기 | Figma node metadata에서 `Sementic` collection명은 확인되지 않았고, variable search에서도 결과가 없었다. Variables collection 목록을 직접 확인할 수 없어 원문 표기는 미확정이다. |
| `대대여` 표기 | Figma 캔버스에 해당 문자열의 레이어가 있지만 Variables mode 이름인지는 확인하지 못했다. |

## 사용 원칙

- 색상은 역할을 먼저 정한다. 브랜드 색은 핵심 액션·선택 상태에, 중립색은 정보 위계와 구분에, 시맨틱 색은 정보·성공·주의·오류 의미에 사용한다.
- 텍스트와 배경의 대비를 확인하고, 색만으로 상태를 전달하지 않는다.
- SUIT 스타일 토큰의 역할과 위계를 유지한다. 본문 기본 크기는 16px이며, 화면마다 임의로 타이포 위계를 만들지 않는다.
- 레이아웃은 컬럼·여백·거터를 함께 설계하고 정렬 기준을 화면 크기가 달라져도 일관되게 유지한다. 프레임워크 그리드 예시는 참고 지침이며 프로젝트 브레이크포인트를 대체하지 않는다.
- 아이콘은 24px 그리드를 기준으로 제공된 크기와 선 굵기를 우선 사용하고, 장식 목적의 임의 변형이나 소수점 크기는 피한다.
- 모서리와 그림자는 표면의 역할을 구분하는 데 사용하며, 컴포넌트별 DS 토큰을 우선한다.

출처: 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [Color 1:6893](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-6893), [Typography 1:8157](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-8157), [Layout 1:8547](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-8547), [아이콘 1:9425](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-9425), [Shape 1:10475](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-10475)

## 프레임워크와 차이

| 항목 | DS 값 | 프레임워크 값 | 노드 ID |
|---|---|---|---|
| 프로젝트 반응형 기준 | `1024px` 이하 모바일, 최소 폭 `360px` | 767px 이하 고정형 모바일, 768px 이상 유동형 레이아웃, 최소 폭 360px | 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [1:8547](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-8547) |
| 반경 토큰 | Radius3 `12px`, Radius4 `16px`, Radius5 `40px` | Radius3 `16px`, Radius4 `40px`, 별도 Radius5 없음 | 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [1:10475](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-10475) |
| 테두리 굵기 공통 토큰 | DS 원본에 미정이어서 프레임워크 값으로 `--ds-border-1/1-5/2` 채택: 1/1.5/2px | 1px, 1.5px, 2px 단계. 1.5px은 아이콘 용도 안내 | 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [1:10475](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-10475) |
| 범용 아이콘 크기 | DS 원본에 미정이어서 프레임워크 값으로 `--ds-icon-16/20/24/30/36` 채택 | 24px 기준, 16/20/24/30/36px 크기 세트 | 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [1:9425](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-9425) |
| 상태 역할 색 | 상태칩은 배경·테두리·글자 조합 사용. Info `#EFF6FF/#DBEAFE/#1E40AF`, Success `#E8F5E9/#C8E6C9/#166534`, Caution `#FFF8E1/#FFB300/#FF8F00`, Danger `#FFEBEE/#FFCDD2/#C62828` | 단색 역할 색: Info `#1D4ED8`, Success `#15803D`, Caution `#FFA000`, Error `#D32F2F` | 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [1:6893](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-6893) |
| 브랜드·중립 원본 팔레트 | 확인한 Darkblue, lightgreen, Grey 단계 | 확인한 Primary, BrandSub, Neutral 팔레트 값 일치 | 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [1:6893](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-6893) |
| 기본 서체 | SUIT, 본문 토큰에 16px 포함 | SUIT, 본문 기준 16px | 이로움케어 프레임워크 Figma(AD6zHJIIn6yJ0ifS8w5pYv) 노드 [1:8157](https://www.figma.com/design/AD6zHJIIn6yJ0ifS8w5pYv?node-id=1-8157) |
