const x ="drasko@gmail.com";

if (x) {
    console.log("This is truthy");
} else {
    console.log("This is falsy");
}

const djeca = ""; // Ovo je broj, ali nije validan broj

if ((djeca!=undefined&&djeca!==""&&djeca!==null) ) {
    console.log(`Imate ${djeca} djece`);
} else {
    console.log("Nemate djece");
}

const arr=[];
if (arr.length>0) {
    console.log("Niz nije prazan");
} else {
    console.log("Niz je prazan");
}

const obj={
    ime:"Drasko"
};
if (Object.keys(obj).length>0) {
    console.log("Objekat nije prazan");
} else {
    console.log("Objekat je prazan");
}