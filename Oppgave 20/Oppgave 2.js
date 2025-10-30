function fraFahrenheit() {
  let f = Number(document.getElementById("fahrenheit").value);

  
  let c = (f - 32) * 5 / 9;
  let k = c + 273.15;

  document.getElementById("resultat").innerHTML = 
    `<p>${f} °F tilsvarer <b>${c.toFixed(2)} °C</b> og <b>${k.toFixed(2)} K</b>.</p>`;
}

function fraCelsius() {
  let c = Number(document.getElementById("celsius").value);


  let f = (c * 9 / 5) + 32;
  let k = c + 273.15;

  document.getElementById("resultat").innerHTML = 
    `<p>${c} °C tilsvarer <b>${f.toFixed(2)} °F</b> og <b>${k.toFixed(2)} K</b>.</p>`;
}
