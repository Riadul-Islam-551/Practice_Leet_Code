// const arr =  [1,2,3,4] ;
// const number = parseInt(arr.join(''), 10);
// console.log(number);

// const num = -1234;
// const array = String(Math.abs(num)).split('').map(Number);
// console.log(array);

const l1 = [2, 4, 3];
const l2 = [5, 6, 4];

//convert the arrays into number

const num1 = parseInt(l1.join(""), 10);
const num2 = parseInt(l2.join(""), 10);
// console.log(num1);
// console.log(num2);

const sum = num1 + num2;

// console.log(sum);

const arrSum = String(Math.abs(sum)).split("").map(Number);
// console.log(arrSum);
const arrReverse = arrSum.reverse();
// console.log(arrReverse);
