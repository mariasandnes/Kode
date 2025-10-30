function beregnPris() {
  let alder = Number(document.getElementById("alder").value);
  let fullPris = 100;
  let rabatt = 0;
  let melding = "";

  if (alder < 12) {
    rabatt = 50;
    melding = "Du er barn og får 50% rabatt.";
  } else if (alder > 67) {
    rabatt = 20;
    melding = "Du er pensjonist og får 20% rabatt.";
  } else {
    melding = "Du får ingen rabatt.";
  }

  let pris = fullPris - (fullPris * rabatt / 100);

  document.getElementById("resultat").innerHTML =
    `${melding}<br>Fergebilletten koster <b>${pris}</b> kr for en tur, for en passasjer som er ${alder} år gammel. God tur!`;
}
