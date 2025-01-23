// // Envia uma mensagem para o console/terminal
// console.log("oi")
//
//
// // Variavel do Tipo Integer (int nas demais linguages) / Number (no Javascript)
// var batatinha = 0
//
// console.log(batatinha)
//
// batatinha = 1
//
// console.log(batatinha)
//
// // Variavel do Tipo String (string/str)
// var batatinhaFrita = "Oi"
//
// console.log(batatinhaFrita)
//
// batatinhaFrita = "Oi, tudo bem?"
//
// console.log(batatinhaFrita)
//
//
// // Variavel do Tipo Boleana (bool nas demais linguages) / Boolean (no Javascript)
// var batatinhaNaoBinario = false
//
// console.log(batatinhaNaoBinario)
//
// batatinhaNaoBinario = true
//
// console.log(batatinhaNaoBinario)

// Quando uma variavel é "setado" como "const", o valor é imutavel. E quando a variavel é "setado" como "var", o valor é variavel
// const batatinhaConstante = "Banana"
//
// console.log(batatinhaConstante)
//
// // batatinhaConstante = "Pera" //Vai dar erro



// // Operações Matematicas

// var batatinhaA = 10
// var batatinhaB = 15
//
// console.log(batatinhaA + batatinhaB) // Adição
// console.log(batatinhaA - batatinhaB) // Subtração
// console.log(batatinhaA * batatinhaB) // Multiplicação
// console.log(batatinhaA / batatinhaB) // Divisão
// console.log(batatinhaA % batatinhaB) // Resto da Divisão
//
// var batatinhaATexto = "10"
// var batatinhaBTexto = "15"
// var batatinhaCTexto = "A"
//
// // Operações com Texto no Javascript, isso não é confiavel! (Outras linguagens não permitem)
// console.log(batatinhaATexto + batatinhaBTexto) // Adição
// console.log(batatinhaATexto - batatinhaBTexto) // Subtração
// console.log(batatinhaATexto * batatinhaBTexto) // Multiplicação
// console.log(batatinhaATexto / batatinhaBTexto) // Divisão
// console.log(batatinhaATexto % batatinhaBTexto) // Resto da Divisão
//
// // Operações com Texto no Javascript, isso não é confiavel! (Outras linguagens não permitem)
// console.log(batatinhaATexto + batatinhaCTexto) // Adição
// console.log(batatinhaATexto - batatinhaCTexto) // Subtração - Vai dar erro
// console.log(batatinhaATexto * batatinhaCTexto) // Multiplicação - Vai dar erro
// console.log(batatinhaATexto / batatinhaCTexto) // Divisão - Vai dar erro
// console.log(batatinhaATexto % batatinhaCTexto) // Resto da Divisão - Vai dar erro



// Condicionais

// = -> Atribuição de Variavel
// == -> Igual
// === -> Igual no Javascript + validação do tipo, pois o Javascript é louco!


// Condicional if

// var a = 1
// var b = 1
// const result = 3
//
// if(a + b === result)  {
//     console.log("Uhul!!")
// } else if(a + b === 2) {
//   console.log("Uhul!!!!!!!!!")
// } else {
//     console.log("Uhul :(")
// }


// Loops | While + For

// While
// var result = 0
//
// // < -> Menor
// // <= -> Menor ou Igual
// // > -> Maior
// // >= -> Maior ou Igual
// // === -> Igual
// // !== -> Diferente de
//
// // Muito cuidado para não explodir seu pc com uma condição sempre verdadeira!
// // Isso consome muita processamento
// while(result < 10) {
//     console.log(result)
//     result = result + 1   // Ou result++ -> soma ele mesmo
// }


// For

// Ele é o mais usado, principalmente para variaveis do tipo lista!
// var i = 0 -> Instancia uma variavel
// i < 10 -> Condição
// i++ -> i = i + 1 -> Atribui o valor da soma
// for(var i = 0; i < 10; i++) {
//     console.log(i)
//     console.log("Oi")
// }



// Funções

// Elas são blocos de codigo reutilizaveis

//batatinha -> Nome da função (Pode ser qualquer nome)
//x -> Atributo (Pode ser qualquer nome)
//y -> Atributo (Pode ser qualquer nome)

// function soma(x, y) {
//     console.log(x + y);
// }
//
// soma(1, 2)
// soma(2, 2)
// soma(10, 15)
// soma(10, 12)


// Funções com variavel opcional
// function batatinha(a, b = 0) {
//     console.log(a - b)
// }
//
// batatinha(1, 2)
// batatinha(1)
// batatinha(2)
// batatinha(3)


// Funções com retorno
// function batatinhaComRetorno(w, z) {
//     const substracao = w - z
//     console.log(substracao)
//
//     return w + z / 2
// }
//
// var batata = batatinhaComRetorno(2, 10)
//
// console.log(batata)


// Variaveis mais avançadas

// Lista
// var lista = []
// var lista1 = [1, 2, 3, 4, 5] // Lista do Tipo Int
// var lista2 = ["shadow", "kaes", "silver"] // Lista do Tipo String
// var lista3 = ["shadow", "kaes", 1] // Lista com varios tipos

// console.log(lista1)
// console.log(lista1[2]) // 3
// console.log(lista1[5]) // Não existe
// console.log(lista1[2] + lista1[0]) // 4
//
// console.log(lista2[1] + lista2[2])

// length -> tamanho da lista
// console.log(lista1.length)
// for(let i = 0; i < lista1.length; i++){
//     console.log(lista1[i])
// }

// for(var item of lista2) {
//     console.log(item)
// }


// Objeto

// const pokemon = {
//     name: "Bulbasaur",
//     number: "1",
//     type: "Maconha"
// }
//
// const kaes = {
//     name: "Kaes",
//     number: "69",
//     type: "Filosofo"
// }
//
// console.log(pokemon)
// console.log(kaes)
//
// console.log(pokemon.name)


// Objeto + Lista

// var pokemonList = [
//     {
//         name: "Bulbasaur",
//         number: "1",
//         type: "Maconha"
//     },
//     {
//         name: "Kaes",
//         number: "69",
//         type: "Filosofo"
//     },
//     {
//         name: "Shadow",
//         number: "15",
//         type: "Batatinha"
//     }
// ]
//
// console.log(pokemonList)





// Exemplo Pratico!

var pokemonList = [
    {
        name: "Bulbasaur",
        number: 1,
        type: "Maconha"
    },
    {
        name: "Kaes",
        number: 69,
        type: "Filosofo"
    },
    {
        name: "Shadow",
        number: 15,
        type: "Batatinha"
    }
]

function ExibirPokemon(pokemon) {
    console.log("Nome:" + pokemon.name + "Numero:" + pokemon.number)
    console.log(`Nome: ${pokemon.name} Numero: ${pokemon.number}`) // Melhor jeito!
}


for(var pokemon of pokemonList) {
    ExibirPokemon(pokemon)
}

