function lagHistorie() {
  const navn = document.getElementById("navn").value.trim();
  const kjonn = document.getElementById("kjonn").value;
  const fodselsaar = Number(document.getElementById("fodselsaar").value);
  const resultat = document.getElementById("resultat");

  if (navn === "" || isNaN(fodselsaar) || fodselsaar <= 0) {
    resultat.style.color = "red";
    resultat.innerText = "❌ Vennligst fyll inn gyldig navn og fødselsår.";
    return;
  }

  const aarNaa = new Date().getFullYear();
  const alder = aarNaa - fodselsaar;
  const aarTilHundre = 100 - alder;

  const historie = `Det var en gang en ${kjonn} som het ${navn}, 
  og var født i ${fodselsaar}. 
  Denne personen er nå ${alder} år gammel, og har ${aarTilHundre} år igjen til 100-årsdagen sin!`;

  resultat.style.color = "black";
  resultat.innerText = historie;
}
