document.getElementById("leggtil").onClick = function() {
    let tekst = document.getElementById("kommentarfelt").value;
    
    if (this.textContent.trim() === "") return;

    let p = document.createElement("p");
    p.textContent = tekst;

    document.getElementById("kommentarListe").appendChild(p);
    document.getElementById("kommentarfelt").value = "";
}