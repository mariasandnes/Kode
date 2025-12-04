let mineDyr = [
    {
        navn: "Milli Vanilli",
        fodselsAar: 2020,
        mor: "Luna",
        far: "Milo",
        rase: "Huskat"
    },
    {
        navn: "RatKillah",
        fodselsAar: 2019,
        mor: "Rattatoui",
        far: "El Chapo",
        rase: "Rotte"
    },
    {
        navn: "Snøfnugg",
        fodselsAar: 2021,
        mor: "Bella",
        far: "Simba",
        rase: "Maine Coon"
    },
    {
        navn: "Pusur",
        fodselsAar: 2018,
        mor: "Mimi",
        far: "Tiger",
        rase: "Huskat"
    },
    {
        navn: "Nala",
        fodselsAar: 2022,
        mor: "Lily",
        far: "Odin",
        rase: "Bengal"
    }
];

function visFodselsaar() {
    let svar = "";

    for (let i = 0; i < mineDyr.length; i++) {
        svar += mineDyr[i].navn + " ble født " + mineDyr[i].fodselsAar + "<br>";
    }

    document.getElementById("fodselsaar").innerHTML = svar;
}

function visForeldre() {
    let svar = "";

    for (let i = 0; i < mineDyr.length; i++) {
        svar += mineDyr[i].navn +
            " sin mor heter " + mineDyr[i].mor +
            ", og faren heter " + mineDyr[i].far + "<br>";
    }

    document.getElementById("foreldre").innerHTML = svar;
}

function visAlder() {
    let svar = "";
    let aarNaa = 2025;

    for (let i = 0; i < mineDyr.length; i++) {
        let alder = aarNaa - mineDyr[i].fodselsAar;
        svar += mineDyr[i].navn + " er nå " + alder + " år.<br>";
    }

    document.getElementById("alder").innerHTML = svar;
}
