"use strict";

function findMissingNumberDec1(arr) {
    // Проверяем, что все элементы массива являются числами
    if (!arr.every(element => typeof element === 'number')) {
        return 'Nan';
    }

    // Преобразуем массив в Set для удаления дубликатов
    const uniqueSet = new Set(arr);

    // Преобразуем Set обратно в массив
    const uniqueArr = [...uniqueSet];

    // Находим минимальное и максимальное значение в массиве
    const minNumber = Math.min(...uniqueArr);
    const maxNumber = Math.max(...uniqueArr);

    // Находим сумму арифмитической прогрессии
    const expectedSum = (minNumber + maxNumber) * (maxNumber - minNumber + 1) / 2;
    // Находим сумму элементов массива
    const actualSum = uniqueArr.reduce((acc, curr) => acc + curr, 0);
    return expectedSum - actualSum
}

//Test scenarios
console.log(findMissingNumberDec1([5, 0, 1, 3, 2])); // Output: 4
console.log(findMissingNumberDec1([7, 9, 10, 11, 12])); // Output: 8
console.log(findMissingNumberDec1(['f', 5, 0, 1, 3, 2])); // Output: NaN
console.log(findMissingNumberDec1([5, 0, 1, 3, 2, 1])); // Output: 4
console.log(findMissingNumberDec1([0, 1, 3, 2])); // Output: 0
console.log(findMissingNumberDec1([-2, 0, 1, 2])) // Output: -1


function findMissingNumberDec2(arr) {
    // Проверяем, что все элементы массива являются числами
    if (!arr.every(element => typeof element === 'number')) {
        return 'Nan';
    }

    // Преобразуем массив в Set для удаления дубликатов
    const uniqueSet = new Set(arr);

    // Преобразуем Set обратно в массив
    const uniqueArr = [...uniqueSet];

    // Находим минимальное и максимальное значение в массиве
    const minNumber = Math.min(...uniqueArr);
    const maxNumber = Math.max(...uniqueArr);

    for (let i = minNumber; i <= maxNumber; i++) {
        // Проверяем, есть ли текущее число в массиве
        if (!arr.includes(i)) {
            return i; // Если число отсутствует, то оно пропущено
        }
    }

    // Если нет пропущенных чисел в пределах массива, возвращаем 0
    return 0;
}

// Test scenarios
console.log(findMissingNumberDec2([5, 0, 1, 3, 2])); // Output: 4
console.log(findMissingNumberDec2([7, 9, 10, 11, 12])); // Output: 8
console.log(findMissingNumberDec2(['f', 5, 0, 1, 3, 2])); // Output: NaN
console.log(findMissingNumberDec2([5, 0, 1, 3, 2, 1])); // Output: 4
console.log(findMissingNumberDec2([0, 1, 3, 2])); // Output: 0
console.log(findMissingNumberDec2([-2, 0, 1, 2])) // Output: -1
