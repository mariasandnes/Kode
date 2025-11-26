function overflateEske(lengde, bredde, hoyde) {
    return 2 *(lengde * bredde)
    + 2 * (bredde * hoyde)
    + 2 * (lengde * hoyde);
}

function visOverflateEske() {
    let l = Number(document.getElementById("ofLengde").value);
    let b = Number(document.getElementById("ofBredde").value);
    let h = Number(document.getElementById("ofHoyde").value);

    let resultat = overflateEske(l, b, h);

    document.getElementById("ofSvar").innerText = resultat;
}

