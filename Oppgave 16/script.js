function showName() {
  let first = document.getElementById("first").value;
  let middle = document.getElementById("middle").value;
  let last = document.getElementById("last").value;

  let fullName = first + " " + middle + " " + last;

  document.getElementById("output").textContent = fullName;
}
