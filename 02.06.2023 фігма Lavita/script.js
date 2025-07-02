// For buttomn of Block 3

document.addEventListener("DOMContentLoaded", function() {
    const dropdownButtons = document.querySelectorAll(".dropdown-btn");

    dropdownButtons.forEach(button => {
        button.addEventListener("click", function() {
            const dropdownList = this.nextElementSibling;
            dropdownList.classList.toggle("show");
        });
    });

    // Закриваємо меню при кліку поза ним
    document.addEventListener("click", function (e) {
        if (!e.target.closest(".dropdown-btn")) {
            document.querySelectorAll(".dropdown-list").forEach(list => {
                list.classList.remove("show");
            });
        }
    });
});



