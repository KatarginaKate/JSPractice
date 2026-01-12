// Задача-1
// Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance. 
// Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100. 
// В іншому випадку функцію повинна повернути рядок "Goodbye".

// function nightClubGuard(age, balance) {
//     if (age > 18 && balance > 100) {
//         return "Wellcome";
//     } else {
//         return "Goodbye";
//     }
// }

// // Приклади виклику функції:
// console.log(nightClubGuard(20, 150)); // "Wellcome"
// console.log(nightClubGuard(17, 150)); // "Goodbye"
// console.log(nightClubGuard(20, 50));  // "Goodbye"
// console.log(nightClubGuard(18, 100)); // "Goodbye"

// Задача-2
// Напишіть функцію яка для магазину яка приймає кількість товару (amount) та його вартість (price). 
// Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000, 
// в іншому випадку функція повинна повернути рядок "Це занадто дорого".

// function shopPurchase(amount, price) {
//     const totalCost = amount * price;
//     if (totalCost <= 1000) {
//         return "Ми це купуємо";
//     } else {
//         return "Це занадто дорого";
//     }
// }   
// Приклади виклику функції:
// console.log(shopPurchase(5, 100));  // "Ми це купуємо"
// console.log(shopPurchase(20, 60));  // "Ми це купуємо"
// console.log(shopPurchase(10, 150)); // "Це занадто дорого"
// console.log(shopPurchase(50, 30));  // "Це занадто дорого"

// Задача-3
// Напишіть функцію, яка приймає температуру (temp) в градусах Цельсія. 
// Якщо температура нижче 0, функція повинна повернути рядок "Замерзає", 
// якщо більше 0 але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно".

// function checkTemperature(temp) {
//     if (temp < 0) {
//         return "Замерзає";
//     } else if (temp >= 0 && temp < 25) {
//         return "Нормальна температура";
//     } else {
//         return "Спекотно";
//     }       
// }
// // Приклади виклику функції:
// console.log(checkTemperature(-5));  // "Замерзає"
// console.log(checkTemperature(10));  // "Нормальна температура"
// console.log(checkTemperature(25));  // "Спекотно"
// console.log(checkTemperature(30));  // "Спекотно"

// Задача-4
// Напишіть функцію, яка приймає 2 числа: number та divisor. 
// Якщо number ділиться на divisor без остатку, поверніть рядок "Ділиться", 
// в іншому випадку поверніть "Не ділиться".

function checkDivisibility(number, divisor) {
    if (number % divisor === 0) {
        return "Ділиться";
    } else {
        return "Не ділиться";
    }
}
// Приклади виклику функції:
console.log(checkDivisibility(10, 2));  // "Ділиться"
console.log(checkDivisibility(10, 3));  // "Не ділиться"
console.log(checkDivisibility(15, 5));  // "Ділиться"
console.log(checkDivisibility(14, 4));  // "Не ділиться"    

// Задача-5
// Напишіть функцію, яка приймає 2 параметри: isRaining (булевий) і hasUmbrella (булевий). 
// Якщо дощить і у вас є парасоля, поверніть "Не змокнеш", якщо дощить і немає парасолі, поверніть "Змокнеш", 
// в іншому випадку поверніть "Без дощу".

function weatherCheck(isRaining, hasUmbrella) {
    if (isRaining && hasUmbrella) {
        return "Не змокнеш";
    } else if (isRaining && !hasUmbrella) {
        return "Змокнеш";
    } else {
        return "Без дощу";
    }       
}
// Приклади виклику функції:
console.log(weatherCheck(true, true));   // "Не змокнеш"
console.log(weatherCheck(true, false));  // "Змокнеш"
console.log(weatherCheck(false, true));  // "Без дощу"
console.log(weatherCheck(false, false)); // "Без дощу"

// Задача-6
// Напишіть функцію, яка приймає оцінку студента (grade) за шкалою від 0 до 100. 
// Якщо оцінка 90 і більше, поверніть "Відмінно", від 75 до 89 - "Добре", 
// від 50 до 74 - "Задовільно", нижче 50 - "Незадовільно".

