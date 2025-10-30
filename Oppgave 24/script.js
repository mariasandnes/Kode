let utskrift = document.getElementById("utskrift");

function snitt() {
  let tekst = document.getElementById("p1").innerText;
  let sisteOrd = tekst.slice(tekst.lastIndexOf(" ") + 1);
  utskrift.innerHTML = "Resultat: " + sisteOrd;
}

function length() {
  let tekst = document.getElementById("p2").innerText;
  utskrift.innerHTML = "Teksten har " + tekst.length + " tegn.";
}

function store() {
  let tekst = document.getElementById("p3").innerText;
  utskrift.innerHTML = tekst.toUpperCase();
}

function smol() {
  let tekst = document.getElementById("p4").innerText;
  utskrift.innerHTML = tekst.toLowerCase();
}

function bytt() {
  let tekst = document.getElementById("p5").innerText;
  let nyTekst = tekst.replace("Pompel", "Pilt");
  utskrift.innerHTML = nyTekst;
}

function utdrag() {
  let tekst = document.getElementById("p6").innerText;
  let start = tekst.indexOf("amøbe");
  let slutt = start + "amøbe".length;
  let utdrag = tekst.substring(start, slutt);
  utskrift.innerHTML = "Utdrag: " + utdrag;
}

function finnIndeks() {
  let tekst = document.getElementById("p7").innerText;
  let indeks = tekst.indexOf("fantomet");
  utskrift.innerHTML = "Ordet 'fantomet' starter på plass " + indeks + ".";
}

function inneholder() {
  let tekst = document.getElementById("p8").innerText;
  let finnes = tekst.includes("inne");
  if (finnes) {
    utskrift.innerHTML = "✅ Teksten inneholder ordet 'inne'.";
  } else {
    utskrift.innerHTML = "❌ Teksten inneholder ikke ordet 'inne'.";
  }
}
