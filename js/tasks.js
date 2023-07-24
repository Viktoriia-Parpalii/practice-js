// *Example 8 - if...else та логічні оператори
// Напиши скрипт який виводитиме в консоль браузера рядок залежно від значення змінної hours.

// Якщо значення змінної hours:

// менше 17, виводь рядок "Pending"
// більше або дорівнює 17 і менше або дорівнює 24, виводь рядок "Expires"
// більше 24 , виводь рядок "Overdue"

// const hours = 10;

// if (hours < 17) {
//     console.log("Pending")
// } else if (hours >= 17) {
//      console.log("Expires")
// } else if (hours > 24) {
//     console.log("Overdue")
// }
// *Example 2 - Відображення часу (if...else)
// Напиши скрипт для відображення годин та хвилин у консолі браузера у вигляді рядка формату "14 г. 26 хв.".
// Якщо значення змінної minutes дорівнює 0, то виводь рядок "14 г.", без хвилин.
// const hours = 14;
// const minutes = 26;
// let timestring;

// if (minutes > 0) {
//   timestring = `${hours} г. ${minutes} хв.`;
// } else {
//   timestring = `${hours} г.`;
// }
// console.log(timestring);
// *Example 5 - Форматування посилання (endsWith)
// Напиши скрипт який перевіряє чи закінчується значення змінної link символом /. Якщо ні, додай до кінця значення link цей символ. Використовуй конструкцію if...else.

// let link = 'https://my-site.com/about';
// // Пиши код нижче за цей рядок
// if (link===link.endsWith("/"){
// }) else (
//     console.log('https://my-site.com/about/');
// )
// Пиши код вище за цей рядок
// console.log(link);

// * 1. Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const text = prompt("Яка офіційна назва JavaScript?");
// const textLower = text.toLowerCase();
// console.log(textLower);
// if (text === "ECMAScript") {
//     alert("Вірно!")
// } else {
//     alert("Не знаєте? ECMAScript!")
// }

// * 2. Напишіть цикл, який виводить в консоль
//числа від max до min
// const max = 50;
// const min = 23;
// for (let i = max; i>= min;  i-= 1){
//     console.log(i);
// }
// * 3. Виведіть в консоль всі непарні числа від min до max
// const max = 68;
// const min = 23;
// for (let i = min; i <= max; i += 1){
//     if (i%2 !== 0) {
//         console.log(i)
//     }
// }

//*4. За допомогою циклу for додайте всі парні числа от min до max
// const max = 50;
// const min = 0;
// let total = 0;
// for (let i = min; i <= max; i += 1){
//     if (i % 2 === 0) {
//         total += i;
//     }
// } console.log(`Сума всіх парних чисел = ${total}`);

//*5. Напишіть код, який буде запитувати
//логін з допомогою prompt і виводити результат
//в консоль браузера

//Якщо користувач вводить "Admin"
//то prompt запитує пароль і якщо
// пароль не ввели або натиснули кнопку Esc треба показати alert "Cancel"

//Пароль перевіряти так:
//Якщо ввели віриний пароль "I am a boss",
//тоді показати alert "Hello, Boss!"
//інакше показати alert " Wrong password"

//Якщо користувач вводить невірний пароль (не "I am a boss")
// тоді показати alert "I don't know you"(я вас не знаю)

// const userLogin = prompt("Enter your login");
// console.log(userLogin);
// if (userLogin === "Admin") {
//     const userPassword = prompt("Enter your password");
//     if (userPassword) {
//        if (userPassword === "I am a boss") {
//       alert("Hello, Boss!")
//     } else  {
//         alert("Wrong password")
//     }
//     }
//     else { alert("Cancel") }

//  } else { alert("I do not know you"); }

