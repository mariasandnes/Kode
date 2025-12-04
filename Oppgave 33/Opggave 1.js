// ----------------------
//   ARRAYENE
// ----------------------

// 15 heltall (hardkodet)
let heltall = [3, 7, 12, 25, 30, 41, 56, 78, 90, 14, 19, 22, 33, 45, 99];

// 10 desimaltall
let desimaltall = [1.1, 2.5, 3.3, 4.9, 5.0, 6.7, 7.25, 8.8, 9.9, 10.01];

// 10 kattenavn
let kattenavn = [
    "Millie",
    "Nala",
    "Luna",
    "Milo",
    "Pusur",
    "Snøfnugg",
    "Odin",
    "Bella",
    "Simba",
    "RatKillah"
];


// ============================================================
//                     a) forEach + NAVNGITT FUNKSJON
// ============================================================

// variabel som navngitt funksjon fyller med tekst
let heltallTekst = "";

// selve navngitte funksjonen (callback)
function skrivHeltall(tall, indeks) {
    heltallTekst += "Element " + indeks + ": " + tall + "<br>";
}

// funksjon knyttet til knappen
function visHeltall() {
    heltallTekst = "";                 // tøm før hver kjøring
    heltall.forEach(skrivHeltall);     // callback uten ()
    document.getElementById("heltallResultat").innerHTML = heltallTekst;
}


// ============================================================
//                b) forEach + ANONYM FUNKSJON I VARIABEL
// ============================================================

function visDesimaltall() {
    let tekst = "";

    // anonym funksjon lagret i variabel
    let anoFunk = function(tall, indeks) {
        tekst += "Element " + indeks + ": " + tall + "<br>";
    };

    desimaltall.forEach(anoFunk);

    document.getElementById("desimalResultat").innerHTML = tekst;
}


// ============================================================
//        c) forEach + LOKAL FUNKSJON DEFINERT INNI forEach
// ============================================================

function visKattenavn() {
    let tekst = "";

    kattenavn.forEach(function(navn, indeks) {
        tekst += "Katt " + (indeks + 1) + ": " + navn + "<br>";
    });

    document.getElementById("kattResultat").innerHTML = tekst;
}


// ============================================================
//                   d) map() + ARROW FUNKSJON
// ============================================================

function visKattenavnMedMap() {
    // map + arrow => returnerer NYTT array
    let storeKatter = kattenavn.map(navn => navn.toUpperCase());

    let tekst = "";

    storeKatter.forEach(function(navn, indeks) {
        tekst += "Katt " + (indeks + 1) + ": " + navn + "<br>";
    });

    document.getElementById("kattMapResultat").innerHTML = tekst;
}
