/*
qulando clicar no pokemon da listagem temos que mostrar o cartao corrrespondente ao que foi foi selecionado na listagem

pra isso vamos precisar trabelhar com dois elementos
1-listagem
2-cartao do pokemon



vamos precisar trabalhar com um evento de clique feito pelo usuario na listagem

-remover a classe aberto so do cartao que estiver aberto
-ao clicar em pokemon da listagem pegamos o id desse pokemon pra saber qual cartao mostrar 
- remover a classe ativa selesionada
- adicionar a casse ativo no intem da lista selecionada
*/

//precisamos criar duas variaveis na js para trabalhar com os elementos da tela

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll (' .cartao-pokemon')


listaSelecaoPokemons.forEach( pokemon => {

    pokemon.addEventListener('click',()=> {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir="cartao-"+ idPokemonSelecionado

        const cartaoPokemonParaAbrir = document.getElementById("cartao-" +  idPokemonSelecionado)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})