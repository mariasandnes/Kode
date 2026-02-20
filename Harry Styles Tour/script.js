const filterSelect = document.getElementById("filter");
const cards = Array.from(document.querySelectorAll(".city-card"));

function applyFilters() {
  const selected = filterSelect.value;

  cards.forEach(card => {
    const tags = (card.dataset.tags || "").toLowerCase();

    if (selected === "all") {
      card.style.display = "block";
    } else {
      card.style.display = tags.includes(selected) ? "block" : "none";
    }
  });
}

if (filterSelect) {
  filterSelect.addEventListener("change", applyFilters);
}