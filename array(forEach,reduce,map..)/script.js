const socialMedia = ["Facebook", "Twitter", "Instagram"];
// forEach
socialMedia.forEach((media) => {
  console.log(media);
});
// map pokazuje koliko znakova ima svaka društvena mreža

const socialMediaLength = socialMedia.map((media) => media.length);
console.log(socialMediaLength);
const numbers = [1, 2, 3, 4, 5];
// map - kvadrira svaki broj  pravi novi niz sa kvadratima brojeva iz originalnog niza
const squaredNumbers = numbers.map((num) => num * num);
console.log(squaredNumbers);
// ili


// reduce - zbroji dužinu svih naziva društvenih mreža
const brojevi = [1, 2, 3, 4, 5];
const total = brojevi.reduce((sum, num) => sum + num, 0);
console.log(total);
const totalLength = socialMedia.reduce((total, media) => total + media.length, 0);
console.log(totalLength);

// filter - filtrira društvene mreže koje imaju dužinu veću od 7 znakova
const longNames = socialMedia.filter((media) => media.length > 7);
console.log(longNames);

const djeljivoSaDva = brojevi.filter((num) => num % 2 === 0);
console.log(djeljivoSaDva);


const companys = [
  { name: "Google", employees: 100000 },
  { name: "Facebook", employees: 50000 },
    { name: "Instagram", employees: 20000 },
];
// filter - filtrira tvrtke koje imaju više od 30000 zaposlenika
const bigCompanies = companys.filter((company) => company.employees > 30000);
console.log(bigCompanies);

const imeKompanije = companys.map((company) => {
    return {
        name: company.name,
        employees: company.employees

    };
});
console.log(imeKompanije);