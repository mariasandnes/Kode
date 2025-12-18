const body = document.body;
const themeBtns = document.querySelectorAll(".theme-toggle-btn");

function loadTheme() {
  const saved = localStorage.getItem("f1Theme");
  const light = saved === "light";

  if (light) body.classList.add("light-mode");
  else body.classList.remove("light-mode");

  themeBtns.forEach(btn => {
    btn.textContent = light ? "☀" : "☾";
  });
}

function toggleTheme() {
  body.classList.toggle("light-mode");
  const nowLight = body.classList.contains("light-mode");
  localStorage.setItem("f1Theme", nowLight ? "light" : "dark");

  themeBtns.forEach(btn => {
    btn.textContent = nowLight ? "☀" : "☾";
  });
}

loadTheme();

themeBtns.forEach(btn => {
  btn.addEventListener("click", toggleTheme);
});

const loginForm = document.getElementById("name-form");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("username").value.trim();
    localStorage.setItem("f1UserName", name || "Guest");
    window.location.href = "index.html";
  });
}

const greeting = document.getElementById("user-greeting");

if (greeting) {
  const stored = localStorage.getItem("f1UserName") || "Guest";
  greeting.textContent = `Hallo ${stored}`;
}

const tracksGrid = document.getElementById("tracks-grid");
const tracksStatus = document.getElementById("tracks-status");

const SEASON_YEAR = 2024;
const CIRCUITS_URL = `https://api.jolpi.ca/ergast/f1/${SEASON_YEAR}/circuits.json?limit=1000`;

const COUNTRY_TO_CODE = {
  "United Kingdom": "GB",
  "Great Britain": "GB",
  "USA": "US",
  "United States": "US",
  "United States of America": "US",
  "UAE": "AE",
  "United Arab Emirates": "AE",
  "Netherlands": "NL",
  "France": "FR",
  "Spain": "ES",
  "Italy": "IT",
  "Germany": "DE",
  "Austria": "AT",
  "Belgium": "BE",
  "Monaco": "MC",
  "Canada": "CA",
  "Mexico": "MX",
  "Brazil": "BR",
  "Japan": "JP",
  "China": "CN",
  "Australia": "AU",
  "Singapore": "SG",
  "Qatar": "QA",
  "Saudi Arabia": "SA",
  "Bahrain": "BH",
  "Azerbaijan": "AZ",
  "Hungary": "HU"
};

function getCountryCode(countryName) {
  return COUNTRY_TO_CODE[countryName] || "UN";
}

function safeText(v, fallback = "—") {
  if (v === undefined || v === null) return fallback;
  const s = String(v).trim();
  return s.length ? s : fallback;
}

function trackImagePath(circuitId) {
  return `images/tracks/${circuitId}.png`;
}

function flagImagePath(countryCode) {
  return `images/flags/${countryCode}.png`;
}

const EXTRA_TRACK_INFO = {
 
  bahrain:        { laps: "57", length: "5.4 KM", record: "1:30:252", winner2024: "Oscar Piastri" },
  
  jeddah:         { laps: "50", length: "6.1 KM", record: "1:30:734", winner2024: "Oscar Piastri" },
  
  albert_park:    { laps: "58", length: "5.2 KM", record: "1:20:260", winner2024: "Lando Norris" },
 
  suzuka:         { laps: "53", length: "5.8 KM", record: "1:30:965", winner2024: "Max Verstappen" },
  
  shanghai:       { laps: "61", length: "5.0 KM", record: "1:41:905", winner2024: "Lando Norris" },
  
  miami:          { laps: "57", length: "5.4 KM", record: "1:29:748", winner2024: "Oscar Piastri" },
  
  imola:          { laps: "63", length: "4.9 KM", record: "1.14.411", winner2024: "Max Verstappen" },
 
  monaco:         { laps: "78", length: "3.3 KM", record: "1:12:909", winner2024: "Lando Norris" },
  
  gilles_villeneuve:{ laps: "70", length: "4.3 KM", record: "1:13:078", winner2024: "Max Verstappen" },
  
  catalunya:      { laps: "66", length: "4.6 KM", record: "1:15:743", winner2024: "Oscar Piastri" },
  
  red_bull_ring:  { laps: "71", length: "4.3 KM", record: "1:05:619", winner2024: "Lando Norris" },
  
  silverstone:    { laps: "52", length: "5.8 KM", record: "1:27:097", winner2024: "Oscar Piastri" },
  
  hungaroring:    { laps: "70", length: "4.3 KM", record: "1:16:627", winner2024: "Lando Norris" },
  
  spa:            { laps: "44", length: "7.0 KM", record: "1:46:286", winner2024: "Oscar Piastri" },
 
  zandvoort:      { laps: "72", length: "4.2 KM", record: "1:11:097", winner2024: "Oscar Piastri" },
  
  monza:          { laps: "53", length: "5.7 KM", record: "1:21:046", winner2024: "Max Verstappen" },
  
  baku:           { laps: "51", length: "6.0 KM", record: "1:43:009", winner2024: "Max Verstappen" },
  
  marina_bay:     { laps: "61", length: "5.0 KM", record: "1:41:905", winner2024: "George Russell" },
  
  americas:       { laps: "56", length: "5.5 KM", record: "1:36:169", winner2024: "Max Verstappen" },
  
  rodriguez:      { laps: "71", length: "4.3 KM", record: "1:17:774", winner2024: "Lando Norris" },
  
  interlagos:     { laps: "71", length: "4.3 KM", record: "1:10:540", winner2024: "Lando Norris" },
  
  las_vegas:      { laps: "50", length: "6.1 KM", record: "1:35:490", winner2024: "Max Verstappen" },
  
  losail:         { laps: "57", length: "5.3 KM", record: "1:23:196", winner2024: "Max Verstappen" },
  
  yas_marina:     { laps: "58", length: "5.2 KM", record: "1:26:103", winner2024: "Max Verstappen" }
};


