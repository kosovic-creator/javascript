const data = [
  {
    id: 1,
        naslov: "The Lord of the Rings",
        datumIzdanja: "1954-07-29",
        autor: "J. R. R. Tolkien",
        zanrovi: [
            "fantastika",
            "visoka fantastika",
            "avantura",
            "fikcija",
            "romani",
            "književnost",
    ],
        filmPreveden: true,
        stranica: 1216,
        prevodi: {
            španski: "El señor de los anillos",
            kineski: "魔戒",
            francuski: "Le Seigneur des anneaux",
        }
  },
  {
    id: 2,
      naslov: "The Cyberiad",
      datumIzdanja: "1965-01-01",
      autor: "Stanislaw Lem",
      zanrovi: [
          "fantastika",
          "humor"
    ],
      filmPreveden: false,
      stranica: 295,
      prevodi: {

    },

  },
];

function getKnjiga() {
  return data;
}

function getKnjigaById(id) {
  return data.find((d) => d.id === id);
}

const knjige = getKnjiga();
console.log(knjige);

const knjiga = getKnjigaById(2);
console.log(knjiga);
const { naslov, autor, zanrovi } = knjiga;
console.log(naslov, autor, zanrovi);

[prviZanr, drugiZanr, treciZanr, ...ostaliZanrovi] = zanrovi;
console.log(prviZanr, drugiZanr, treciZanr, ostaliZanrovi);

// Create a new object with all properties of 'knjiga' and add 'datumPublikacije'
const knjigaSaDatumomPublikacije = { ...knjiga, datumPublikacije: '12-12-2020', stranica: 100 };
console.log(knjigaSaDatumomPublikacije);

const uslov = knjiga.stranica > 200 ? 'Duga knjiga' : 'Kratka knjiga';
console.log(uslov);

const uslov2 = knjiga.filmPreveden ? 'preveden film' : 'nije preveden film';
console.log(uslov2);

const uslov3 = knjiga.filmPreveden && knjiga.stranica < 300 ? 'preveden film' : 'Mala knjiga';
console.log(uslov3);

const uslov4 = !knjiga.filmPreveden;
console.log(uslov4);

const uslov5 = knjiga.filmPreveden || knjiga.stranica > 300;
console.log(uslov5);

const uslov6 = knjiga.godinaIzdanja < 2000 ? 'stara knjiga' : 'nova knjiga';
console.log(uslov6);

const uslov7 = knjiga.stranica > 300 && 'Duga knjiga';
console.log(uslov7);


function prikažiGodinuIzdanja() {
    return knjiga.datumIzdanja.split('-')[0];
}
console.log(prikažiGodinuIzdanja());

const prikažiGodinuIzdanja2 = () => knjiga.datumIzdanja.split('-')[0];
console.log(prikažiGodinuIzdanja2());

console.log(`Naslov knjige je: ${knjiga.naslov}, a autor je: ${knjiga.autor}.`);

//filter, map, reduce
//važno je knnjige biti niz
const dugaKnjiga = knjige.filter(knjiga => knjiga.stranica > 300);
console.log(dugaKnjiga);


const nasloviKnjiga = knjige.map(knjiga => knjiga.naslov);
console.log(nasloviKnjiga);

const ukupnoStranica = knjige.reduce((ukupno, knjiga) => ukupno + knjiga.stranica, 0);
console.log(ukupnoStranica);

const sortiraneKnjige = knjige.sort((a, b) => a.stranica - b.stranica);
console.log(sortiraneKnjige);
const sortiraneKnjigeSlice = knjige.slice().sort((a, b) => a.stranica - b.stranica);
console.log(sortiraneKnjigeSlice);

//dodavanja nove knjige u niz
const novaKnjiga = {
    id: 3,
    naslov: "Dune",
    datumIzdanja: "1965-08-01",
    autor: "Frank Herbert",
    zanrovi: [
        "fantastika",
        "epična fantastika",
        "naučna fantastika"
    ],
    filmPreveden: true,
    stranica: 412,
    prevodi: {
        srpski: "Dina",
        nemački: "Der Wüstenplanet",
        italijanski: "Dune"
    }
};
knjige.push(novaKnjiga);
const azuriraniNizKnjiga = [...knjige, novaKnjiga];
console.log(azuriraniNizKnjiga);

const obrisiKnjiguById = (id) => {
    // Remove the book with the given id from the knjige array
    const index = knjige.findIndex((k) => k.id === id);
    if (index !== -1) {
        knjige.splice(index, 1);
    }
};
obrisiKnjiguById(2);
console.log(knjige);

const azuriraniNizKnjigaNakonBrisanjaById = {}
console.log(azuriraniNizKnjigaNakonBrisanjaById);