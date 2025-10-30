function leggTilVare() {
  const input = document.getElementById("vare");
  const liste = document.getElementById("liste");
  const vare = input.value.trim();

  if (vare === "") {
    alert("Skriv inn en vare før du legger til!");
    return;
  }

  liste.innerHTML += "- " + vare + "<br>";

  input.value = "";
}
