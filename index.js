const myMain$$ = document.querySelector("main");
const myH1 = document.getElementById("my-h1");
const divBuscador$$ = document.getElementById("div-buscador");
const myInput$$ = document.getElementById("my-input");
const divResultados$$ = document.getElementById("div-Resultados");
const myList$$ = document.getElementById("my-list");

function drawPokemons(pokemon) {
  const liPoke$$ = document.createElement("li");
  const h3Name$$ = document.createElement("h3");
  const imgPoke$$ = document.createElement("img");
  const spanType$$ = document.createElement("span");
  const spanId$$ = document.createElement("span");

  h3Name$$.innerText = pokemon.name;
  imgPoke$$.src = pokemon.image;
  spanType$$.innerText = `Tipo: ${pokemon.type}`;
  spanId$$.innerText = `ID: ${pokemon.id}`;

  h3Name$$.classList.add("h3-name");
  imgPoke$$.classList.add("img-poke");
  spanType$$.classList.add("span-type");
  spanId$$.classList.add("span-id");

  liPoke$$.appendChild(h3Name$$);
  liPoke$$.appendChild(imgPoke$$);
  liPoke$$.appendChild(spanType$$);
  liPoke$$.appendChild(spanId$$);

  myList$$.appendChild(liPoke$$);
}

let pokemonList = [];

async function getPokemons() {
  for (let i = 1; i < 151; i++) {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const result = await resp.json();
    const pokemon = {
      name: result.name,
      image: result.sprites.other["official-artwork"].front_default,
      type: result.types.map((type) => type.type.name).join(", "),
      id: result.id,
    };
    pokemonList.push(pokemon);
  }
}

getPokemons().then(() => {
  pokemonList.forEach((pokemon) => drawPokemons(pokemon));
});

async function searchPokemon(name) {
  const filtredPokemons = pokemonList.filter((pokemon) =>
    pokemon.name.includes(name)
  );
  myList$$.innerHTML = "";
  filtredPokemons.forEach((pokemon) => drawPokemons(pokemon));
}

myInput$$.addEventListener("input", (event) => {
  searchPokemon(event.target.value);
});




// async function getPokemons() {
//   const pokemonList = [];
//   for (let i = 1; i < 151; i++) {
//     const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
//     const result = await resp.json();
//     const pokemon = {
//       name: result.name,
//       image: result.sprites.other["official-artwork"].front_default,
//       type: result.types.map((type) => type.type.name).join(", "),
//       id: result.id,
//     };
//     pokemonList.push(pokemon);
//   }
//   return pokemonList;
// }

// async function searchPokemon(name) {
//   const pokemonList = await getPokemons();
//   const filtredPokemons = pokemonList.filter((pokemon) =>
//     pokemon.name.includes(name)
//   );
//   myList$$.innerHTML = "";
//   filtredPokemons.forEach((pokemon) => drawPokemons(pokemon));
// }

// myInput$$.addEventListener("input", (event) => {
//   searchPokemon(event.target.value);
// });

// getPokemons().then((pokemonList) =>
//   pokemonList.forEach((pokemon) => drawPokemons(pokemon))
// );






// async function getPokemons(){
//     let pokemons = []
//     for (let i = 1 ; i < 150; i++) {
//         const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
//         const pokemonData = await resp.json();

// const pokemon = {
// id: pokemonData.id,
// name: pokemonData.name,
// type: pokemonData.type.map(type => type.type.name).join(", "),
// height: pokemonData.height,
// weight: pokemonData.weight,
// abilities: pokemonData.abilities.map(abilities => abilities.abilities.name).join(", ")
// }
// pokemons.push(pokemon)
// }
// return pokemons
// }

// async function drawPokemons(pokemons) {
//     myList$$.innerHTML = ""
//     for (const pokemon of pokemons) {
//         const pokemonListItem = document.createElement("li")

//         const pokemonId = document.createElement("p")
//         pokemonId.innerHTML = `Id: ${pokemon.id}`
//         pokemonListItem.appendChild(pokemonId)

//         const pokemonName = document.createElement("p")
//         pokemonName.innerHTML = `Nombre: ${pokemon.name}`
//         pokemonListItem.appendChild(pokemonName)

//         const pokemonType = document.createElement("p")
//         pokemonType.innerHTML = `Tipo: ${pokemon.type}`
//         pokemonListItem.appendChild(pokemonType)

//         const pokemonHeight = document.createElement("p")
//         pokemonHeight.innerHTML = `Alture: ${pokemon.height}`
//         pokemonListItem.appendChild(pokemonHeight)

//         const pokemonWeight = document.createElement("p")
//         pokemonWeight.innerHTML = `Peso: ${pokemon.weight}`
//         pokemonListItem.appendChild(pokemonWeight)

//         const pokemonAbilities = document.createElement("p")
//         pokemonAbilities.innerHTML = `Abilidades: ${pokemon.abilities}`
//         pokemonListItem.appendChild(pokemonAbilities)

//         myList$$.appendChild(pokemonListItem)

//     }
// }

// myInput$$.addEventListener("input", async function(event){
//     const pokemons = await getPokemons();
//     const filtredPokemons = pokemons.filter(pokemons =>
//         pokemonData.name.toLowerCase().includes(event.target.value.toLowerCase())
//         )
//         drawPokemons(filtredPokemons)
// })
