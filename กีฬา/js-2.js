document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    let isTransitioning = false;

    function nextSlide() {
        if (!isTransitioning) {
            isTransitioning = true;
            const currentSlide = slider.firstElementChild;
            slider.style.transition = "transform 0.5s ease-in-out";
            slider.style.transform = "translateX(-100%)";

            function handleTransitionEnd() {
                isTransitioning = false;
                slider.style.transition = "none";
                slider.appendChild(currentSlide);
                slider.style.transform = "translateX(0)";
                slider.removeEventListener('transitionend', handleTransitionEnd);
            }

            slider.addEventListener('transitionend', handleTransitionEnd);
        }
    }

    setInterval(nextSlide, 3000); // เปลี่ยนภาพทุก 3 วินาที
});