function evaluateStudent(grade) {
    if (grade >= 90) {
        return "Відмінно";
    } else if (grade >= 75 && grade <= 89) {
        return "Добре";
    } else if (grade >= 50 && grade <= 74) {
        return "Задовільно";
    } else {
        return "Незадовільно";
    }
}
// Приклади виклику функції:
console.log(evaluateStudent(95)); // "Відмінно"
console.log(evaluateStudent(80)); // "Добре"
console.log(evaluateStudent(60)); // "Задовільно"
console.log(evaluateStudent(40)); // "Незадовільно"

// Задача-8
// Напишіть функцію, яка приймає один параметр year. Якщо рік ділиться на 4 і не ділиться на 100, або ділиться на 400, поверніть "Високосний рік", в іншому випадку - "Звичайний рік".

function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return "Високосний рік";
    } else {
        return "Звичайний рік";
    }   
}
// Приклади виклику функції:
console.log(checkLeapYear(2020)); // "Високосний рік"
console.log(checkLeapYear(1900)); // "Звичайний рік"
console.log(checkLeapYear(2000)); // "Високосний рік"
console.log(checkLeapYear(2021)); // "Звичайний рік"

// Задача-9
// Напишіть функцію, яка приймає два параметри: hasInvitation (булевий) і isFriend (булевий).
//  Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", в іншому випадку поверніть "Вхід заборонено".

function checkInvitation(hasInvitation, isFriend) {
    if (hasInvitation || isFriend) {
        return "Ви запрошені";
    } else {
        return "Вхід заборонено";
    }               
}
// Приклади виклику функції:
console.log(checkInvitation(true, false));  // "Ви запрошені"
console.log(checkInvitation(false, true));  // "Ви запрошені"
console.log(checkInvitation(false, false)); // "Вхід заборонено"
console.log(checkInvitation(true, true));   // "Ви запрошені"

// Задача-10
// Напишіть функцію, яка приймає вік особи (age). 
// Якщо вік менший за 12, поверніть "Дитина", 
// якщо від 12 до 18, поверніть "Підліток", 
// якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер".

function checkAge(age) {
    if (age < 12) {
        return "Дитина";
    } else if (age > 12 && age < 18) {
        return "Підліток";
    } else if (age > 18 && age < 60) {
        return "Дорослий";
    } else {
        return "Пенсіонер";
    }
}

// Приклади виклику функції:
console.log(checkAge(10));  // "Дитина"
console.log(checkAge(15));  // "Підліток"
console.log(checkAge(35));  // "Дорослий"
console.log(checkAge(65));  // "Пенсіонер"

// Задача-11
// Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) 
// та hasAdminRights (булевий). 
// Якщо ви увійшли в систему і маєте права адміністратора, поверніть "Адмін-сторінка", 
// якщо увійшли, але не є адміністратором, поверніть "Користувач", в іншому випадку - "Гість".

function adminRights(isLoggedIn, hasAdminRights) {
if (isLoggedIn && hasAdminRights) {
    return "Адмін-сторінка";
    
} else if (isLoggedIn && !hasAdminRights) {
    return "Користувач";
} else {
    return "Гість";
}    
}

console.log(adminRights(true, true));   // "Адмін-сторінка"
console.log(adminRights(true, false));  // "Користувач"
console.log(adminRights(false, false)); // "Гість"

// Задача-42
// Напишіть функцію, яка приймає один параметр dayOfWeek. Використовуючи switch, поверніть "Понеділок", "Вівторок", "Середа", 
// "Четвер", "П'ятниця", "Субота" або "Неділя" залежно від введеного числа (1 - Понеділок, 2 - Вівторок, і т.д.). 
// Якщо введене число не в діапазоні від 1 до 7, поверніть "Невідомий день".

function checkDayOfWeek(dayOfWeek) {
    switch (dayOfWeek) {
    case 1:
    return "Понеділок";
    case 2:
    return "Вівторок";
    case 3:
    return "Середа";
    case 4:
    return "Четвер";
    case 5:
    return "П'ятниця";
    case 6:
    return "Субота";
    case 7:
    return "Неділя";
     default:
        return "Невідомий день";
}
}

