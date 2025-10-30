function visHandleliste() {
  const varer = document.getElementsByName("vare");
  let valgt = [];

  for (let i = 0; i < varer.length; i++) {
    if (varer[i].checked) {
      valgt.push(varer[i].value);
    }
  }

  const resultat = document.getElementById("resultat");

  if (valgt.length === 0) {
    resultat.innerHTML = "Du har ikke valgt noen varer.";
  } else {
    resultat.innerHTML = "Du valgte: " + valgt.join(", ");
  }
}
