function volumEske(lengde, bredde, hoyde) {
    return lengde * bredde * hoyde;
}

function visVolumEske() {
    let l = Number(document.getElementById("eskeLengde").value);
    let b = Number(document.getElementById("eskeBredde").value);
    let h = Number(document.getElementById("eskeHoyde").value);

    let resultat = volumEske(l, b, h);
    
    document.getElementById("eskeSvar").innerHTML = "Volum:" + resultat;
}