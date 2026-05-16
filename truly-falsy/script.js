
// for(let i = 0; i < 10; i++) {
//     console.log(i);
// }

// for(let i = 0; i < 10; i++) {
//     if(i === 5) {
//         break;
//     }
//     console.log(i);
// }

// ukljanja 5 iz ispisa, ali nastavlja sa petljom
// for(let i = 0; i < 10; i++) {
//     if(i === 5) {
//         continue;
//     }
//     console.log(i);
// }


// for(let i = 0; i < 10; i++) {
//     if(i === 5) {
//        console.log("Moj sretni broj"+i);
//     } else {
//         console.log("Broj je "+i);
//     }
// }


// for(let i = 0; i < 10; i++) {
//     console.log("Broj je "+i);

//     for(let j = 0; j < 10; j++) {

//             console.log(` ${i}*  ${j}= ${i*j}`);
//         }
// while
// let k = 0;
// while(k < 10) {
//     console.log(k);
//     k++;
// }

// let k = 10;
// do {
//     console.log(k);
//     k++;
// } while(k < 10);

const items = ["apple", "banana", "orange"];
const objectPerson =[ {
    name: "John",
    age: 30,
    city: "New York"
},
{    name: "Jane",
    age: 25,
    city: "Los Angeles"
}
]
// for(let i = 0; i < items.length; i++) {
//     console.log(items[i]);
// }

// for(let item of items) {
//     console.log(item);
// }

// for (let item of items) {
//    console.log(item);
//     }
for (let key in objectPerson) {
    console.log(key + ": " + objectPerson[key].name);
}