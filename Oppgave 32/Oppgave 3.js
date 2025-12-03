let spillere = [
    { fornavn: "Bård",    etternavn: "Finne",    draktnummer: 11, posisjon: "Angrep",   fodselsaar: 1995 },
    { fornavn: "Markus",  etternavn: "Larsen",   draktnummer: 1,  posisjon: "Keeper",   fodselsaar: 1992 },
    { fornavn: "Jonas",   etternavn: "Solheim",  draktnummer: 4,  posisjon: "Forsvar",  fodselsaar: 1998 },
    { fornavn: "Emil",    etternavn: "Berge",    draktnummer: 5,  posisjon: "Forsvar",  fodselsaar: 1997 },
    { fornavn: "Sondre",  etternavn: "Myklebust",draktnummer: 6,  posisjon: "Midtbane", fodselsaar: 1996 },
    { fornavn: "Andreas", etternavn: "Olsen",    draktnummer: 7,  posisjon: "Midtbane", fodselsaar: 1999 },
    { fornavn: "Kristian",etternavn: "Hauge",    draktnummer: 8,  posisjon: "Midtbane", fodselsaar: 2000 },
    { fornavn: "Mats",    etternavn: "Nilsen",   draktnummer: 2,  posisjon: "Forsvar",  fodselsaar: 1994 },
    { fornavn: "Eirik",   etternavn: "Dahl",     draktnummer: 9,  posisjon: "Angrep",   fodselsaar: 1993 },
    { fornavn: "Håkon",   etternavn: "Johansen", draktnummer: 10, posisjon: "Angrep",   fodselsaar: 2001 },
    { fornavn: "Stian",   etternavn: "Moen",     draktnummer: 3,  posisjon: "Forsvar",  fodselsaar: 1990 }
];

function visAlleSpillere() {
    let svar = "";

    for (let i = 0; i < spillere.length; i++) {
        let s = spillere[i];
        svar += s.fornavn + " " + s.etternavn +
                " har draktnummer " + s.draktnummer +
                ", og er " + s.posisjon.toLowerCase() +
                ". Han er født i " + s.fodselsaar + ".<br>";
    }

    document.getElementById("alleSpillere").innerHTML = svar;
}

function visAngrepsspillere() {
    let svar = "";

    for (let i = 0; i < spillere.length; i++) {
        let s = spillere[i];

        if (s.posisjon === "Angrep") {
            svar += s.fornavn + " " + s.etternavn +
                    " er angrepsspiller og har draktnummer " +
                    s.draktnummer + ".<br>";
        }
    }

    document.getElementById("angrep").innerHTML = svar;
}

function visEtterPosisjon() {
    let valgt = document.getElementById("posisjonValg").value;
    let svar = "";

    for (let i = 0; i < spillere.length; i++) {
        let s = spillere[i];

        if (s.posisjon === valgt) {
            svar +=
                '<div class="spiller-card">' +
                    '<img src="https://via.placeholder.com/200x120" alt="Spiller">' +
                    '<h3>' + s.fornavn + ' ' + s.etternavn + '</h3>' +
                    '<p>Draktnummer: ' + s.draktnummer + '</p>' +
                    '<p>Posisjon: ' + s.posisjon + '</p>' +
                    '<p>Født: ' + s.fodselsaar + '</p>' +
                '</div>';
        }
    }

    document.getElementById("posisjonResultat").innerHTML = svar;
}
