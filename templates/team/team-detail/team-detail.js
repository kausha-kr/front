// Feed "더보기" functionality
document.addEventListener("DOMContentLoaded", function () {
    const feedTextWrappers = document.querySelectorAll(
        ".feed-content-text-wrapper",
    );

    feedTextWrappers.forEach((wrapper) => {
        const seemoreBtn = wrapper.parentElement.querySelector(
            ".feed-content-seemore",
        );

        // Check if text is clamped (overflow)
        if (wrapper.scrollHeight > wrapper.clientHeight) {
            if (seemoreBtn) {
                seemoreBtn.classList.add("visible");

                seemoreBtn.addEventListener("click", function () {
                    if (wrapper.classList.contains("expanded")) {
                        wrapper.classList.remove("expanded");
                        seemoreBtn.textContent = "더보기";
                    } else {
                        wrapper.classList.add("expanded");
                        seemoreBtn.textContent = "접기";
                    }
                });
            }
        }
    });
});
