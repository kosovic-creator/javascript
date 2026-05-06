let x
const voće = ["jabuka", "banana", "kruška", "naranča", "grožđe"];
const povrće = ["mrkva", "krastavac", "rajčica", "paprika"];
voće.push(povrće);
x = voće;
console.log("push: ", x);
x = voće.concat(povrće);
console.log("concat: ", x);
//spreed operator dodatkupus u niz
const x3 = [...voće, ...povrće, "kupus"];
console.log("spreed operator:  ", x3);

