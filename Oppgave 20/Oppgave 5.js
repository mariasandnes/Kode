function finnLengde() {
  let tekst = document.getElementById("tekstInput").value;
  let lengde = tekst.length;
  document.getElementById("utskrift").innerHTML = 
    `Teksten du skrev har <b>${lengde}</b> tegn.`;
}

function gjørStore() {
  let tekst = document.getElementById("tekstInput").value;
  document.getElementById("utskrift").innerHTML = 
    tekst.toUpperCase();
}

function gjørSmå() {
  let tekst = document.getElementById("tekstInput").value;
  document.getElementById("utskrift").innerHTML = 
    tekst.toLowerCase();
}
