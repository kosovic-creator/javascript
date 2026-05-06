let sve
const voće = ["jabuka", "banana", "kruška", "naranča", "grožđe"];
const povrće = ["mrkva", "krastavac", "rajčica", "paprika"];
voće.push(povrće);
sve = voće;
console.log(sve);
sve = voće.concat(povrće);
console.log(sve);

const sve2 = [...voće, ...povrće, "kupus"];
console.log("spreed operator:  ", sve2);

let arr = [1, 2, 3, 4];
let x = arr.splice(2, 1);
x = arr;
console.log(x);