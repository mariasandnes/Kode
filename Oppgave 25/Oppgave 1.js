function siHei() {
  let navn = document.getElementById("navn").value.trim();
  let melding = document.getElementById("melding");

  if (navn !== "") {
    melding.innerHTML = "Hei, " + navn + "!";
  } else {
    melding.innerHTML = "Vennligst skriv inn navnet ditt.";
  }
}
