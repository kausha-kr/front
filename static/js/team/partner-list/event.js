// 키워드 툴팁
const keywordIcon = document.querySelector(".keyword-icon");
const tooltipBox = document.querySelector(".tooltip-div-section");

if (keywordIcon && tooltipBox) {
    keywordIcon.addEventListener("mouseenter", (e) => {
        tooltipBox.classList.add("active");
    });
    keywordIcon.addEventListener("mouseleave", (e) => {
        tooltipBox.classList.remove("active");
    });
}

/* =========================================
   드롭다운(Dropdown) 제어 로직
   ========================================= */

// 1. 모든 관련 요소 미리 선택 (Global Scope)
const buttons = document.querySelectorAll("[class^='button-selector-']");
const allDropdowns = document.querySelectorAll(".category-container");

// 2. 각 버튼에 클릭 이벤트 연결
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // 드롭다운 내부 클릭은 무시 (드롭다운이 닫히지 않도록)
        if (e.target.closest(".category-container")) {
            return;
        }

        const myDropdown = button.querySelector(".category-container");
        const wasOpen = myDropdown.classList.contains("active");

        // (1) 모든 드롭다운 닫기 (초기화)
        allDropdowns.forEach((dropdown) => {
            dropdown.classList.remove("active");
        });

        // (2) 내가 아까 닫혀있었다면 -> 열기
        if (!wasOpen) {
            myDropdown.classList.add("active");
        }
    });
});

// 3. 외부 클릭 시 닫기 (Outside Click Logic)
document.addEventListener("click", (e) => {
    // 버튼 영역(헤더)이나 드롭다운 내부를 클릭한 게 아니라면 -> 모두 닫기
    const isInsideButton = e.target.closest(".teamlist-header-inner-section");
    const isInsideDropdown = e.target.closest(".category-container");

    if (!isInsideButton && !isInsideDropdown) {
        allDropdowns.forEach((dropdown) => {
            dropdown.classList.remove("active");
        });
    }
});

/* =========================================
   드롭다운 항목 선택 로직
   ========================================= */

const dropdownItems = document.querySelectorAll(".category-body-input-wrap");

dropdownItems.forEach((item) => {
    item.addEventListener("click", (e) => {
        item.classList.toggle("active");
    });
});

/* =========================================
   정렬 카테고리 선택 로직
   ========================================= */

const CategorySelector = document.querySelectorAll(
    ".list-category-left-section > div",
);
CategorySelector.forEach((selector) => {
    selector.addEventListener("click", (e) => {
        CategorySelector.forEach((btn) => {
            btn.classList.remove("active");
        });

        const targetButton = e.target.closest("div");

        if (targetButton) {
            targetButton.classList.add("active");
        }
    });
});
