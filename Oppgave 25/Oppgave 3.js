function visValg() {

  let farger = document.getElementsByName("farge");
  let melding = document.getElementById("melding");
  let valgtFarge = "";

  for (let i = 0; i < farger.length; i++) {
    if (farger[i].checked) {
      valgtFarge = farger[i].value;
      break;
    }
  }

  if (valgtFarge !== "") {
    melding.innerHTML = "Du valgte " + valgtFarge + ".";
  }
}
