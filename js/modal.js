//! ================
/*
1. Створити модальне вікно яке буде відкриватися при кліку на кнопку всередині тега body Модальне вікно має закриватися при кліку на напівпрозорий оверлей, та на іконку хрестика всередині модалки
2. Додати в модалку логіку закриття при натисканні на кнопку **Escape**
*/

/*
1. Отримуємо рефси всіх елементів (кнопка відкрити, кнопка закрити, оверлей)
2. Вішаємо обробник подій по кліку на кнопку відкрити
    2.1. вішаємо на боді клас опен
3. Вішаємо обробник подій на крестик і на оверлей по кліку
    3.1. прибирати клас опен у боді
4. Вішаємо обробник подій на вікно по keydown
    4.1. Перевірка на клавішу, якщо це клавіша escape - то виклик ф-ції на закриття

*/
const refs = {
  overlay: document.querySelector(".overlay"),
  openModalBtn: document.querySelector(".open-modal-btn"),
  closeModalBtn: document.querySelector(".close-btn"),
};
const openClass = "open";

refs.openModalBtn.addEventListener("click", openModal);
refs.overlay.addEventListener("click", closeModal);
refs.closeModalBtn.addEventListener("click", closeModal);

function openModal() {
  document.body.classList.add(openClass);
  window.addEventListener("keydown", closeModalOnEsc);
}

function closeModal() {
  document.body.classList.remove(openClass);
  window.removeEventListenerEventListener("keydown", closeModalOnEsc);
}

function closeModalOnEsc(e) {
  if (e.key === "Escape") closeModal();
}
