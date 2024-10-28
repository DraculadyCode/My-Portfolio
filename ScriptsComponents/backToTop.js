document.addEventListener("DOMContentLoaded", () => {
    const backToTopBtn = document.getElementById("backToTopBtn");
    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            window.scrollTo({
                top: 0,
                behavior: "smooth" // Smooth scroll effect
            });
        });
    }
});
