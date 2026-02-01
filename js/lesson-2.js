// Створіть масив styles з елементами 'jazz' і 'blues'
// Додайте до кінця масиву елемент 'rock-n-roll' за допомогою відповідного методу масивів
// Знайдіть елемент 'blues' у масиві та замініть його на 'classic', використовуючи JavaScript-код

// Напишіть функцію logItems(array), яка приймає масив як аргумент
// і виводить у консоль кожен його елемент у форматі:
// "<номер елемента> - <значення елемента>".
// Використайте цикл for для перебору елементів масиву.
// Нумерація елементів повинна починатися з 1 (а не з 0).

const styles = ["jazz", "blues"];
styles.push("rock-n-roll");
const index = styles.indexOf("blues");
if (index !== -1) {
  styles[index] = "classic";
}

function logItems(array) {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1} - ${array[i]}`);
  }
}

// Напишіть функцію checkLogin(array), яка:
// Приймає масив логінів як аргумент.
// Запитує ім'я користувача через prompt.
// Перевіряє, чи є введене ім'я у переданому масиві.
// Якщо ім'я є в масиві – виводить повідомлення через alert: "Welcome, <name>!"
// Якщо ім'я відсутнє – виводить повідомлення: "User not found".

// const logins = ["Peter", "John", "Igor", "Sasha"];

// function checkLogin(array) {
//   const name = prompt("Enter your login:");

//   if (array.includes(name)) {
//     alert(`Welcome, ${name}!`);
//   } else {
//     alert("User not found");
//   }
// }

// const logins = ["Peter", "John", "Igor", "Sasha"];

// checkLogin(logins);

// Напишіть функцію caclculateAverage(),
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додайте перевірку, що аргументи - це числа.

// function calculateAverage(...args) {
//   let sum = 0;
//   let count = 0;

//   for (const value of args) {
//     if (typeof value === "number") {
//       sum += value;
//       count += 1;
//     }
//   }

//   if (count === 0) {
//     return 0;
//   }

//   return sum / count;
// }

function makePizza() {
  return "Your pizza is being prepared, please wait.";
}

const result = makePizza();
const pointer = makePizza;

console.log(result);   // рядок
console.log(pointer); // сама функція
console.log(pointer()); // знову виклик функції через посилання



