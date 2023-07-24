//! ================

// Створити калькулятор вартості продукту в залежності від ціни. При роботі з подіями використовувати делагування.

// При змінні данних в інпуті №1 чи №2 автоматично має перераховуватися загальна вартість

// Завжди має відображатися валюта - гривня

// Загальна сума відображається з копійками (2 знаки після коми)

// В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.

// Кольорова підказка має змінювати своє значення при перетягувані повзунка.

// В інпуті №2 мін і мах поріг встановлюєте самостійно.

// При завантаженні сторінки сприпт має автоматично розрахувати вартість на основі даних за замовчуванням які ви встановите в розмітці.

/*
1. Отримати всі рефси (форма, спан, тотал)
2. Повісити слухач подій по інпуту на всю форму
3. Реалізувати ренж
  3.1. Отримувати value ренжу і записувати його у спан
4. Створимо обʼєкт у якому збережемо ціну і кількість кг + додамо метод для підрахунку фінальної вартості (ціна * кг)
5. Фінальну вартість записати в параграф
*/
const refs = {
  form: document.querySelector(".form"),
  amount: document.querySelector(".amount"),
  total: document.querySelector(".total"),
};
const data = {
  price: 0,
  amount: 0,
  calculatorPrice() {
    return (this.price * this.amount).toFixed(2);
  },
};

refs.form.addEventListener("input", onInput);

fillData();
setAmount();
displayTotal();

function onInput({ target }) {
  if (target.name === "quantity") {
    setAmount();
  }
  fillData();
  displayTotal();
}

function displayTotal() {
  refs.total.textContent = `${data.calculatorPrice()} грн.`;
}

function fillData() {
  data.price = refs.form.elements.price.value;
  data.amount = refs.form.elements.quantity.value;
}
function setAmount() {
  refs.amount.textContent = refs.form.elements.quantity.value;
}
