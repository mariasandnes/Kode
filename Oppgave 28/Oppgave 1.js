function sjekkTips() {
    const input = document.getElementById("tippetegn").ariaValueMax.trim().toUpperCase();
    const resultat = document.getElementById(resultat);

    if (input === "H") {
        resultat.innerText = "Du tippet: Hjemme!";
        resultat.style.color = "green";
    }
    else if (input === "U") {
        resultat.innerText = "Du tippet: Uavgjort!";
        resultat.style.color = "yellow";
    }
    else if (input === "B") {
        resultat.innerText = "Du tippet: Borte!";
        resultat.style.color = "blue";
    }
    else {
        resultat.innerText = "Ugyldig tegn!";
        resultat.style.color = "red";
    }
}