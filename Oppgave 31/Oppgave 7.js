function visMultiplikasjon() {
    let tekst = "";

    for (let x = 0; x <= 100; x++) {
        tekst += x + " x " + x + " = " + (x * x) + "<br>";
    }

    document.getElementById("resultat").innerHTML = tekst;
}
