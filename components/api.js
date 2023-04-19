let data = "";
export default{
    async getPokemonApi(nom){
        const poke = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=20&limit=1260`);
        const jsonData =  await poke.json();
        const data = jsonData.results;

        this.agregardatos(data);
    },
    agregardatos(data){
        console.log(data[0].url);
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