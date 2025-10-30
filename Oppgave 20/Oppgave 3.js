function fraKmH() {
  let kmh = Number(document.getElementById("kmh").value);
  
  let mph = kmh / 1.60934;

  document.getElementById("resultat").innerHTML = 
    `<p>${kmh} km/h tilsvarer <b>${mph.toFixed(2)} mph</b>.</p>`;
}

function fraMph() {
  let mph = Number(document.getElementById("mph").value);

  let kmh = mph * 1.60934;

  document.getElementById("resultat").innerHTML = 
    `<p>${mph} mph tilsvarer <b>${kmh.toFixed(2)} km/h</b>.</p>`;
}
