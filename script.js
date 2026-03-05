const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {

    entries.forEach(entry => {

        if (!entry.isIntersecting) {
            return;
        }

        entry.target.classList.add('visible');
        observer.unobserve(entry.target);

    });

}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});



let visits = localStorage.getItem("visits");

if (!visits) {
    visits = 0;
}

visits++;

localStorage.setItem("visits", visits);

const visitEl = document.getElementById("visitCount");

if (visitEl) {
    visitEl.textContent = visits;
}

const aiBtn = document.getElementById("aiBtn");
const aiText = document.getElementById("aiText");

const tips = [
    "Наука починається там, де з’являється питання.",
    "Не все, що складне, є неможливим.",
    "Помилка — це не провал, а дані для аналізу.",
    "Цікавість — головне паливо науки.",
    "Сумнів — ознака мислячої людини.",
    "Великі відкриття починались з маленьких ідей.",
    "ШІ підсилює розум, але не замінює його.",
    "Експеримент — це чесна розмова з реальністю.",
    "Наука не дає відповідей без перевірки.",
    "Майбутнє створюють ті, хто вчиться сьогодні.",
    "Не бійся ставити дивні питання.",
    "Кожна теорія колись була фантазією.",
    "Дані важливіші за здогадки.",
    "Справжні знання не бояться критики.",
    "Прогрес народжується з терпіння.",
    "Навіть помилка може привести до відкриття.",
    "Наука — це шлях, а не кінцева точка.",
    "Думай повільно, перевіряй уважно.",
    "Логіка — твій найкращий інструмент.",
    "Чим більше знаєш, тим більше питань виникає."

];

if (aiBtn) {

    aiBtn.onclick = function () {

        const random = Math.floor(Math.random() * tips.length);

        aiText.textContent = tips[random];

    }

}