console.log(checkDayOfWeek(1));  // "Понеділок"
console.log(checkDayOfWeek(2));  // "Вівторок"
console.log(checkDayOfWeek(3));  // "Середа"
console.log(checkDayOfWeek(8));  // "Невідомий день"

// Задача-51
// Напишіть функцію, яка приймає один параметр continent. 
// Використовуючи switch, поверніть назву континенту або "Невідомий континент" в залежності від введеного значення. 
// Наприклад, "Africa", "Europe", "Asia", "North America", "South America", "Antarctica", "Australia" - відомі континенти, інші випадки - "Невідомий континент".

function checkContinent(continent) {
    switch (continent) {
        case "Africa":
            return "Африка";
        case "Europe":
            return "Європа";
        case "Asia":
            return "Азія";
        case "North America":
            return "Північна Америка";
        case "South America":
            return "Південна Америка";
        case "Antarctica":
            return "Антарктида";
        case "Australia":
            return "Австралія";
        default:
            return "Невідомий континент";
    }
}   
// Приклади виклику функції:
console.log(checkContinent("Africa"));          // "Африка"
console.log(checkContinent("Europe"));          // "Європа"
console.log(checkContinent("Unknown Continent")); // "Невідомий континент"

// console.log(true && 3); // 3

// console.log(false && 3); // false

// console.log(true && 4 && 'kiwi'); // "kiwi"

// console.log(true && 0 && 'kiwi'); //0

// console.log(true || 3); //true

// console.log(true || 3 || 4); //true

// console.log(true || false || 7); //true

// console.log(null || 2 || undefined); //2

// console.log((1 && null && 2) > 0); //false

// console.log(null || (2 && 3) || 4); //3

// console.log(1 && 5); //5
// console.log(5 && 1); //1
// console.log(0 && 2); //0
// console.log(2 && 0); //0
// console.log('' && 'Mango'); //''
// console.log('Mango' && ''); //''
// console.log('Mango' && 'Poly'); //'Poly'
// console.log('Poly' && 'Mango'); //'Mango'

// console.log(true || false);
// console.log(false || true);
// console.log(true || true);

// console.log(3 || false);
// console.log(false || 3);
// console.log(3 || true);
// console.log(true || 3);

// console.log(!true); //false
// console.log(!false); //true
// console.log(!3); //false
// console.log(!'Mango'); //false
// console.log(!0); //true
// console.log(!''); //true

const isOnline = true;
const isNotOnline = !isOnline;
// console.log(true && false); // false
// console.log(false && true); //false
// console.log(true && true); //true
// console.log(false && false); //false

// console.log(true || false); //true
// console.log(false || true); //true
// console.log(true || true); //true
// console.log(false || false); //false

// console.log(!true); //false
// console.log(!false); //true
// console.log(!!true); //true
// console.log(!!false); //false

// console.log(1 === 1 && 2 === 2); //true
// console.log(1 === 2 && 2 === 2); //false
// console.log(1 === 1 || 2 === 2); //true
// console.log(1 === 2 || 2 === 2); //true

console.log(1 > 2 && 2 < 3); //false
console.log(1 < 2 && 2 < 3); //true
console.log(1 > 2 || 2 < 3); //
console.log(1 < 2 || 2 < 3);

console.log(0 && 3);
console.log(3 && 0);
console.log(0 || 3);
console.log(3 || 0);

console.log('' || 'apple');
console.log('orange' || '');
console.log('' && 'banana');
console.log('grape' && '');

console.log(0 || false);
console.log(false || 0);
console.log(1 && 'cherry');
console.log('banana' && 1);
console.log(null && 'pear');
console.log('peach' && undefined);
console.log(undefined || 'plum');
console.log('melon' || null);
console.log(undefined && false);
console.log(true || 'watermelon');
console.log('watermelon' || true);
console.log(false && 'pineapple');
console.log('pineapple' && false);
console.log(NaN || 'kiwi');
console.log('kiwi' || NaN);
console.log(NaN && 'mango');
console.log('mango' && NaN);
console.log(Infinity || 'apricot');
console.log('apricot' || Infinity);
console.log(Infinity && 'blueberry');
console.log('blueberry' && Infinity);
console.log(null || undefined);