let teller = 0; 

function tellKlikk() {
  const felt = document.getElementById("visning");

  teller++;

  felt.value = teller;

  felt.classList.toggle("aktiv");
}
