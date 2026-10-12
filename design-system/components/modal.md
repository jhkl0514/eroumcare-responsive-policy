# Modal

Figma 출처: 파일 `64Q1Re56aiAA8Al89pqjnV` / 노드 ID `6487:5122`, `6489:5807`, `7317:76226`, `7374:41582` / 마지막 확인일 `2026-10-12`

## 1. 개요 · 언제 쓰는지

Modal은 현재 화면 위에서 짧은 안내·확인·선택 또는 표가 포함된 정보를 보여줄 때 사용한다. 입력 키보드가 필요한 작업이나 내용이 길어 화면을 크게 차지하는 흐름은 모바일에서 BottomSheet 또는 별도 화면을 선택한다.

## 2. Figma 출처

| 컴포넌트·사례 | Figma 출처 | 설명 |
|---|---|---|
| `Modal` 및 `Part/Modal` | [Modal 6487:5122](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6487-5122) | 제목·버튼·슬롯과 모달 크기 샘플 |
| Modal 표현 변형 | [Modal 6489:5807](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6489-5807) | Modal, BottomSheet, InfoWindow 등 |
| 회수접수 취소 BottomSheet | [7317:76226](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7317-76226) | 모바일 입력형 팝업 사례 |
| 상품 변경 BottomSheet | [7374:41582](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=7374-41582) | 검색·선택 흐름 사례 |

## 3. 변형(variant) · 크기

### 형태 선택

| 형태 | 기준 | 사용 예 |
|---|---|---|
| Modal | 화면 중앙에 표시하는 안내·확인·선택 팝업 | 주문 불가 안내, 확인, 간단한 선택 |
| BottomSheet | 모바일 화면 아래에서 올라오는 패널 | 주소·사유·검색어 입력, 선택지가 긴 목록 |
| Option Sheet | 기존 BottomSheet를 대신해 여는 선택 목록 | 시트 안 SelectField 옵션 선택 |
| Full Screen | 입력 항목이 많아 시트 최대 높이를 넘는 흐름 | 새 화면으로 분리하는 긴 폼 |

### Modal 크기

| 크기 | 기준 너비 | 사용 기준 | 출처 |
|---|---:|---|---|
| SM | `340px` | 짧은 안내·확인 | 프로젝트 기준(CLAUDE.md, 2026-10-12 확정) |
| MD | `480px` | 안내·확인·입력·검색 | [Modal 6487:5122](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6487-5122), 프로젝트 기준(CLAUDE.md, 2026-10-12 확정) |
| LG | `600px` | 테이블 포함 | [Modal 6487:5122](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6487-5122), 프로젝트 기준(CLAUDE.md, 2026-10-12 확정) |
| XL | `800px` | 큰 테이블·계약서·문서 정보 포함 | [Modal 6487:5122](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6487-5122), 프로젝트 기준(CLAUDE.md, 2026-10-12 확정) |

## 4. 상태

| 상태 | 표시·동작 | 근거 |
|---|---|---|
| 열림 | 딤 배경 위 화면 정중앙에 표시 | `CLAUDE.md` 3-3 |
| 본문 스크롤 | 내용이 화면 안에 들어오지 않으면 모달에 최대 높이를 두고 내부 본문만 스크롤 | `CLAUDE.md` 3-3 |
| 닫힘 | 닫기 버튼, 바깥 영역 클릭, ESC로 닫기 | `CLAUDE.md` 3-3 |
| BottomSheet 입력 중 | 키보드 위에서 시트가 확장되며 본문은 필요할 때 스크롤 | `CLAUDE.md` 3-3, 3-5 |
| 중첩 팝업 | 한 번에 오버레이 하나만 표시. 새 팝업을 열면 기존 팝업을 닫음 | `CLAUDE.md` 3-3 |

## 5. 토큰 매핑

| 토큰명 | 값 | 용도 | Figma 출처 |
|---|---|---|---|
| `border/radius/radius1` | `4px` | 모달 기본 모서리 값으로 참조 | [Modal 6487:5122](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=6487-5122) |
| BottomSheet 상단 모서리 | `40px` | 모바일 시트 상단 좌우 모서리 | `CLAUDE.md` 3-5 |
| 내부 좌우 여백 | `20px` | 모달 본문과 버튼 영역 | `CLAUDE.md` 3-3 |
| Modal 버튼 높이 | `48px` | 모달 하단 액션 | `CLAUDE.md` 3-3, 3-4 |
| Modal 버튼 폭 | 기본 `150px`, 좁으면 비율 축소 | 모달 하단 액션 | `CLAUDE.md` 3-3 |
| 버튼 간격 | `12px` | 두 버튼 배치 | `CLAUDE.md` 3-3 |
| BottomSheet 버튼 높이 | `54px` | 모바일 시트 하단 액션 | `CLAUDE.md` 3-3, 3-4 |
| BottomSheet 버튼 영역 여백 | 위·아래 `32px` | 하단 액션 영역 | `CLAUDE.md` 3-5 |
| 오버레이 그림자 | `0 8px 24px rgba(0,0,0,.2), 0 0 4px rgba(0,0,0,.12)` | 팝업 계층 강조 | `CLAUDE.md` 3-5 |

## 6. PC / 모바일(≤1024) 차이

