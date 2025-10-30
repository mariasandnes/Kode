let rettTall = Math.floor(Math.random() * 101);
console.log("Hemmelig tall er:", rettTall);

function gjett() {
  const input = document.getElementById("tall");
  const utskrift = document.getElementById("utskrift");
  const brukerTall = Number(input.value);

  utskrift.classList.remove("win", "loss");

  if (isNaN(brukerTall) || brukerTall < 0 || brukerTall > 100) {
    utskrift.innerHTML = "⚠️ Skriv inn et tall mellom 0 og 100.";
    utskrift.classList.add("loss");
    return;
  }

  if (brukerTall === rettTall) {
    utskrift.innerHTML = `WUHUU!! Du gjettet rett!! Tallet er ${rettTall}! 🎉`;
    utskrift.classList.add("win");
  } else if (brukerTall > rettTall) {
    utskrift.innerHTML = `Du gjettet på ${brukerTall}. Dette er for høyt. Prøv igjen!`;
    utskrift.classList.add("loss");
  } else {
    utskrift.innerHTML = `Du gjettet på ${brukerTall}. Dette er for lavt. Prøv igjen!`;
    utskrift.classList.add("loss");
  }

  input.value = "";
  input.focus();
}
