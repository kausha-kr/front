// Verified Badge Tooltip Logic
document.addEventListener("DOMContentLoaded", () => {
    const badgeIcon = document.querySelector(".profile-logo-svg");
    const badgeTooltip = document.querySelector(".badge-background-text");

    if (badgeIcon && badgeTooltip) {
        badgeIcon.addEventListener("mouseenter", () => {
            badgeTooltip.style.visibility = "visible";
            badgeTooltip.style.opacity = "1";
        });

        badgeIcon.addEventListener("mouseleave", () => {
            badgeTooltip.style.visibility = "hidden";
            badgeTooltip.style.opacity = "0";
        });
    }
});
