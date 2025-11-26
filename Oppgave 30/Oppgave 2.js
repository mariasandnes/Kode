function storstTall (tall1, tall2) {
    if (tall1 > tall2) {
        return tall1;
    } else if (tall2 > tall1) {
        return tall2;
    } else {
        return "Tallene er like";
    }
}

function sjekkStorstTall() {
    let t1 = Number(document.getElementById("tall1").value);
    let t2 = Number(document.getElementById("tall2").value);

    let resultat = storstTall(t1, t2);

    document.getElementById("storstSvar").innerHTML = resultat;
}