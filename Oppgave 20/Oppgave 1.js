function regnUt() {
  let inputverdi = document.getElementById("input").value;
  let tall = Number(inputverdi);

  let halvparten = tall / 2;
  let dobbelt = tall * 2;
  let trippelt = tall * 3;
  let kvadrat = tall * tall;

  document.getElementById("resultat").innerHTML =
    `<p>Halvparten av tallet er: <b>${halvparten}</b></p>
     <p>Det dobbelte av tallet er: <b>${dobbelt}</b></p>
     <p>Det tredobbelte av tallet er: <b>${trippelt}</b></p>
     <p>Tallet ganget med seg selv er: <b>${kvadrat}</b></p>`;
}
