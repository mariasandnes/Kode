function lagInitialer(fornavn, mellomnavn, etternavn) {
    let f = fornavn.charAt(0).toUpperCase();
    let m = mellomnavn.charAt(0).toUpperCase();

    return f + ". " + m + ". " + etternavn;
}

function visInitialer() {
    let f = document.getElementById("fornavn").value;
    let m = document.getElementById("mellomnavn").value;
    let e = document.getElementById("etternavn").value;

    let resultat = lagInitialer(f, m, e);

    document.getElementById("navnSvar").innerText = resultat;
}