var container = document.getElementById('.container');
function searchPokemons(){
  for (k = 1 ; k < 7 ; k++ ){
    var random =Math.floor(Math.random()*101)+1;
    fetch('https://pokeapi.co/api/v2/pokemon/'+random+'/')
  .then(response => response.json())
  .then(data => console.log(data))
  }
}

searchPokemons();