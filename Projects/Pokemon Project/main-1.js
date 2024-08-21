document.querySelector(".search-button").addEventListener("click", async () => {
  // ~ Internal errors check - not shown to the user
  console.log("Search button clicked");
  const input = document
    .querySelector(".search-input")
    .value.trim()
    .toLowerCase();
  const resultContainer = document.querySelector(".search-result");
  resultContainer.innerHTML = "";

  // ? Check the value is not empty
  if (input === "") {
    // ? If value is empty, display a warning to the user
    alert("Invalid name. Please try again.");
    return;
  }

  try {
    // ? Search the Pokemon API
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
    // ? Check if Pokemon is exist
    if (!response.ok) {
      throw new Error("Pokemon is not found");
    }
    const data = await response.json();
    // ? Create a new Pokemon card into the div "pokemon-card"
    const card = document.createElement("div");
    card.className = "pokemon-card";
    // ^ Create a new title into the div "title"
    const title = document.createElement("div");
    title.className = "title";
    // ? Insert the name of the Pokemon in the h2 element
    const name = document.createElement("h2");
    name.textContent = data.name;
    title.appendChild(name);
    // ^ Create a new image into the div "picture"
    const picture = document.createElement("div");
    picture.className = "picture";
    const image = document.createElement("img");
    image.src = data.sprites.front_default;
    picture.appendChild(image);
    // ^ Create a new stats list into the div of "stats"
    const stats = document.createElement("div");
    stats.className = "stats";
    const statsTitleDiv = document.createElement("div");
    // ? Create a new h3 title for Pokemons stats
    statsTitleDiv.className = "title";
    const statsTitle = document.createElement("h3");
    statsTitle.textContent = "Stats";
    statsTitleDiv.appendChild(statsTitle);
    // ? Create a new list item (li) inside the list (ul) for each stat separately
    const statsList = document.createElement("ul");
    data.stats.forEach((stat) => {
      const li = document.createElement("li");
      li.textContent = `${stat.stat.name}: ${stat.base_stat}`;
      statsList.appendChild(li);
    });
    // ? Nesting the items inside the divs
    stats.appendChild(statsTitleDiv);
    stats.appendChild(statsList);
    // ^ Create a new abilities list into the div of "abilities"
    const abilities = document.createElement("div");
    abilities.className = "abilities";
    const abilitiesTitleDiv = document.createElement("div");
    // ? Create a new h3 title for Pokemons abilities
    abilitiesTitleDiv.className = "title";
    const abilitiesTitle = document.createElement("h3");
    abilitiesTitle.textContent = "Abilities";
    abilitiesTitleDiv.appendChild(abilitiesTitle);
    // ? Create a new list item (li) inside the list (ul) for each ability separately
    const abilitiesList = document.createElement("ul");
    data.abilities.forEach((ability) => {
      const li = document.createElement("li");
      li.textContent = ability.ability.name;
      abilitiesList.appendChild(li);
    });
    // ? Nesting the items inside the divs
    abilities.appendChild(abilitiesTitleDiv);
    abilities.appendChild(abilitiesList);
    // ^ Assembling the card element
    card.appendChild(title);
    card.appendChild(picture);
    card.appendChild(stats);
    card.appendChild(abilities);
    // ^ Nesting the card into the result-cntainer div.
    resultContainer.appendChild(card);
  } catch (error) {
    // ~ Internal errors check - not shown to the user
    console.error("Error:", error.message);
    alert(error.message);
  }
});
