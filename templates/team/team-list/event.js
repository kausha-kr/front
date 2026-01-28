const keywordTooltip = document.querySelector(".keyword-icon");
const tooltipBox = document.querySelector(".tooltip-div-section");

if (keywordTooltip && tooltipBox) {
    keywordTooltip.addEventListener("mouseenter", (e) => {
        tooltipBox.classList.add("active");
    });

    keywordTooltip.addEventListener("mouseleave", (e) => {
        tooltipBox.classList.remove("active");
    });
}

/* 
  [짝꿍 스타일 버전] 
  함수 하나씩 호출 안 하고, 목록을 쫙 뽑아서 한 방에 처리하는 방식입니다.
*/

// 1. 모든 버튼과 모든 박스를 찾는다!
// (클래스가 각자 달라서 콤마(,)로 다 적어줬습니다)
const filterSelectors = [
    ".button-selector-1",
    ".button-selector-2",
    ".button-selector-3",
    ".button-selector-4",
];
// 위에 적은 이름표들을 이용해서 실제 태그들을 다 찾아옵니다.
const allButtons = document.querySelectorAll(filterSelectors.join(","));
const allBoxes = document.querySelectorAll(".category-container");

// 2. 버튼들에게 "클릭하면 열려라" 명령 내리기 (forEach 반복문)
// 2. 버튼들에게 "클릭하면 열려라" 명령 내리기 (forEach 반복문)
allButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        // [중요] 만약 클릭한 곳이 "박스 안쪽"이면 버튼 클릭으로 치지 않음!
        if (e.target.closest(".category-container")) return;

        const myBox = button.querySelector(".category-container");

        // 1) 내 박스가 지금 열려있나? (확인)
        const isOpen = myBox.style.display === "flex";

        // 2) 일단 전부 다 닫아! (초기화)
        allBoxes.forEach((box) => {
            box.style.display = "none";
        });

        // 3) 아까 내가 닫혀있었다면 -> 나만 열어줘!
        if (!isOpen) {
            myBox.style.display = "flex";
        }
    });

    // 3. 내 박스 안쪽 클릭은 닫히지 않게 보호 (stopPropagation 대신 체크 로직으로 할 수도 있지만, 간단하게 이것만 살려둠)
    // 짝꿍 스타일대로 이것도 제거하고 아래 document 클릭에서 처리해도 됩니다.
    // 여기서는 버튼 루프 안에서 박스 이벤트도 같이 걸어줍니다.
    const myBox = button.querySelector(".category-container");
    const myItems = myBox.querySelectorAll(".category-body-input-wrap");

    // 항목 클릭 (active 토글)
    myItems.forEach((item) => {
        item.addEventListener("click", (e) => {
            // 박스가 닫히는 걸 막아야 하므로 이벤트 전파를 막거나, 아래 document 클릭 로직에서 처리
            // 여기서는 간단히 stopPropagation 없이 동작하도록 둠 (document 클릭 로직이 잘 막아주니까요)
            item.classList.toggle("active");
        });
    });
});

// 4. 바탕 화면 클릭 시 닫기 Logic (모아서 처리)
document.addEventListener("click", (e) => {
    // 내가 클릭한 곳이 버튼이나 박스 안쪽인지 검사
    const isInsideButton = e.target.closest(filterSelectors.join(","));
    const isInsideBox = e.target.closest(".category-container");

    // 엄한 데 클릭했으면 -> 다 닫아!
    if (!isInsideButton && !isInsideBox) {
        allBoxes.forEach((box) => (box.style.display = "none"));
    }
});

/* 
// [이전 버전: 함수로 만들어서 쓰던 방식] -> 주석 처리됨
function setupDropdown(buttonSelector) {
    const button = document.querySelector(buttonSelector);
    if (!button) return;
    const box = button.querySelector(".category-container");
    if (!box) return;

    button.addEventListener("click", () => {
        // 내꺼가 닫혀있으면 -> 다른 애들 다 닫고 나를 연다
        if (box.style.display !== "flex") {
            closeAllDropdowns();
            box.style.display = "flex";
        } else {
            // 내꺼가 열려있으면 -> 닫는다
            box.style.display = "none";
        }
    });

    // 박스 클릭 시 닫히는 거 방지 (이건 그대로 유지 or 로직 통합 가능하지만 일단 둠)
    box.addEventListener("click", (e) => {
        e.stopPropagation();
        // ☝️ 박스 안쪽 클릭은 여전히 보호해야 함 (안 그러면 문서 클릭으로 인식돼서 닫힘)
    });

    // 3. 항목 클릭하면 토글 (이전과 동일)
    const items = box.querySelectorAll(".category-body-input-wrap");
    items.forEach((item) => {
        item.addEventListener("click", () => {
            item.classList.toggle("active");
        });
    });
}

function closeAllDropdowns() {
    const allDropdowns = document.querySelectorAll(".category-container");
    allDropdowns.forEach((dropdown) => {
        dropdown.style.display = "none";
    });
}

// 화면 아무데나 클릭하면 드롭다운 닫기 (업그레이드 버전!)
document.addEventListener("click", (e) => {
    // 1. 내가 클릭한 곳(target)이 "버튼"이나 "박스" 안쪽이 아니라면? (즉, 완전 딴 곳이라면)
    const isClickInsideButton = e.target.closest("[class^='button-selector-']"); // 버튼 안쪽인가?
    const isClickInsideBox = e.target.closest(".category-container"); // 박스 안쪽인가?

    // 둘 다 아니라면 (엄한 데 클릭했으면) -> 다 닫아라!
    if (!isClickInsideButton && !isClickInsideBox) {
        closeAllDropdowns();
    }
});

// Setup dropdowns
setupDropdown(".button-selector-1");
setupDropdown(".button-selector-2");
setupDropdown(".button-selector-3");
setupDropdown(".button-selector-4");
*/
