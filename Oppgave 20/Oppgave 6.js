function lagEpost() {
  let fornavn = document.getElementById("fornavn").value.trim().toLowerCase();
  let etternavn = document.getElementById("etternavn").value.trim().toLowerCase();

  if (fornavn === "" || etternavn === "") {
    document.getElementById("utskrift").innerHTML = 
      "Vennligst skriv inn både fornavn og etternavn.";
    return;
  }


  let epost = fornavn + "." + etternavn + "@olsenbanden.co.uk";


  document.getElementById("utskrift").innerHTML = 
    "Din e-postadresse er: <b>" + epost + "</b>";
}
