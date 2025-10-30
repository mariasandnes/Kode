function gjørStor() {
  const tittel = document.getElementById("tittel");
  tittel.classList.add("big");
}

function markerTekst() {
  const p1 = document.getElementById("p1");
  p1.classList.toggle("highlight");
}

function visAdvarsel() {
  const p2 = document.getElementById("p2");
  p2.classList.remove("success");  
  p2.classList.add("warning");
}

function leggSkygge() {
  const boks = document.getElementById("boks");
  boks.classList.toggle("shadow");
}

function resetAlt() {
  document.getElementById("tittel").classList.remove("big");
  document.getElementById("p1").classList.remove("highlight");
  document.getElementById("p2").classList.remove("warning", "success");
  document.getElementById("boks").classList.remove("shadow");
}
