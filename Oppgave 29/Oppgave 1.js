document.getElementById("knapp").onclick = function() {
    let tilfeldigTall = Math.floor(Math.random()* 100) + 1;
    let li = document.createElement("li");
    li.textContent = tilfeldigTall;
    document.getElementById("liste").appendChild(li);
}

/* function leggtilli(){ */
let tilfeldigTall = Math.floor(Math.random()* 100) + 1;
    let li = document.createElement("li");
    li.textContent = tilfeldigTall;
    document.getElementById("liste").appendChild(li);
//}
