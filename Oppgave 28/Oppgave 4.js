function beregnBMI() {
  const vekt = Number(document.getElementById("vekt").value);
  const hoyde = Number(document.getElementById("hoyde").value);
  const resultat = document.getElementById("resultat");

  if (vekt <= 0 || hoyde <= 0 || isNaN(vekt) || isNaN(hoyde)) {
    resultat.innerText = "⚠️ Vennligst skriv inn gyldige tall for både vekt og høyde.";
    resultat.style.color = "red";
    return;
  }

  const bmi = vekt / (hoyde * hoyde);
  let klasse = "";

  if (bmi < 18.5) {
    klasse = "Lett undervekt";
  } 
  else if (bmi < 25) {
    klasse = "Normalvekt";
  } 
  else if (bmi < 30) {
    klasse = "Lett overvekt";
  } 
  else {
    klasse = "Fedme";
  }

  resultat.style.color = "black";
  resultat.innerHTML = `Din BMI er <b>${bmi.toFixed(1)}</b>. Dette klassifiseres som <b>${klasse}</b>.`;
}
