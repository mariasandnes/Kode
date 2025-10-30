let bruker = "JohnSnow";
let pass = "supaHhemmelige345Greier!";

function loggInn() {

  let inputBruker = document.getElementById("brukernavn").value;
  let inputPass = document.getElementById("passord").value;
  let output = document.getElementById("output");

  output.classList.remove("verified", "refused");

  if (inputBruker === bruker && inputPass === pass) {
    output.innerHTML = `✅ Velkommen! Du er logget inn som <b>${inputBruker}</b>.`;
    output.classList.add("verified");
  } else {
    output.innerHTML = "❌ Brukernavn eller passord var feil!";
    output.classList.add("refused");
  }
}
