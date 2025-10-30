function checkAnswer() {
  let name = document.getElementById("name").value;
  let color = document.getElementById("color").value;
  let message = document.getElementById("message");

  if (name === "Per" && color === "blue") {
    message.textContent = "Hei, Per, liker du blå-farge du?";
  } 
  else if (name === "Lise" && color === "green") {
    message.textContent = "Hei, Lise, liker du grønn-farge du?";
  } 
  else {
    message.textContent = "Hei, " + name + ", liker du " + color + "-farge du?";
  }
}
