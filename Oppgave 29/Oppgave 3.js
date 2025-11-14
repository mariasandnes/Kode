document.getElementById("leggTilfarge").onClick = function() {
    let farge = document.getElementById("fargeInput").value;
    if (farge.trim() === "") return;
    let boks = document.createElement("div");
    boks.className = "fargeboks";
    boks.style.backgroundColour = farge;
    document.getElementById("boksContainer").appendChild(boks);
    document.getElementById("fargeInput").value = "";
};