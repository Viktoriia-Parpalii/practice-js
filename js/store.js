// *************Практика*************** \\
// Для практичного завдання використаємо ES6 модулі
// Застосувати готові стилі з файлу style.css
// Потрібно створити інтернет-магазин в якому буде 2 сторінки.

// Сторінка Home має:
// 1 Містити картки товарів (їх можна знайти в файлі products.json)
// (приклад однієї картки https://prnt.sc/klV2uzLIcG8w)
// 2 На списку товарів реалізовано делегування подій на додавання товару в кошик
// 3 Для додавання товару в кошик використовуй LS
// 4 Під час додавання контролюй кількість доданих товарів, для цього створи в об'єкті доданого товару новий ключ quantity

// Сторінка Checkout має:
// 1 Список карток доданих товарів, кожна картка має містити кількість куплених товарів та загальна вартість за даний товар.
// (приклад однієї картки https://prnt.sc/ssZA4rzw1x9L)
// 2 Повідомлення про загальну вартість покупки, якщо кошик порожній, то повідомлення "Your basket is empty"
// 3 Кнопку для очищення кошика, після натискання на неї всі товари видаляються, а користувача перенаправляємо на сторінку Home
import instruments from "/js/products.json" assert { type: "json" };

const productsList = document.getElementById("productsList");
const PRODUCTS_LS_KEY = "checkout";

function createMarkup(arr) {
  return arr.reduce(
    (markap, { id, img, price, name, description }) =>
      markap +
      `<li data-id="${id}" class="product-card" id="product">
  <img src="${img}" alt="${name}" class="product-img"/>
  <h2 class="product-title">${name}</h2>
  <p class="product-description">${description}</p>
  <p class="product-price">${price} грн</p>
  <button class="product-add-btn" id="addBtn" type="button">Add to basket</button>
</li>   
  `,
    ""
  );
}
productsList.insertAdjacentHTML("beforeend", createMarkup(instruments));
productsList.addEventListener("click", hendleAdd);

function hendleAdd(e) {
  if (e.target.id !== "addBtn") {
    return;
  }

  const product = e.target.closest("#product");
  const productId = Number(product.dataset.id);
  const currentProduct = instruments.find(({ id }) => id === productId);
  const products = JSON.parse(localStorage.getItem(PRODUCTS_LS_KEY)) ?? [];
  const checkoutProductId = products.findIndex(({ id }) => id === productId);

  if (checkoutProductId === -1) {
    currentProduct.quantity = 1;
    products.push(currentProduct);
  } else {
    products[checkoutProductId].quantity += 1;
  }

  localStorage.setItem(PRODUCTS_LS_KEY, JSON.stringify(products));
}
