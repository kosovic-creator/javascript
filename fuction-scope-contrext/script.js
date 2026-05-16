function sum(a, b) {
    console.log(a + b);
}
sum(5, 10);

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

if (true) {
    const broj = "12345";
    console.log("broj ispravan: ", broj);
    console.log(broj);
}

const test = (a, b) => {
    console.log("test",a,b);
}
test(1,4);

const konvertCelsius=(f)=>(
    (f-32)*5/9
);
console.log(konvertCelsius(100));

const arr=[1,2,3,4,5];

const min=Math.min(...arr);
console.log("min: ", min);
const max=Math.max(...arr);
console.log("max: ", max);

// function minmax(arr) {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);
//     return { min, max };
// }
const maxmin = (arr)=>{

    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return { min, max };
}
const result = maxmin(arr);
console.log("minmax: ", result);

const d=new Date();
console.log("d: ", d);
const time= d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
console.log("time: ", time);