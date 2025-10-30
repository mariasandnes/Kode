function byttFarge() {
  const r = document.getElementById("r").value;
  const g = document.getElementById("g").value;
  const b = document.getElementById("b").value;

  const farge = `rgb(${r}, ${g}, ${b})`;

  document.body.style.backgroundColor = farge;

  document.getElementById("preview").innerHTML = "Bakgrunnsfarge: " + farge;
}

function visVerdi(id) {
  const slider = document.getElementById(id);
  const span = document.getElementById(id + "-verdi");
  span.innerText = slider.value;
}
