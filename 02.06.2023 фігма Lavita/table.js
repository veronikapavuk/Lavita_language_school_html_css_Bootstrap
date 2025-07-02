document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".dropdown-list a"); // Отримуємо всі посилання
    const tableContainer = document.getElementById("table-container"); // Знаходимо таблицю

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Відключаємо перехід за посиланням

            tableContainer.style.display = "block"; // Показуємо таблицю

            // Плавний скрол до таблиці
            tableContainer.scrollIntoView({ behavior: "smooth" });
        });
    });
});
