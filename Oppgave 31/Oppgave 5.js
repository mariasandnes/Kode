function visTall() {
    let tekst = "";

    for (let tall = 0; tall <= 100; tall++) {

        // ELLER = ||
        if (tall % 8 === 0 || tall % 3 === 0) {
            tekst += tall + "<br>";
        }
    }

    document.getElementById("resultat").innerHTML = tekst;
}
