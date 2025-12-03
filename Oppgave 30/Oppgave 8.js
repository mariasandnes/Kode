function fortolling(dollar, kurs) {

    if (kurs === 0 || kurs === "" || isNaN(kurs)){
        kurs = 10;
    }

    let belopNOK = dollar * kurs;
    let medGebyret = belopNOK + 249;
    let totalpris = medGebyret * 1.12;

    return totalpris;
}

function visPris() {
    let dollar = Number(document.getElementById("dollar").value);
    let kurs = Number(document.getElementById("kurs").value);

    let resultat = fortolling(dollar, kurs);

    document.getElementById("fortollingSvar").innerHTML =
    "totalpris:" + resultat.toFixed(2) + "kr";
}