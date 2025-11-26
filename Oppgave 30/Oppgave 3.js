function arealRektangel(lengde, bredde) {
  return lengde * bredde;
}

function visArealRektangel() {
  let l = Number(document.getElementById("rektLengde").value);
  let b = Number(document.getElementById("rektBredde").value);

  let resultat = arealRektangel(l, b);

  document.getElementById("rektArealSvar").innerHTML = "Areal: " + resultat;
}