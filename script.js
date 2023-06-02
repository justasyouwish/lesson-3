//  -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.

// const fruts = ['Apple', 'Tomat', 'Cherry', 'Orange'];

// console.log(fruts);

//  -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.

// for (let a = 2; a < 10; a++) {
//   if (a % 2 === 1) continue;
//   console.log(a);
// }

//  -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
//   console.log(`цифра ${i}!`);
// }

// let i = 0;
// while (i < 5) {
//   i++;
//   console.log(`cyfra ${i}!`);
// }

//  -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.
// while (true) {
//   let value = +prompt('vvedit chyslo bilshe za 100');
//   if (value > 100) break;
//   alert(`vashe chyslo ${value} ne pidhode,vvedit bilshe`);
//   if (!value) break;
//   console.log(value);
// }

//  -- 5 --
// Вирахуйте середній вік

// const girls = [
//   { age: 23, name: 'Оля' },
//   { age: 29, name: 'Аня' },
//   { age: 10, name: 'Юля' },
//   { age: 20, name: 'Катя' },
// ];

// let sum = girls.reduce((total, item) => total + item.age, 0);
// let average = sum / girls.length;
// console.log(average);

