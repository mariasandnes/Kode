function visWhile() {
    let tekst = "";
    let x = 1;  

    while (x <= 7) {  
        tekst += "Jeg er tall nummer " + x + "<br>";
        x++;           
    }

    document.getElementById("resultat").innerHTML = tekst;
}
