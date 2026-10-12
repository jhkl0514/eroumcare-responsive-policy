# 이로움Care Design System

Figma 출처: 파일 `64Q1Re56aiAA8Al89pqjnV` / 노드 ID `36:11730` / 마지막 확인일 `2026-10-12`

이 문서는 디자이너와 개발자가 함께 사용하는 이로움Care 디자인 시스템 문서의 시작점이다. 구현 규칙은 프로젝트 확정값을 기준으로 하고, Figma 라이브러리의 원본 노드와 변수 출처를 각 문서에 연결한다.

## 문서

| 문서 | 다루는 내용 |
|---|---|
| [Foundations](./foundations.md) | 원본·시맨틱 컬러, 타이포, 간격, 모서리, 그림자, 브레이크포인트 |
| [Button](./components/button.md) | 버튼 종류, 크기, 상태, 배치 규칙 |
| [Input](./components/input.md) | Textfield, TextAreaField, 입력 상태와 키보드 규칙 |
| [Select](./components/select.md) | SelectField, SelectOption, OptionGroup, 선택 흐름 |
| [Modal](./components/modal.md) | 모달 크기와 모바일 팝업 형태 선택 |
| [Status Chip](./components/status-chip.md) | 구입·대여·회수·A/S·반품 상태 표시 |

## 프로젝트 기준

| 항목 | 기준 |
|---|---|
| 반응형 분기 | PC는 `1025px 이상`, 모바일은 `1024px 이하` |
| 최소 모바일 폭 | `360px`; 콘텐츠 최소 너비는 `320px` |
| 입력 컴포넌트 | Textfield·SelectField는 PC 40px, 모바일 48px. SelectOption은 PC 36px, 모바일 44px |
| 버튼 | SM 36px / MD 48px는 PC·모바일 공통. 화면 하단 고정과 BottomSheet 하단 액션만 LG 54px |
| 모달 폭 | 480 / 600 / 800px를 기준으로 `min(기준 폭, 화면 폭 - 40px)` 적용 |
| 카드 목록 | 카드 사이 간격 12px, 모서리 8px, 그림자 사용 |

세부 값과 Figma 출처는 [Foundations](./foundations.md) 및 각 컴포넌트 문서를 따른다. 위 기준은 `CLAUDE.md`의 확정 규칙을 옮긴 요약이다.

## 출처와 표기

- Figma DS 라이브러리: [64Q1Re56aiAA8Al89pqjnV](https://www.figma.com/design/64Q1Re56aiAA8Al89pqjnV?node-id=36-11730)
- 프로젝트 기준: `CLAUDE.md` 3장·5장
- 참고 링크: [uxuithkc.netlify.app/framework](https://uxuithkc.netlify.app/framework) (접근 불가, 추후 확인)
- Figma 속성명·컴포넌트명은 문서에서 표준화해 쓸 수 있으며, 원본과 다른 이름이나 값은 해당 문서에 원문과 함께 기록한다.
- 확정되지 않았거나 출처 간 차이가 남은 내용은 각 문서의 `확인 필요`에 기록한다.
- 개발 미사용으로 삭제 예정인 항목은 승인된 결정 번호와 문서 처리 기준에 따라 본문 스펙에서 제외한다.
