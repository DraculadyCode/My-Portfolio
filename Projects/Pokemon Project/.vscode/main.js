document.querySelector(".search-button").addEventListener("click", async () => {
  console.log("Search button clicked");
  const input = document
    .querySelector(".search-input")
    .value.trim()
    .toLowerCase();
  const resultContainer = document.querySelector(".search-result");
  resultContainer.innerHTML = "";

  if (input === "") {
    alert("Invalid name. Please try again.");
    return;
  }

  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    if (!response.ok) {
      throw new Error("Pokemon is not found");
    }
    const data = await response.json();

    // Clone the template card
    const templateCard = document.querySelector(".pokemon-card");
    const card = templateCard.cloneNode(true);
    card.style.display = "block"; // Ensure the cloned card is visible

    const nameElement = card.querySelector(".title h2");
    nameElement.textContent = data.name;

    const imageElement = card.querySelector(".picture img");
    imageElement.src = data.sprites.front_default;

    const statsList = card.querySelector(".stats ul");
    statsList.innerHTML = "";
    data.stats.forEach((stat) => {
      const li = document.createElement("li");
      li.textContent = `${stat.stat.name}: ${stat.base_stat}`;
      statsList.appendChild(li);
    });

    const abilitiesList = card.querySelector(".abilities ul");
    abilitiesList.innerHTML = "";
    data.abilities.forEach((ability) => {
      const li = document.createElement("li");
      li.textContent = ability.ability.name;
      abilitiesList.appendChild(li);
    });

    resultContainer.appendChild(card);
  } catch (error) {
    console.error("Error:", error.message);
    alert(error.message);
  }
});
