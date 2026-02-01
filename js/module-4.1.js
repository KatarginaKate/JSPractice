// Створення об'єкта: Створіть об'єкт person, який містить властивості ім'я, вік та професія.

// Доступ до властивостей: Виведіть на консоль ім'я створеного об'єкта person.

// Зміна властивостей: Змініть вік в об'єкті person на нове значення.

// Додавання нових властивостей: Додайте до об'єкта person властивість місце_роботи зі значенням.

// Видалення властивостей: Видаліть властивість професія з об'єкта person.

// Пошук властивостей: Перевірте, чи існує властивість професія в об'єкті person.

// Зведення декількох об'єктів: Створіть ще один об'єкт friend, який містить інформацію про вашого друга. Потім об'єднайте властивості об'єкта friend з об'єктом person.

// Перебір властивостей: Виведіть всі властивості об'єкта person на консоль у вигляді ключ-значення.

// Методи об'єкта: Додайте до об'єкта person метод привітання, який буде виводити вітання з іменем особи.

// Застосування Object.keys(): Виведіть на консоль масив зі всіма ключами об'єкта person за допомогою функції Object.keys().

const person = {
    name: "Іван",
    age: 30,
    profession: "інженер"
};
console.log(person.name);

person.age = 31;
person.workplace = "Компанія XYZ";

delete person.profession;  
console.log('profession' in person);

const friend = {
    name: "Петро",
    age: 28,
    profession: "дизайнер"
};

Object.assign(person, friend);

for (let key in person) {
    console.log(key + ": " + person[key]);
}

person.greet = function() {
    console.log("Привіт, мене звати " + this.name);
};

person.greet();

console.log(Object.keys(person));

// Напиши функцію, яка створює об'єкт з ім'ям і віком.
// Функція повинна приймати два аргументи: ім'я (рядок) і вік (число).
// Поверни цей об'єкт.

function createPerson(name, age) {
    return {
        name: name,
        age: age
    };
}
console.log(createPerson("Марія", 25));

// Напиши функцію, яка приймає об'єкт і додає до нього нову властивість "address" (рядок).
// Поверни оновлений об'єкт.
function addAddress(obj, address) {
    obj.address = address;
    return obj;
}
const person1 = { name: "Олег", age: 40 };
console.log(addAddress(person1, "вул. Центральна, 10"));   
