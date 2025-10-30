function beregnLonn() {
  const timepris = Number(document.getElementById("timepris").value);
  const timer = Number(document.getElementById("timer").value);
  const resultat = document.getElementById("resultat");

  resultat.innerHTML = "";
  resultat.style.color = "black";

  if (isNaN(timepris) || isNaN(timer) || timepris === 0 || timer === 0) {
    resultat.style.color = "red";
    resultat.innerHTML = "❌ Vennligst skriv inn gyldige tallverdier for timepris og timer.";
    return;
  }

  if (timepris < 0) {
    resultat.style.color = "red";
    resultat.innerHTML = "❌ Timeprisen kan ikke være negativ!";
    return;
  }

  if (timer < 0) {
    resultat.style.color = "red";
    resultat.innerHTML = "❌ Antall timer kan ikke være negativt!";
    return;
  }

  const lon = timepris * timer;

  resultat.style.color = "green";
  resultat.innerHTML = `✅ Du tjente <b>${lon.toFixed(2)} kr</b> (${timer} timer × ${timepris} kr/t).`;
}
