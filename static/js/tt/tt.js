const buttonSelect1 = document.querySelector(".button-selector-1");
const modal = document.querySelector(".modal");
const modalList1 = document.querySelector(".modal-list1");
const modalList2 = document.querySelector(".modal-list2");
const checkIcon1 = document.querySelector(".modal-check-icon1");
const checkIcon2 = document.querySelector(".modal-check-icon2");
const modalSelect = document.querySelector(".modal-select");
const listCategorySelector3 = document.querySelector(
    ".list-category-selector3",
);
const listCategorySelector4 = document.querySelector(
    ".list-category-selector4",
);

modal.style.display = "none";

buttonSelect1.addEventListener("click", (e) => {
    if (modal.style.display === "none") {
        modal.style.display = "block";
    } else {
        modal.style.display = "none";
    }
});

modal.addEventListener("click", (e) => {
    e.stopPropagation();
});

modalList1.addEventListener("click", (e) => {
    if (checkIcon1.style.display === "none") {
        checkIcon1.style.display = "block";
    } else {
        checkIcon1.style.display = "none";
    }
});

modalList2.addEventListener("click", (e) => {
    if (checkIcon2.style.display === "none") {
        checkIcon2.style.display = "block";
    } else {
        checkIcon2.style.display = "none";
    }
});

modalSelect.addEventListener("mousedown", (e) => {
    modalSelect.style.transition = "transform 0.2s ease";
    modalSelect.style.transform = "scale(0.9)";
});
modalSelect.addEventListener("mouseup", () => {
    modalSelect.style.transition = "transform 0.3s ease";
    modalSelect.style.transform = "scale(1)";
});

listCategorySelector3.addEventListener("mousedown", (e) => {
    listCategorySelector3.style.transition = "transform 0.2s ease";
    listCategorySelector3.style.transform = "scale(0.9)";
});
listCategorySelector3.addEventListener("mouseup", () => {
    listCategorySelector3.style.transition = "transform 0.3s ease";
    listCategorySelector3.style.transform = "scale(1)";
});
listCategorySelector4.addEventListener("mousedown", (e) => {
    listCategorySelector4.style.transition = "transform 0.2s ease";
    listCategorySelector4.style.transform = "scale(0.9)";
});
listCategorySelector4.addEventListener("mouseup", () => {
    listCategorySelector4.style.transition = "transform 0.3s ease";
    listCategorySelector4.style.transform = "scale(1)";
});
