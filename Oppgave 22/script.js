function lagEpost() {
  let fornavn = document.getElementById("fornavn").value.trim().toLowerCase();
  let mellomnavn = document.getElementById("mellomnavn").value.trim().toLowerCase();
  let etternavn = document.getElementById("etternavn").value.trim().toLowerCase();

  let epost = "";

  if (mellomnavn === "") {

    epost = fornavn + "-" + etternavn.slice(0, 2) + "@andeby.com";
  } else {

    epost = fornavn.slice(0, 3) + "." + mellomnavn[0] + "." + etternavn + "@andeby.com";
  }

  document.getElementById("utskrift").innerHTML = 
    "Din e-postadresse er: <b>" + epost + "</b>";
}
