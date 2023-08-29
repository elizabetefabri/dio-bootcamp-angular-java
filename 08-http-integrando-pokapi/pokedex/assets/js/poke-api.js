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

// Define um método "getPokemons" em "pokeApi" que obtém uma lista de Pokémon com base em um deslocamento e limite.
pokeApi.getPokemons = (offset = 0, limit = 5) => {
    // Constrói a URL para buscar Pokémon com base no deslocamento e limite especificados.
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`

    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results) // Obtém a lista de Pokémon da resposta.
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail)) // Obtém os detalhes de cada Pokémon.
        .then((detailRequests) => Promise.all(detailRequests)) // Aguarda todas as solicitações de detalhes serem concluídas.
        .then((pokemonsDetails) => pokemonsDetails) // Retorna a lista de detalhes de Pokémon.
}
