function visPartall() {
    let tekst = "";

    for (let tall = 0; tall <= 100; tall++) {
        if (tall % 2 === 0) {
            tekst += tall + "<br>";
        }
    }

    document.getElementById("resultat").innerHTML = tekst;
}