function createTrackCard(circuit) {
  const circuitId = circuit.circuitId;
  const name = circuit.circuitName;
  const country = circuit.Location?.country;
  const locality = circuit.Location?.locality;
  const wiki = circuit.url;

  const code = getCountryCode(country);

  const extra = EXTRA_TRACK_INFO[circuitId] || {};
  const laps = safeText(extra.laps);
  const length = safeText(extra.length);
  const record = safeText(extra.record);
  const winner2024 = safeText(extra.winner2024);

  const card = document.createElement("article");
  card.className = "track-card";

  const imgWrap = document.createElement("div");
  imgWrap.className = "track-image";

  const img = document.createElement("img");
  img.src = trackImagePath(circuitId);
  img.alt = `${name} track`;
  img.loading = "lazy";

  img.onerror = () => {
    img.remove();
    imgWrap.classList.add("track-image--placeholder");
    imgWrap.innerHTML = `<div class="track-placeholder-text">Bilde mangler</div>`;
  };

  imgWrap.appendChild(img);

  const panel = document.createElement("div");
  panel.className = "track-panel";

  const topRow = document.createElement("div");
  topRow.className = "track-toprow";

  const flag = document.createElement("div");
  flag.className = "track-flag";

  const flagImg = document.createElement("img");
  flagImg.src = flagImagePath(code);
  flagImg.alt = `${code} flag`;
  flagImg.loading = "lazy";

  flagImg.onerror = () => {
    flagImg.remove();
    flag.classList.add("track-flag--fallback");
    flag.textContent = code;
  };

  flag.appendChild(flagImg);

  const namePill = document.createElement("div");
  namePill.className = "track-namepill";
  namePill.textContent = name;

  topRow.appendChild(flag);
  topRow.appendChild(namePill);

  const details = document.createElement("div");
  details.className = "track-details";

  details.innerHTML = `
    <div class="track-detail-row"><span>Land:</span> <span>${safeText(country)}</span></div>
    <div class="track-detail-row"><span>By:</span> <span>${safeText(locality)}</span></div>
    <div class="track-detail-row"><span>Antall runder:</span> <span class="arial-num">${laps}</span></div>
    <div class="track-detail-row"><span>Lengde:</span> <span class="arial-num">${length}</span></div>
    <div class="track-detail-row"><span>Lap record:</span> <span class="arial-num">${record}</span></div>
    <div class="track-detail-row"><span>Vinner 2025:</span> <span>${winner2024}</span></div>
    <a class="track-link" href="${wiki}" target="_blank" rel="noopener">Les mer</a>
  `;

  panel.appendChild(topRow);
  panel.appendChild(details);

  card.appendChild(imgWrap);
  card.appendChild(panel);

  return card;
}

async function loadCircuits() {
  if (!tracksGrid || !tracksStatus) return;

  tracksStatus.textContent = `Henter baner fra API (${SEASON_YEAR})...`;
  tracksGrid.innerHTML = "";

  try {
    const res = await fetch(CIRCUITS_URL);
    if (!res.ok) throw new Error("HTTP: " + res.status);

    const data = await res.json();
    const circuits = data?.MRData?.CircuitTable?.Circuits;

    if (!Array.isArray(circuits) || circuits.length === 0) {
      tracksStatus.textContent = "Fant ingen baner i API-responsen.";
      return;
    }

    tracksStatus.textContent = `Fant ${circuits.length} baner for ${SEASON_YEAR}.`;

    circuits.forEach(c => {
      tracksGrid.appendChild(createTrackCard(c));
    });

  } catch (err) {
    console.error(err);
    tracksStatus.textContent =
      "Kunne ikke hente baner. Sjekk at du bruker Live Server og at du har internett.";
  }
}

loadCircuits();