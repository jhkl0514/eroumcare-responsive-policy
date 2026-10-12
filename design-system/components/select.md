# Select

Figma 출처: 파일 `64Q1Re56aiAA8Al89pqjnV` / 노드 ID `53:698`, `6570:11270`, `7984:8451`, `6323:10568` / 마지막 확인일 `2026-10-12`

## 1. 개요 · 언제 쓰는지

Select는 정해진 목록에서 값을 선택할 때 사용한다. 필드에는 현재 값과 펼침 아이콘을 표시하고, 옵션 목록에서는 선택 상태를 분명하게 구분한다. 값 직접 입력이나 검색이 필요한 필드는 Textfield 또는 검색 선택 패턴을 사용한다.

## 2. Figma 출처

| 컴포넌트 | Figma 출처 | 설명 |
|---|---|---|
| `SelectField` | [SelectField 53:698](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-698) | 선택 필드의 PC/MO 및 상태 변형 |
| `SelectOption` | [SelectOption 6570:11270](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6570-11270) | 옵션 한 행의 기기·선택·상태 변형 |
| `OptionGroup` | [OptionGroup 7984:8451](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7984-8451) | 옵션 목록 패널 |
| 검색 영역의 셀렉트 사례 | [주문 관련 컴포넌트 6323:10568](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6323-10568) | 검색 조건 선택 필드 |

## 3. 변형(variant) · 크기

### SelectField

| 속성 | 값 | 설명 | Figma 출처 |
|---|---|---|---|
| `Device` | `PC`, `MO` | PC·모바일 크기 변형 | [SelectField 53:698](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-698) |
| `Style` | `Outline` | 외곽선형 | [SelectField 53:698](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-698) |
| 높이 | PC `40px`, MO `48px` | 입력 필드와 같은 기기별 높이 | `CLAUDE.md` 3-0, 3-2 |
| 내부 좌우 패딩 | `12px` | 값과 아이콘 여백 | `CLAUDE.md` 3-0, 3-2 |
| 글자 | PC `14px`, MO `16px` | 라벨·선택 값 | `CLAUDE.md` 3-0, 3-2 |
| 모서리 | `4px` | 필드 외곽 | [SelectField 53:698](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-698) |

### SelectOption 및 OptionGroup

| 항목 | PC (≥1025px) | 모바일 (≤1024px) | Figma 출처 |
|---|---|---|---|
| 옵션 행 높이 | `36px` | `44px` | [SelectOption 6570:11270](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6570-11270), `CLAUDE.md` 3-0 |
| 옵션 패딩 | 위/아래 `8px`, 좌 `12px`, 우 `8px` | 위/아래 `10px`, 좌 `12px`, 우 `8px` | `CLAUDE.md` 3-0, 3-3 |
| 옵션 글자 | SUIT Regular `14px` / line-height `20px` | SUIT Regular `16px` / line-height `24px` | [SelectOption 6570:11270](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6570-11270) |
| OptionGroup 가로 패딩 | `8px` | `8px` | [OptionGroup 7984:8451](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7984-8451) |
| OptionGroup 모서리 | `4px` | `4px` | [OptionGroup 7984:8451](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7984-8451) |
| OptionGroup 옵션 수 변형 | `2`, `4`, `6`, `10` | `2`, `4`, `6`, `10` | [OptionGroup 7984:8451](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7984-8451) |
| 옵션 목록 최대 높이 | `320px`, 초과 시 내부 스크롤 | `320px`, 초과 시 내부 스크롤 | 프로젝트 CSS 기준 |

## 4. 상태

### SelectField

| 상태 | 상태 의미 | 표시 |
|---|---|---|
| `Inactive` | 선택되지 않은 상태(빈 칸) | placeholder와 기본 테두리 |
| `Default` | 입력이 완료된 상태 | 흰 배경과 기본 테두리 |
| `Focused` | 선택되었거나 입력 중인 상태(옵션 목록을 열었거나 조작 중) | 2px 브랜드 테두리, 바깥 outline 없음. 옵션 목록이 열린 동안에도 유지 |
| `Error` | 에러 | 2px 위험 테두리와 오류 안내 |
| `Disabled` | 비활성화 | 비활성 배경과 테두리 |
| `ReadOnly` | 값은 보이지만 수정할 수 없는 상태 | 비활성 배경, 읽을 수 있는 값 대비 |

Figma 출처: [SelectField 53:698](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=53-698)

### SelectOption

| 상태 | 선택 여부 | 표시 |
|---|---|---|
| `Default` | 미선택 | 기본 표면 |
| `Default` | 선택 | 선택 틴트와 선택 표시 |
| `Hover:Active` | 미선택·선택 | 포인터/눌림 강조 |
| `Diabled` | 미선택·선택 | 비활성 표현, 선택 불가 |

Figma 원문 `Diabled`는 문서와 클래스에서 표준 이름 `Disabled`로 정규화한다. 출처: [SelectOption 6570:11270](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6570-11270)

