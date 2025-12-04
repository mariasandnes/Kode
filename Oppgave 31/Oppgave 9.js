function visTall() {
    let tekst = "";
    let x = 12;  

    while (x <= 98) {   
        tekst += x + "<br>";
        x = x + 5;      
    }

    document.getElementById("resultat").innerHTML = tekst;
}
