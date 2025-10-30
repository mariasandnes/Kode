function beregnPris() {
  const antVoksne = document.getElementById("voksne").value;
  const antBarn = document.getElementById("barn").value;
  const antHonnor = document.getElementById("honnor").value;
  const utskrift = document.getElementById("utskrift");


  utskrift.classList.remove("errorStyle");

  if (antVoksne === "" || antBarn === "" || antHonnor === "") {
    utskrift.innerHTML = "Vennligst fyll inn alle felter.";
    utskrift.classList.add("errorStyle");
    return;
  }

  const v = Number(antVoksne);
  const b = Number(antBarn);
  const h = Number(antHonnor);

  const prisVoksen = 100;
  const prisBarn = 50;
  const prisHonnor = 60;
  let total = (v * prisVoksen) + (b * prisBarn) + (h * prisHonnor);
  const reiser = document.getElementsByName("reise");
  let erTurRetur = false;
  for (let i = 0; i < reiser.length; i++) {
    if (reiser[i].checked && reiser[i].value === "turretur") {
      erTurRetur = true;
      break;
    }
  }

  if (erTurRetur) {
    total = total * 0.75;
  }

  utskrift.innerHTML = `Totalprisen for ${v} voksne, ${b} barn og ${h} honnør, er <b>${total.toFixed(2)}</b> kroner. God tur!`;
}
