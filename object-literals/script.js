let x;
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
console.log(person.name); // Output: John

const num=[1,2,3,4,5];
console.log(num[2]); // Output: 3
 const [first, second, ...rest] = num;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
console.log(first,second,rest)