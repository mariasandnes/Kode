function sjekkSkuddaar() {
  const aar = Number(document.getElementById("aar").value);
  const resultat = document.getElementById("resultat");

  if (isNaN(aar) || aar <= 0) {
    resultat.innerText = "⚠️ Skriv inn et gyldig årstall!";
    resultat.style.color = "red";
    return;
  }

  if ((aar % 4 === 0 && aar % 100 !== 0) || (aar % 400 === 0)) {
    resultat.innerText = `${aar} er et skuddår! 🎉`;
    resultat.style.color = "green";
  } else {
    resultat.innerText = `${aar} er ikke et skuddår.`;
    resultat.style.color = "blue";
  }
}
