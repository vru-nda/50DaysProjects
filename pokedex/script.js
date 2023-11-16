const pokeContainer = document.getElementById("pokedex-container");
const pokeCount = 150;
const colors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaedal",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const mainTypes = Object.keys(colors);

const fetchPokemons = async () => {
  for (let i = 1; i <= pokeCount; i++) {
    await fetchData(i);
  }
};

const fetchData = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const response = await fetch(url);
  const data = await response.json();
  createPokemonCard(data);
};

const createPokemonCard = (data) => {
  const pokemonEle = document.createElement("div");
  pokemonEle.classList.add("pokemon");

  const name = data.name[0].toUpperCase() + data.name.slice(1);
  const id = data.id.toString().padStart(3, "0");
  const pokeTypes = data.types.map((type) => type.type.name);
  const type = mainTypes.find((item) => pokeTypes.indexOf(item) > -1);
  const color = colors[type];
  pokemonEle.style.backgroundColor = color;

  const pokemonInnerHtml = `
        <div class="img-container">
          <img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png alt="bulbasur">
        </div>
        <div class="info">
          <span class="number">#${id}</span>
          <h3 class="name">${name}</h3>
          <small class="type">Type: <span>${type}</span></small>
        </div>
  `;

  pokemonEle.innerHTML = pokemonInnerHtml;
  pokeContainer.appendChild(pokemonEle);
};

fetchPokemons();
