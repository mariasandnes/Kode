function arealSirkel(radius) {
    return Math.PI * radius;
}

function visArealSirkel() {
    let r = Number(document.getElementById("sirkelRadius").value);

    let resultat = arealSirkel(r);

    document.getElementById("sirkelSvar").innerHTML = "Areal:" + resultat;
}