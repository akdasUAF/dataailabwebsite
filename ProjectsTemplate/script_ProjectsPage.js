// Homepage Slideshow//
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlides() {
    slides.forEach((slide, index) => {
        slide.style.display = "none"; // 隐藏所有幻灯片
    });
    slideIndex = (slideIndex + 1) % slides.length; // 轮流显示幻灯片
    slides[slideIndex].style.display = "block";
}

// 每4秒切换一次图片
setInterval(showSlides, 4000);
//login page //
function validateName() {
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");
    const regex = /^[a-zA-Z]*$/;

    if (!regex.test(nameInput.value)) {
        nameError.style.display = "block";
        nameInput.style.borderColor = "red";
    } else {
        nameError.style.display = "none";
        nameInput.style.borderColor = "";
    }
}

// gallery page//
document.querySelectorAll("img[title]").forEach((img) => {
    img.addEventListener("mouseenter", function () {
        const tooltip = document.createElement("div");
        tooltip.className = "custom-tooltip";
        tooltip.textContent = img.getAttribute("title");
        document.body.appendChild(tooltip);

        const rect = img.getBoundingClientRect();
        tooltip.style.left = `${rect.left + rect.width / 2}px`;
        tooltip.style.top = `${rect.top - 40}px`;

        img.addEventListener("mouseleave", () => {
            tooltip.remove();
        });
    });
});
