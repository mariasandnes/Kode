function beregnKarakter() 
{
  let oppg1 = Number(document.getElementById("oppg1").value);
  let oppg2 = Number(document.getElementById("oppg2").value);
  let oppg3 = Number(document.getElementById("oppg3").value);
  let oppg4 = Number(document.getElementById("oppg4").value);
  let oppg5 = Number(document.getElementById("oppg5").value);
  let snitt = (oppg1 + oppg2 + oppg3 + oppg4 + oppg5) / 5;
  let karakter = "";

  if (snitt >= 5.5) karakter = "A";
  else if (snitt >= 4.5) karakter = "B";
  else if (snitt >= 3.5) karakter = "C";
  else if (snitt >= 2.5) karakter = "D";
  else if (snitt >= 1.5) karakter = "E";
  else karakter = "F";

  document.getElementById("resultat").innerHTML =
    `Studenten fikk <b>${snitt.toFixed(2)}</b> i snitt. 
     Dette tilsvarer karakteren <b>${karakter}</b>.`;
}
