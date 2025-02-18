document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", function () {
        const answer = this.nextElementSibling;
        const icon = this.querySelector(".toggle-icon");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.textContent = "+";
        } else {
            answer.style.display = "block";
            icon.textContent = "-";
        }
    });
});
