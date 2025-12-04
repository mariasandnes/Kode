function visTall() {
    let start = Number(document.getElementById("start").value);
    let slutt = Number(document.getElementById("slutt").value);

    let tekst = "";

    for (let tall = start; tall <= slutt; tall++) {
        tekst += tall + "<br>";
    }

    document.getElementById("resultat").innerHTML = tekst;
}
