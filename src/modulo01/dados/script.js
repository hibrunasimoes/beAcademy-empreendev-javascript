// type conversion

//convertendo string para numero
// console.log(Number('9'+24)); 
// console.log(typeof String(9)+' convertendo em texto')


// contar caracteres
// let oneWord = 'Bruna'
// console.log(oneWord.length)


// maiusculas e minusculas
// let phrase = 'Teste em uppercase e lowercase'
// console.log(phrase.toUpperCase())
// console.log(phrase.toLowerCase())


// convertendo para inteiro
// let decimalNumber = 37.8
// console.log(parseInt(decimalNumber))

// // trabalhar com casas decimais
// let niceNumber = 24.8378290
// console.log(niceNumber.toFixed(4))
// console.log(niceNumber.toFixed(4).replace('.',','))

// let otherNumber = 129/32
// console.log(Number( otherNumber.toPrecision()))

// manipulando string e arrays
/*

*/
// let newPhase = 'Ola, bom dia'
// console.log(newPhase)
// let phraseToArray = newPhase.split(' ')
// console.log(phraseToArray)

// convertendo novamente o texto para string
// .join(' ') ->  Permite que eu gere separacoes (- _ / '')

// let phraseModify = phraseToArray.join(' ').toLowerCase()
// console.log(typeof phraseModify)


// verificar se contem palavras ou letras
// let stringInclude = 'Ola, atlas'
// console.log(stringInclude.includes('atlas'))


// let ArrayInclude = [
//     'Bruna',
//     'Atlas',
//     'vem',
//     'fazer',
//     'teste',
//     {
//         firstName: 'Btuna',
//         lastName:'Simoes'
//     }
// ]
// console.log(ArrayInclude.includes('atlas'))
// console.log(stringInclude.startsWith('at'))
// console.log(stringInclude.endsWith('no'))


// transformando um array em caracteres

// let wordToArray = 'quem esta gostando do Empreendev ?'
// console.log(Array.from(wordToArray))



//manipulano arrays
// const animals = ['🐶','🐘','🦒','🦈']
// console.log(animals)

// // adicionar item no fim do array
// console.log(animals.push('🦈'))
// console.log(animals)


// // adicionar item no comeco do array
// console.log(animals.unshift('🐵'))
// console.log(animals)

// //remover item do fim
// console.log(animals.pop())
// console.log(animals)

// //remover item do comeco
// console.log(animals.shift())
// console.log(animals)


// //pegar somente alguns elementos do array
// //nao modificar o array
// console.log(animals.slice(0,3))
// console.log(animals)

// //remover 1 ou mais itens do array
// // animals.splice(1,3)
// console.log(animals)

// // encontrar a posicao do array
// let index = animals.indexOf('🦁')
// console.log(index)
// animals.splice(index,1)
// console.log(animals)

