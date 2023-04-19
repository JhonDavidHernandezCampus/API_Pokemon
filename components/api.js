
let agre = document.querySelector(".resultado");

export default{
    async getPokemonApi(nom){
        if (nom>1260) {
            console.log("Pokemosn no existe");
            agre.innerHTML=`<h1>El pokemon no existe</h1>
            `;
        }else{
        const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/${nom}`);
        const jsonData =  await poke.json();
        const data = jsonData;

        this.agregardatos(data);
        console.log(data);
        };
    },
    agregardatos(data){
            
            agre.innerHTML=`
            <div class="pokemon">
                <img src="${data.sprites.front_default}" alt="">
                <h1>${data.name}</h1>
            </div>
            `;
 /*        data.forEach(e => {
            
        
            document.querySelector(".resultado").insertAdjacentHTML("beforeend",`
            <div class="pokemones">
                <img src="${e.url}" alt="">
                <h1>${e.name}</h1>
            </div>
            
            `)
        }); */
    }

}