## 5. 토큰 매핑

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---|---|---|
| `border/radius/radius1` | `4px` | SelectField와 옵션 행 모서리 | SelectField `53:698`, SelectOption `6570:11270` |
| `spacing/12` | `12px` | SelectField 좌우 패딩, 옵션 왼쪽 패딩 | SelectField `53:698`, SelectOption `6570:11270` |
| `spacing/8` | `8px` | PC SelectField 세로 패딩, 옵션 행 양 끝 여백, OptionGroup 패딩 | Figma 구성 요소 3종 |
| `color/bg/primary` | `#FFFFFF` | 기본 필드·옵션 배경 | Figma 구성 요소 3종 |
| `color/bg/disabled` | `#EEEEEE` | 비활성 필드·옵션 배경 | SelectField `53:698`, SelectOption `6570:11270` |
| `color/bg/primitive/selected` | `#EFF1FD` | 현재 선택된 옵션 | SelectOption `6570:11270` |
| `color/border/primitive/primary` | `#323DA3` | 포커스 테두리 | SelectField `53:698` |
| `color/border/danger` | `#E53935` | 오류 테두리 | SelectField `53:698` |

## 6. PC / 모바일(≤1024) 차이

| 구분 | PC (≥1025px) | 모바일 (≤1024px) | 근거 |
|---|---|---|---|
| SelectField | 높이 40, 14px | 높이 48, 16px | `CLAUDE.md` 3-0, 3-2 |
| SelectOption | 높이 36, 14px | 높이 44, 16px | `CLAUDE.md` 3-0 |
| 일반 옵션 목록 | 트리거에 맞춰 드롭다운으로 표시 | 단일 선택 시트로 표시 | `CLAUDE.md` 3-3, 3-7 |
| 목록 너비 | 화면 컴포넌트 배치에 맞춰 설정 | 모바일 드롭다운은 트리거와 같은 좌우 폭 | `CLAUDE.md` 3-5 |

모바일에서 옵션이 길어지면 바텀시트로 연다. 바텀시트 안의 SelectField를 조작할 때는 원래 시트 대신 옵션 시트를 열고, 선택 완료 또는 닫기 후 원래 시트로 돌아간다.

## 7. 사용 규칙

1. 라벨은 어떤 값을 선택하는지 설명하고, 현재 선택값과 placeholder를 혼동하지 않게 한다.
2. 기본값이 정해져 있으면 목록을 열 때 해당 옵션을 미리 선택 표시한다.
3. 단일 선택 목록에서는 한 번에 하나만 선택한다. 선택 행에 틴트와 체크 등으로 선택 상태를 분명히 표현한다.
4. Disabled 옵션은 선택할 수 없게 하고, 비활성 이유가 필요한 경우 목록 주변에 안내한다.
5. 옵션 목록은 트리거의 선택 범위와 연결해 키보드·터치로도 조작할 수 있게 한다. 호버에만 의존하지 않는다.
6. 모바일 바텀시트에서 옵션 시트를 열면 원래 시트를 중복 노출하지 않는다. 닫거나 선택 완료하면 원래 맥락으로 복귀한다.
7. 검색어로 결과를 찾아 고르는 동작은 단순 SelectOption 목록과 구분한다. 검색 시트에서는 입력하는 대로 결과를 갱신하고, 결과 선택 후 확인 동작을 활성화한다.
8. 오버레이는 한 번에 하나만 연다. 새 옵션 목록이나 시트가 열리면 기존 오버레이를 닫는다.

## 8. 사용 화면 예시

| 화면·목적 | 컴포넌트 | 예시 |
|---|---|---|
| 리스트 검색 조건 | SelectField + SelectOption | `수급자`, `연락처`, `주문번호` 중 조회 기준 선택 |
| 주문 상태 변경 | SelectField + 단일 선택 목록 | 현재값 `전체`를 선택 표시한 상태 목록 |
| 입력 바텀시트 내 선택 | SelectField + 옵션 시트 | 옵션 선택 후 `선택완료`를 눌러 입력 시트로 복귀 |
| 상품 검색 후 선택 | Textfield + 결과 OptionGroup | 가상 검색어 `보행 보조기`, 결과 선택 후 확인 |

## 9. 확인 필요

| 항목 | 내용 |
|---|---|
| 현재 확인 필요 없음 | `Disabled` 표준 표기와 320px 최대 높이·내부 스크롤을 문서 및 CSS에 반영했다. |

## CSS 클래스

옵션 목록은 트리거와 같은 `.ds-select` 안에 둔다. 목록은 320px에서 내부 스크롤되며 overflow가 보이는 모달 안에서도 잘리지 않도록 구성한다.

| 클래스 | 용도 |
|---|---|
| `.ds-select` | 필드와 옵션 목록의 위치 기준 |
| `.ds-select__trigger` | 현재 선택값을 보여 주는 버튼 |
| `.ds-select__list` | 내부 스크롤 옵션 목록 |
| `.ds-select__option` | 개별 옵션 |
| `.ds-is-readonly` | 읽기전용 표시용 클래스 |
| `.ds-is-error` | 오류 표시용 클래스 |
| `:focus-visible` | 키보드 포커스 상태 |
| `:disabled` | 비활성 상태 |
| `[aria-invalid="true"]` | 검증 오류 상태 |
| `[aria-expanded="true"]` | 옵션 목록이 열린 트리거의 포커스 테두리 표시 |
| `[aria-selected="true"]` | 선택된 옵션 |

## HTML 예시

```html
<div class="ds-select">
  <button class="ds-select__trigger" type="button" aria-haspopup="listbox" aria-expanded="true">
    <span>수급자</span><span aria-hidden="true">⌄</span>
  </button>
  <div class="ds-select__list" role="listbox" aria-label="검색 기준">
    <button class="ds-select__option" type="button" role="option" aria-selected="true">수급자</button>
    <button class="ds-select__option" type="button" role="option" aria-selected="false">연락처</button>
    <button class="ds-select__option" type="button" role="option" aria-selected="false">주문번호</button>
  </div>
</div>
```
