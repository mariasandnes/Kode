const body = document.body;
const themeBtns = document.querySelectorAll(".theme-toggle-btn");

function loadTheme() {
  const saved = localStorage.getItem("f1Theme");
  const light = saved === "light";

  if (light) {
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
  }

  themeBtns.forEach((btn) => {
    btn.textContent = light ? "☀" : "☾";
  });
}

loadTheme();

themeBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    body.classList.toggle("light-mode");

    const nowLight = body.classList.contains("light-mode");
    localStorage.setItem("f1Theme", nowLight ? "light" : "dark");

    themeBtns.forEach((b) => {
      b.textContent = nowLight ? "☀" : "☾";
    });
  });
});

// ===================== LOGIN: SAVE NAME =====================

const loginForm = document.getElementById("name-form");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("username").value.trim();
    localStorage.setItem("f1UserName", name || "Guest");
    window.location.href = "index.html";
  });
}

// ===================== NAVBAR GREETING =====================

const greeting = document.getElementById("user-greeting");

if (greeting) {
  const stored = localStorage.getItem("f1UserName") || "Guest";
  greeting.textContent = `Hello ${stored}`;
}