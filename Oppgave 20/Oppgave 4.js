function beregnBMI() {
  let hoyde = Number(document.getElementById("hoyde").value);
  let vekt = Number(document.getElementById("vekt").value);


  if (hoyde <= 0 || vekt <= 0) {
    document.getElementById("resultat").innerHTML = 
      "<p>Vennligst skriv inn gyldige verdier for høyde og vekt.</p>";
    return;
  }

  
  let bmi = vekt / (hoyde * hoyde);

  
  let kategori = "";
  if (bmi < 18.5) kategori = "undervekt";
  else if (bmi < 25) kategori = "normal vekt";
  else if (bmi < 30) kategori = "overvekt";
  else kategori = "fedme";

  document.getElementById("resultat").innerHTML = 
    `<p>Basert på din høyde <b>${hoyde} m</b> og din kroppsvekt <b>${vekt} kg</b>, er din beregnede BMI <b>${bmi.toFixed(2)}</b>.</p>
     <p>Det tilsvarer kategorien: <b>${kategori}</b>.</p>`;
}
