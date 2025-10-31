function skrivOmDato() {
  const input = document.getElementById("dato").value.trim();
  const resultat = document.getElementById("resultat");

  if (input.length !== 5 || input.charAt(2) !== "-") {
    resultat.innerText = "⚠️ Skriv inn dato på formen dd-mm (f.eks. 05-12).";
    resultat.style.color = "red";
    return;
  }

  const dag = input.slice(0, 2);
  const mndTall = input.slice(3, 5);

  let mndTekst = "";

  switch (mndTall) {
    case "01": mndTekst = "januar"; break;
    case "02": mndTekst = "februar"; break;
    case "03": mndTekst = "mars"; break;
    case "04": mndTekst = "april"; break;
    case "05": mndTekst = "mai"; break;
    case "06": mndTekst = "juni"; break;
    case "07": mndTekst = "juli"; break;
    case "08": mndTekst = "august"; break;
    case "09": mndTekst = "september"; break;
    case "10": mndTekst = "oktober"; break;
    case "11": mndTekst = "november"; break;
    case "12": mndTekst = "desember"; break;
    default:
      resultat.innerText = "❌ Ugyldig måned! Bruk tall mellom 01 og 12.";
      resultat.style.color = "red";
      return;
  }

  resultat.style.color = "black";
  resultat.innerText = `Du skrev inn ${Number(dag)}. ${mndTekst}.`;
}
