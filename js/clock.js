const refs = {
  day: document.querySelector(".date-day"),
  date: document.querySelector(".date"),
  month: document.querySelector(".date-month"),
  year: document.querySelector(".date-year"),
  digitalClock: document.querySelector(".digital-clock"),
  seconds: document.querySelector(".clock-seconds__arrow"),
  minutes: document.querySelector(".clock-minutes__arrow"),
  hours: document.querySelector(".clock-hours__arrow"),
};
const arrDay = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "П`ятниця",
  "Субота",
];

const namesOfMonth = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];

setInterval(() => {
  const currentDate = new Date();
  const day = currentDate.getDay();
  const date = currentDate.getDate();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const time = currentDate.toLocaleTimeString("uk-UA");

  refs.day.textContent = arrDay[day];
  refs.date.textContent = date;
  refs.month.textContent = namesOfMonth[month];
  refs.year.textContent = year;
  refs.digitalClock.textContent = `Поточний час: ${time}`;

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const secondsDeg = (360 / 60) * seconds;
  const minutesDeg = (360 / 60) * minutes;
  const hoursDeg = (360 / 12) * hours + (360 / 12 / 60) * minutes;

  refs.seconds.style.transform = `rotate(${secondsDeg}deg)`;
  refs.minutes.style.transform = `rotate(${minutesDeg}deg)`;
  refs.hours.style.transform = `rotate(${hoursDeg}deg)`;
}, 1000);