| 구분 | PC (≥1025px) | 모바일 (≤1024px) | 근거 |
|---|---|---|---|
| Modal 위치 | 화면 정중앙 | 화면 정중앙 | `CLAUDE.md` 3-3 |
| Modal 너비 | 지정 크기 340 / 480 / 600 / 800px | 지정 크기 이하의 가용 너비 | 프로젝트 기준(CLAUDE.md, 2026-10-12 확정) |
| 좌우 여백 | 지정 크기 기준 | 화면 양쪽 `20px` | `CLAUDE.md` 3-3 |
| 안내·확인만 | Modal | Modal | `CLAUDE.md` 3-3 |
| 선택만 | Modal | Modal, 선택지가 길면 BottomSheet | `CLAUDE.md` 3-3 |
| 텍스트·숫자·검색·주소·사유 입력 | Modal | BottomSheet. 다른 팝업 위의 짧은 입력은 예외적으로 Modal | `CLAUDE.md` 3-3 |
| 표 데이터 | Modal, 표에 가로 스크롤 허용 | Modal, 표에 가로 스크롤 허용 | `CLAUDE.md` 3-3 |
| Modal 버튼 | 높이 48, 기본 폭 150 | 높이 48, 모달 내부가 좁으면 같은 비율로 축소 | `CLAUDE.md` 3-3, 3-4 |

모달 폭에는 별도 미디어쿼리 구간을 두지 않는다. 지정된 너비보다 화면이 좁을 때 한 가지 폭 공식으로 줄인다.

## 7. 사용 규칙

1. 모달 크기는 내부 요소 수가 아니라 테이블(행·열 데이터) 포함 여부로 선택한다. 기준 너비는 SM 340px, MD 480px, LG 600px, XL 800px이다.
2. 모달은 딤 배경 위에 중앙 정렬한다. 본문이 넘치면 본문만 스크롤하고 타이틀·하단 액션은 유지한다.
3. 모바일에서 글자 입력이 필요한 팝업은 BottomSheet로 연다. 다른 모달 위에서 입력칸 하나와 취소·확인만 제공하는 짧은 입력은 예외다.
4. BottomSheet 높이는 고정 픽셀로 지정하지 않는다. 화면 높이에 맞춰 최대 높이를 정하고 본문만 스크롤한다.
5. BottomSheet 상단 모서리는 40px, 좌우 콘텐츠 여백은 20px로 둔다. 드래그 핸들 대신 타이틀과 닫기 버튼으로 시작한다.
6. 모달 버튼은 48px 높이, 기본 폭 150px, 간격 12px로 가운데 정렬한다. 폭이 부족하면 각 버튼이 같은 비율로 줄어든다.
7. 모달 버튼 하나의 라벨이 길면 텍스트에 맞춰 버튼을 늘리되 모달 안쪽 폭을 넘지 않게 한다. 두 버튼일 때는 라벨을 짧게 정리한다.
8. BottomSheet 하단 버튼은 54px 높이로 전체 너비를 나눠 쓴다. 버튼 영역 위·아래 여백은 32px이다.
9. SelectField를 BottomSheet 안에서 열면 Option Sheet가 원래 시트를 대신한다. 선택 완료 또는 닫기 후 원래 시트로 돌아간다.
10. 오버레이는 한 번에 하나만 보여 준다. ESC와 닫기 버튼 등 명시적인 닫기 동작을 제공한다.

## 8. 사용 화면 예시

| 화면·목적 | 형태 | 예시 |
|---|---|---|
| 주문 불가 안내 | Modal 480 | 안내 문구 + `확인` |
| 주문하기 확인 | Modal 480 | 요약 정보 + `취소` / `주문하기` |
| 대여 이력 조회 | Modal 600 또는 800 | 행·열 데이터, 좁은 화면에서 가로 스크롤 |
| 회수지 주소 수정 | 모바일 BottomSheet | 주소 입력 필드 + `저장` |
| 상품 변경 | 모바일 BottomSheet | 검색 필드 + 결과 OptionGroup + `확인` |
| 시트 안의 고정 옵션 선택 | Option Sheet | 단일 선택 목록 + `선택완료` |

## 9. 확인 필요

| 항목 | 내용 |
|---|---|
| 현재 확인 필요 없음 | 프로젝트 기준 모달 너비 340 / 480 / 600 / 800px을 적용했다. Figma 샘플 프레임은 구현 너비의 근거로 사용하지 않는다. |

## CSS 클래스

| 클래스 | 용도 |
|---|---|
| `.ds-modal-backdrop` | 딤과 중앙 정렬 컨테이너 |
| `.ds-modal` | 모달 본체. overflow를 visible로 유지해 자식 Select 목록이 잘리지 않게 함 |
| `.ds-modal--sm` | 340px 기준 폭 |
| `.ds-modal--md` | 480px 기준 폭 |
| `.ds-modal--lg` | 600px 기준 폭 |
| `.ds-modal--xl` | 800px 기준 폭 |
| `.ds-modal__header` | 제목과 닫기 버튼 영역 |
| `.ds-modal__title` | 모달 제목 |
| `.ds-modal__body` | 본문 영역 |
| `.ds-modal__footer` | 하단 액션 영역 |
| `.ds-modal__close` | 닫기 버튼 |
| `.ds-bottom-sheet` | 모바일 BottomSheet 본체 |
| `.ds-bottom-sheet__body` | 시트 본문 |
| `.ds-bottom-sheet__footer` | 시트 하단 액션 영역 |

## HTML 예시

```html
<div class="ds-modal-backdrop">
  <section class="ds-modal ds-modal--sm" role="dialog" aria-modal="true" aria-labelledby="order-dialog-title">
    <header class="ds-modal__header">
      <h2 class="ds-modal__title" id="order-dialog-title">주문을 진행할까요?</h2>
      <button class="ds-modal__close" type="button" aria-label="닫기">×</button>
    </header>
    <div class="ds-modal__body">주문 정보를 확인해 주세요.</div>
    <footer class="ds-modal__footer">
      <button class="ds-btn ds-btn--outline ds-btn--md" type="button">취소</button>
      <button class="ds-btn ds-btn--primary ds-btn--md" type="button">확인</button>
    </footer>
  </section>
</div>
```
