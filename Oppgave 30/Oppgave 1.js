function alder(tall) {
  if (tall < 13) {
    return "Du er en unge";
  }
  else if (tall >= 13 && tall <= 19) {
    return "Du er tenåring";
  }
  else if (tall >= 20 && tall <= 66) {
    return "Du er voksen";
  }
  else {
    return "Du er pensjonist";
  }
}

function sjekkAlder() {
  let inputVerdi = document.getElementById("alderInput").value;
  let svar = alder(Number(inputVerdi));
  document.getElementById("resultat").innerText = svar;
}
