function leggTilBok() {
  const input = document.getElementById("bok");
  const liste = document.getElementById("liste");
  const bok = input.value.trim();

  if (bok === "") {
    alert("Skriv inn en bok før du legger til!");
    return;
  }

  liste.innerText += `- ${bok}\n`;

  input.value = "";
}
