let x
const voće = ["jabuka", "banana", "kruška", "naranča", "grožđe"];
const povrće = ["mrkva", "krastavac", "rajčica", "paprika"];
voće.push(povrće);
x = voće;
console.log("push: ", x);
x = voće.concat(povrće);
console.log("concat: ", x);
//spreed operator dodatkupus u niz ide uvjek na poćetak ili kraj niza
const x3 = [...voće, ...povrće, "kupus"];
console.log("spreed operator:  ", x3);


const nums = [1, 2, 3];
console.log(Math.max(...nums)); // Output: 3

const user = {
  name: "Marko",
  age: 25
};

const updated = {
  ...user,
  city: "Podgorica"
};
console.log(updated);
// rest operator
const [prviBroj, ...ostaliBrojevi] = [1, 2, 3, 4, 5];
console.log(prviBroj); // Output: 1
console.log(...ostaliBrojevi); // Output: 2 3 4 5

//rest operator izbacuje  element iz niza i ostale stavlja u novi niz (age ide u varijablu age a ostali idu u novi niz ostalo)
const userAna = {
  name: "Ana",
  age: 30,
  city: "Budva"
};

const { age, ...ostaliPodaci } = userAna;
console.log(ostaliPodaci);

const [prviElement, drugiElement, ...ostaliElementi] = [1, 2, 3, 4];

console.log(prviElement);
console.log(drugiElement);
console.log(ostaliElementi);



