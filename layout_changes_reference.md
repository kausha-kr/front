# 추가된 레이아웃 컴포넌트 참조

이 문서는 `team-list.html` 레이아웃 리팩토링을 위해 추가된 코드를 설명합니다. **전체 페이지 구조나 위치를 조정해야 할 경우 이 섹션들을 수정하세요.**

## CSS 변경 사항 (`teamlist.css`)

`teamlist.css` 하단에 다음 클래스들을 추가했습니다.

### `.main-border`

- **용도**: 페이지의 메인 외부 컨테이너입니다.
- **수정할 주요 속성**:
    - `margin-left`: 사이드바 여백 조정 (현재 `297px`).
    - `width`: 콘텐츠 영역의 고정 너비 (현재 `1614px`).
    - `background-color`: 페이지 배경색 (현재 `#f1f4f8`).

### `.div-header`

- **용도**: 메인 보더 내의 상단 헤더 영역입니다.
- **수정할 주요 속성**:
    - `height`: 헤더 높이 (현재 `52px`).
    - `border-bottom`: 구분선 스타일.

### `.div-container`

- **용도**: 메인 콘텐츠를 포함하는 스크롤 가능한 영역입니다.
- **수정할 주요 속성**:
    - `padding`: 내부 콘텐츠 주변 여백 (현재 `16px`).

### `.div-content-wrap`

- **용도**: 실제 팀 리스트와 필터를 감싸는 래퍼입니다.
- **수정할 주요 속성**:
    - `max-width`: 콘텐츠 너비 제한 (현재 `1000px`).

## HTML 구조 (`team-list.html`)

외부 구조가 다음과 같이 변경되었습니다:

```html
<main class="main-border">
    <div class="div-header"></div>
    <div class="div-container">
        <div class="div-content-wrap">
            <!-- 기존 콘텐츠가 여기 들어갑니다 -->
        </div>
    </div>
</main>
```
