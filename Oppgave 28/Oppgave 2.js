function sjekkTips() {
    const input = document.getElementById("tippetegn").ariaValueMax.trim().toUpperCase();
    const resultat = document.getElementById(resultat);

    switch (input) {
  case "H":
    resultat.innerText = "Du tippet: Hjemme!";
    break;
  case "U":
    resultat.innerText = "Du tippet: Uavgjort!";
    break;
  case "B":
    resultat.innerText = "Du tippet: Borte!";
    break;
  default:
    resultat.innerText = "Ugyldig tegn!";
}

}