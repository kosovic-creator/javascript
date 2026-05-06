let x;
let y;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
x =  arr.slice(2, 4);
y = arr.splice(2, 5);
console.log("poslije slice: ", x);
console.log(arr);
console.log("poslije splice: ", y);
console.log(arr);