// * 5. При завантаженні сторінки користувачу пропонується
//в prompt ввести число. Ввод додається до значення
//змінної total.
//Операція вводу числа продовжується до тих пір,
//поки користувач не натисне кнопку Cancel в prompt.
//Після того як користувач закінчив введення чисел і натиснув на
//кнопку Cancel, показати alert з текстом  "Загальна сумма введених чисел дорівнює - [число]."
//Робити перевірку, що користувач ввів саме число не потрібно.
// let userNumber = Number(prompt("Введіть число"));
// let total = 0;
// let check = false;
// console.log(userNumber);
// do {
//   if (userNumber) {
//     total += userNumber;
//     userNumber = Number(prompt("Введіть ще число"));
//     check = true;
//   } else {
//     alert(`Загальна сумма введених чисел дорівнює - ${total}.`);
//     check = false;
//   }
// } while (check);

// ? Автоперевірка 2
//*32/

// function includes(array, value) {
//   // Change code below this line
//   for (const word of array) {
//     if (word === value) {
//       return true;
//     }
//   } // Change code above this line
//   return false;
// }
// console.log(
//   includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")
// );

//? Автоперевірка 3
// *32
// function addOverNum(firstNumber, ...args) {
//   let total = 0;
//   for (const arg of args) {
//     if (arg > firstNumber) {
//       console.log(arg);
//       total += arg;
//     }
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));

// *35
// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//     const indexOldName = this.books.indexOf(oldName);
//     this.books.splice(indexOldName, 1, newName);
//     return this.books;
//     // Change code above this line
//   },
// };
// // console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom', 'Dune"));

// *36
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     const velues = this.potions;
//     console.log(velues);
//     return velues;
//   },
//   // Change code above this line
// };

// *39
// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   removePotion(potionName) {
//     // Change code below this line
//     const indexPotion = this.potions.indexOf(potionName);
//     console.log(indexPotion);
//     this.potions.splice(indexPotion, 1);

//     // Change code above this line
//   },
// };
// *41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (let i = 0; i < this.potions.length; i += 1) {
//       if (this.potions[i] === potionName) {
//         this.potions.splise(i, 1);
//         break;
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         potion.name === newName;
//         break;
//       }
//     }
//   },
//   // Change code above this line
// };

// *1
// Напиши скрипт, который для объекта user,
//последовательно:
//1 добавит поле mood со значением 'happy'
//2 заменит hobby на 'skydiving'
//3 заменит значение premium на false
//4 выводит содержимое объекта users в формате
//ключ:значение используя Object.keys() и for...of
// const user = {
//   name: "John",
//   age: 20,
//   hobby: "tenis",
//   premium: true,
// };
// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;

// console.log(user);

// const userArray = Object.keys(user);
// console.log(userArray);

// for (const key of userArray) {
//   console.log(`${key}: ${user[key]}`);
// }
// *2
// У нас есть объект, в котором хранятся зарплаты нашей команды
//Напишите код для суммирования всех зарплат и
//сохраните его результат в переменной sum.
//Если объект salaries пуст, то результат должен быть 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };
// let sum = 0;
// const sumSalaries = Object.values(salaries);

// for (const value of sumSalaries) {
//   sum += value;
// }
// console.log(sum);

// *3
// Напишите ф-цию calcTotalPrice,
//которая принимает массив объектов и
//строку с названием камня.
//Функция считает и возвращает общую стоимость камней
//с именем, ценой и количеством из объекта

// const stonesData = [
//   { name: "Изумруд", price: 1300, quantity: 4 },
//   { name: "Бриллиант", price: 2700, quantity: 6 },
//   { name: "Сапфир", price: 400, quantity: 7 },
//   { name: "Щебень", price: 150, quantity: 100 },
//   { name: "Аметист", price: 3450, quantity: 5 },
//   { name: "Бирюза", price: 2500, quantity: 9 },
// ];
// function calcTotalPrice(array, stoneName) {
//   for (const stone of array) {
//     if (stoneName === stone.name) {
//       return stone.price * stone.quantity;
//     }
//   }
// }

// console.log(calcTotalPrice(stonesData, "Бирюза"));
