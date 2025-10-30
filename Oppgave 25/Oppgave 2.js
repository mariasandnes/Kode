function kalkuler() {
  let tall1 = Number(document.getElementById("tall1").value);
  let tall2 = Number(document.getElementById("tall2").value);
  let operator = document.getElementById("operator").value;
  let resultat = 0;
  let melding = document.getElementById("resultat");


  if (operator === "+") {
    resultat = tall1 + tall2;
  } else if (operator === "-") {
    resultat = tall1 - tall2;
  } else if (operator === "*") {
    resultat = tall1 * tall2;
  } else if (operator === "/") {
    if (tall2 === 0) {
      melding.innerHTML = "Du kan ikke dele på 0!";
      return;
    }
    resultat = tall1 / tall2;
  }

  melding.innerHTML = `Resultat: <b>${tall1} ${operator} ${tall2} = ${resultat}</b>`;
}
