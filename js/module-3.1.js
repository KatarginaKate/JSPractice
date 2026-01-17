// Напиши функцію, яка приймає масив та виводить кожен парний елемент масиву у консоль.

function evenMassive(array) {
    for (let i = 0; i < array.length; i += 1) {
        if (array[i] % 2 === 0) {
            console.log(array[i]);
        }
    }
}
const array = [1, 2, 3, 4, 5];
 evenMassive(array); console.log(array[0]);