var container = document.getElementById('pokemon_container');
var counter = 0;
var random = 1;
var array = [];
/**
 * Function to search for the pokemon's in the API.
 */
function searchPokemons(){
  while (counter<6){
    createRandomValue();
    if (array.indexOf(random)==-1){
      fetch('https://pokeapi.co/api/v2/pokemon/'+random+'/')
      .then(response => response.json())
      .then(data => {
          createPokemon(data); 
      })
      appendToArray(random); 
    }
  }
  
}
/**
 * Function to get a random value and overwrite the global random integer.
 */
function createRandomValue(){
  random =Math.floor(Math.random()*800)+1;
  console.log(random);
}
/**
 * It is a function to create the pokemon cards based on a json file.
 * @param {json} data 
 */
function createPokemon(data){
  const card = document.createElement('div');
  card.classList.add('pokemon_div');
  const poke_name = document.createElement('p');
  poke_name.classList.add('Poke_name');
  poke_name.textContent = data.name;
  card.appendChild(poke_name);
  container.appendChild(card);
}
/**
 * It is a function to append to a global Array.
 * This array is meant to check if the pokemon has already been selected.
 * @param {integer} random 
 */
function appendToArray(random){
  array[counter]=random;
  counter++;
}
searchPokemons();