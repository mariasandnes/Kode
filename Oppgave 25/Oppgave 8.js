function konverter() {
  const belop = Number(document.getElementById("belop").value);
  const valuta = document.getElementById("valuta").value;
  const resultat = document.getElementById("resultat");


  if (isNaN(belop) || belop <= 0) {
    resultat.style.color = "red";
    resultat.innerHTML = "❌ Vennligst skriv inn et gyldig beløp større enn 0.";
    return;
  }

  let kurs = 1; 
  if (valuta === "USD") kurs = 0.095;
  if (valuta === "EUR") kurs = 0.085;
  if (valuta === "NOK") kurs = 1;

  const omregnet = belop * kurs;

  resultat.style.color = "black";
  resultat.innerHTML = `💡 ${belop.toFixed(2)} NOK tilsvarer <b>${omregnet.toFixed(2)} ${valuta}</b>.`;
}
