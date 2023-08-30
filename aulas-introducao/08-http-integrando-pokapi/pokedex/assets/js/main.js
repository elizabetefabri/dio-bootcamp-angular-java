// Obtém uma referência ao elemento HTML com o ID "pokemonList".
const pokemonList = document.getElementById('pokemonList')

// Obtém uma referência ao elemento HTML com o ID "loadMoreButton".
const loadMoreButton = document.getElementById('loadMoreButton')

// Define o número máximo de registros (Pokémon) que você deseja carregar.
const maxRecords = 151

// Define o número de registros (Pokémon) para carregar por vez.
const limit = 10

// Inicializa a variável "offset" com o valor 0. Ela controlará de onde começar a carregar os Pokémon.
let offset = 0;

// Esta função converte um objeto Pokémon em uma representação HTML e retorna uma string com HTML.
function convertPokemonToLi(pokemon) {
    // Usando template literals (``) para criar uma string HTML com os detalhes do Pokémon.
    return `
        <li class="pokemon ${pokemon.type}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}"
                     alt="${pokemon.name}">
            </div>
        </li>
    `
}

// Esta função carrega uma lista de Pokémon com base no "offset" e "limit" especificados.
function loadPokemonItens(offset, limit) {
    // Suponho que existe um objeto "pokeApi" que possui um método "getPokemons".
    // Esse método retorna uma lista de Pokémon com base no "offset" e "limit".
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        // Converte a lista de Pokémon em uma string HTML usando a função "convertPokemonToLi".
        const newHtml = pokemons.map(convertPokemonToLi).join('')

        // Adiciona o HTML gerado à lista existente de Pokémon no elemento "pokemonList".
        pokemonList.innerHTML += newHtml
    })
}

// Chama a função "loadPokemonItens" para carregar os primeiros Pokémon quando a página carrega.
loadPokemonItens(offset, limit)

// Adiciona um ouvinte de eventos para o botão "loadMoreButton".
loadMoreButton.addEventListener('click', () => {
    // Incrementa o valor de "offset" para carregar a próxima página de Pokémon.
    offset += limit

    // Calcula a quantidade de registros com a próxima página.
    const qtdRecordsWithNexPage = offset + limit

    // Verifica se atingiu o máximo de registros. Se sim, carrega os últimos registros.
    if (qtdRecordsWithNexPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)

        // Remove o botão "loadMoreButton" quando todos os Pokémon forem carregados.
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        // Caso contrário, carrega mais Pokémon com base no "offset" e "limit".
        loadPokemonItens(offset, limit)
    }
})