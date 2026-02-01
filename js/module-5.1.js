// Сума чисел: Напишіть функцію sumArray(numbers, callback),
// яка приймає масив чисел numbers та колбек callback.
// Функція повинна обчислити суму чисел у масиві та передати результат у колбек.

const sumArray = (numbers, callback) => {
  let sumNumbers = 0;
  numbers.forEach((number) => {
    sumNumbers += number;
  });

  return callback(sumNumbers);
};

sumArray([10, 20, 30], (result) => console.log(result));

// Подвоєння чисел: Напишіть функцію doubleArray(numbers, callback),
// яка приймає масив чисел numbers та колбек callback.
// Функція повинна подвоїти кожне число в масиві та передати новий масив у колбек.

const doubleArray = (numbers, callback) => {
  let doubleNumbers = [];
  numbers.forEach((number) => {
    doubleNumbers.push(number * 2);
  });
  return callback(doubleNumbers);
};

doubleArray([1, 2, 3], (result) => {
  console.log(result); // [2, 4, 6]
});

// Фільтр слів: Напишіть функцію filterWords(words, condition, callback),
// яка приймає масив рядків words, функцію condition (перевірка рядка) та колбек callback.
// Функція повинна фільтрувати слова масиву за допомогою переданої умови
// та передати відфільтрований масив у колбек.

const filterWords = (words, condition, callback) => {
  const filtered = [];
  words.forEach((word) => {
    if (condition(word)) {
      filtered.push(word);
    }
  });
  callback(filtered);
};

const wordLength = (word) => word.length > 5;
filterWords(["banana", "apple", "carrot", "cat"], wordLength, (result) =>
  console.log(result),
);

// Сортування чисел: Напишіть функцію sortNumbers(numbers, callback),
// яка приймає масив чисел numbers та колбек callback.
// Функція повинна відсортувати числа в масиві за зростанням
// та передати відсортований масив у колбек.

const sortNumbers = (numbers, callback) => {
  callback(numbers.toSorted((a, b) => a - b));
};

sortNumbers([1, 5, 25, -10], (result) => console.log(result));

// Пошук максимуму: Напишіть функцію findMax(numbers, callback),
// яка приймає масив чисел numbers та колбек callback.
// Функція повинна знайти максимальне число в масиві та передати його в колбек.

const findMax = (numbers, callback) => {
  callback(Math.max(...numbers));
};

findMax([1, 50, 25, 125], (result) => console.log(result));

// Перевірка на парність: Напишіть функцію checkEven(numbers, callback),
// яка приймає масив чисел numbers та колбек callback.
// Функція повинна перевірити, чи всі числа в масиві парні,
// і передати результат перевірки колбек.

const checkEven = (numbers, callback) => {
  const allEven = numbers.every((number) => number % 2 === 0);
  callback(allEven);
};

checkEven([2, 50, 20, 130], (result) => console.log(result));

// Об'єднання рядків: Напишіть функцію concatStrings(strings, separator, callback), 
// яка приймає масив рядків strings, рядок separator та колбек callback. 
// Функція повинна об'єднати рядки з масиву, розділяючи їх переданим роздільником, 
// і передати рядок, що вийшов, в колбек.

const concatStrings = (strings, separator, callback) => {
    callback(strings.join(separator));
};

concatStrings(["cat", "dog", "sunny"], "-", result => console.log(result));

// Перетворення в числа: Напишіть функцію parseNumbers(strings, callback), 
// яка приймає масив рядків strings та колбек callback. 
// Функція повинна перетворити кожен рядок з масиву на число і передати новий масив чисел в колбек.

const parseNumbers = (strings, callback) =>{
    callback(strings.map(Number));
};

parseNumbers(["5", "25", "92"], result => console.log(result));

// Підрахунок символів: 
// Напишіть функцію countCharacters(strings, callback), 
// яка приймає масив рядків strings та колбек callback. 
// Функція повинна підрахувати загальну кількість символів у всіх рядках масиву 
// та передати результат у колбек.

const countCharacters = (strings, callback) => {
    callback(strings.reduce((sum, str) => sum + str.length, 0));
};

countCharacters(["cat", "dog", "sunny"], result => console.log(result));