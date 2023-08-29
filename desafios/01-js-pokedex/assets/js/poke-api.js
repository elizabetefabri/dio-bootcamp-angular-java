// Definindo um objeto vazio chamado "pokeApi".
const pokeApi = {}

// Esta função converte os detalhes de um Pokémon da PokeAPI em um objeto Pokémon personalizado.
function convertPokeApiDetailToPokemon(pokeDetail) {
    // Cria uma nova instância de um objeto Pokémon.
    const pokemon = new Pokemon()

    // Atribui o número e o nome do Pokémon com base nos detalhes recebidos.
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    // Mapeia os tipos do Pokémon a partir dos detalhes e pega o primeiro tipo.
    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    // Atribui os tipos e o tipo principal do Pokémon.
    pokemon.types = types
    pokemon.type = type

    // Atribui a URL da foto do Pokémon a partir dos detalhes.
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    // Retorna o objeto Pokémon criado.
    return pokemon
}

// Define um método "getPokemonDetail" em "pokeApi" que obtém os detalhes de um Pokémon com base em sua URL.
pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailToPokemon) // Chama a função de conversão para obter um objeto Pokémon.
}

//Nesta versão, usei async/await para tornar o código mais sequencial e fácil de entender. 
//Além disso, adicionei tratamento de erro para lidar com falhas na solicitação ou no processamento dos detalhes do Pokémon.

pokeApi.getPokemons = async (offset = 0, limit = 5) => {
    try {
        // Constrói a URL para buscar Pokémon com base no deslocamento e limite especificados.
        const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
        
        // Realiza a solicitação à API.
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro na solicitação: ${response.status}`);
        }

        // Obtém os resultados da resposta JSON.
        const jsonBody = await response.json();

        // Obtém a lista de Pokémon da resposta.
        const pokemons = jsonBody.results;

        // Obtém os detalhes de cada Pokémon em paralelo.
        const detailRequests = pokemons.map(pokeApi.getPokemonDetail);

        // Aguarda todas as solicitações de detalhes serem concluídas.
        const pokemonsDetails = await Promise.all(detailRequests);

        // Retorna a lista de detalhes de Pokémon.
        return pokemonsDetails;
    } catch (error) {
        throw new Error(`Erro ao buscar Pokémon: ${error.message}`);
    }
}

