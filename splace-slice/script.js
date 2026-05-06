let x;
let y;
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);
x = arr.slice(2, 4);
console.log(arr);
//slice() ne mijenja originalni niz, već vraća novi niz koji sadrži elemente od indeksa 2 do 4 (ne uključujući indeks 4).
console.log("slice(2, 4): ", x);
console.log(arr);

//BRISANJE
// u ovom slučaju brišem jedan element na index 2
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
y = arr1.splice(2, 1);
console.log("poslije splice splice(2, 1)brišem na idex 2 jedan element: ", y);
console.log(arr1);

// MJENJANJE
//Ovo znači: od indeksa 1, obriši 1 element i ubaci 100. Rezultat je isti, ali arr3[1] = 100 je čistije za običnu promjenu vrijednosti.
//uovom slučaju mjenjam člana sa indexom 1 i stavljam 100
const arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// z = arr3.splice(1, 3, 100);
arr3[1] = 100;

console.log("poslije splice splice(1, 3, 100) u indexu 1 mjenjam i sads je 100: ", arr3[1]);
console.log(arr3);

// DODAVANJE
//uovom slučaju dodajem člana sa indexom 1 i stavljam 100 i brišem 3 elemanta nakon indexa 1
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
k = arr2.splice(1,3, 100);
console.log("poslije splice splice(1,3, 100) u indexu 1 dodajem 100 i brišem 3 elemnta : ", k);
console.log(arr2);