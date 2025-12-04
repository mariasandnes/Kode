let duckFamilie = [
    {
        fornavn: "Donald",
        etternavn: "Duck",
        adresse: "Andebyveien 1",
        poststed: "Andeby",
        telefon: { privat: "11111111", jobb: "22222222" },
        epost: { privat: "donald@duck.no", jobb: "donald@andeby.no" }
    },
    {
        fornavn: "Ole",
        etternavn: "Duck",
        adresse: "Andebyveien 1",
        poststed: "Andeby",
        telefon: { privat: "33333333", jobb: "44444444" },
        epost: { privat: "ole@duck.no", jobb: "ole@andeby.no" }
    },
    {
        fornavn: "Dole",
        etternavn: "Duck",
        adresse: "Andebyveien 1",
        poststed: "Andeby",
        telefon: { privat: "55555555", jobb: "66666666" },
        epost: { privat: "dole@duck.no", jobb: "dole@andeby.no" }
    },
    {
        fornavn: "Doffen",
        etternavn: "Duck",
        adresse: "Andebyveien 1",
        poststed: "Andeby",
        telefon: { privat: "77777777", jobb: "88888888" },
        epost: { privat: "doffen@duck.no", jobb: "doffen@andeby.no" }
    }
];

function visAlt() {
    let svar = "";

    for (let i = 0; i < duckFamilie.length; i++) {
        let p = duckFamilie[i];

        svar +=
            p.fornavn + " " + p.etternavn + "<br>" +
            "Adresse: " + p.adresse + ", " + p.poststed + "<br>" +
            "Telefon privat: " + p.telefon.privat + "<br>" +
            "Telefon jobb: " + p.telefon.jobb + "<br>" +
            "Epost privat: " + p.epost.privat + "<br>" +
            "Epost jobb: " + p.epost.jobb + "<br><br>";
    }

    document.getElementById("alt").innerHTML = svar;
}

function visPrivatEpost() {
    let svar = "";

    for (let i = 0; i < duckFamilie.length; i++) {
        let p = duckFamilie[i];
        svar += "Epost-adressen til " + p.fornavn +
                " er " + p.epost.privat + "<br>";
    }

    document.getElementById("epost").innerHTML = svar;
}

function visJobbTelefon() {
    let svar = "";

    for (let i = 0; i < duckFamilie.length; i++) {
        let p = duckFamilie[i];
        svar += p.fornavn + " " + p.etternavn +
                " – jobbtelefon: " + p.telefon.jobb + "<br>";
    }

    document.getElementById("telefon").innerHTML = svar;
}

