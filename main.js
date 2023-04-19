import api from "./components/api.js";
let id = 0;
let imput = document.querySelector("#idPokemon");

imput.addEventListener("input", function(){
    id =Number(imput.value);
    console.log(id);
    api.getPokemonApi(id);
})
console.log(id,"id");

