function bestillPizza() 
{
  const storrelseRadios = document.getElementsByName("storrelse");
  let storrelse = "";
  for (let i = 0; i < storrelseRadios.length; i++) {
    if (storrelseRadios[i].checked) {
      storrelse = storrelseRadios[i].value;
      break;
    }
  }

  const fyllRadios = document.getElementsByName("fyll");
  let fyll = "";
  for (let i = 0; i < fyllRadios.length; i++) {
    if (fyllRadios[i].checked) {
      fyll = fyllRadios[i].value;
      break;
    }
  }

  const utskrift = document.getElementById("utskrift");
  utskrift.innerHTML = `Din bestilling av 1 ${storrelse} ${fyll}-pizza blir levert til deg innen 59 minutter!<br>Takk for bestillingen.`;
}
