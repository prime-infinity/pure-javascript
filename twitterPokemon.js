//trick question from twitter

const axios = require("axios");
const pokemon = [];

const loadPokemon = async () => {
  try {
    const { data } = await axios("https://pokeapi.co/api/v2/pokemon?limit=5");
    pokemon = data.results;
  } catch (error) {
    console.log(error);
  }
};
loadPokemon();
console.log(pokemon);
