# AGENTS.md — Codex 작업 규칙

이 저장소는 Claude Code와 Codex가 나눠서 작업한다. Codex는 아래 규칙을 지킨다.

- **수정 범위**: `design-system/` 폴더만 수정한다. 그 밖의 파일(`CLAUDE.md`, `index.html`, `prototypes/`, `tools/` 등)은 읽기만 한다
- **CSS도 담당**: `design-system/css/`(`tokens.css`, `components.css`)도 Codex가 관리한다
- **브랜치·폴더**: `ds-docs` 브랜치에서만 작업한다. 작업 폴더는 전용 폴더 `../eroumcare-ds`(이 저장소의 `ds-docs` 작업 트리)를 쓴다
- **금지**: `main`에 푸시·머지하지 않는다. `main`으로 합치는 일은 사용자가 한다
- **커밋**: 명시한 파일만 `git add <파일>`로 올린다(`git add .`·`git add -A` 금지)
- 값(브레이크포인트·모달 폭·버튼·상태칩·카드 등)이 `CLAUDE.md` 3장·5장과 다르면 고치지 말고 사용자에게 알린다
