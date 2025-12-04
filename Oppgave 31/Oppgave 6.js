function visTekst() {
    let tekst = document.getElementById("tekst").value;
    let antall = Number(document.getElementById("antall").value);

    let output = "";

    for (let i = 0; i < antall; i++) {
        output += tekst + "<br>";
    }

    document.getElementById("resultat").innerHTML = output;
}
