// 1.  declare uma variavel de nome person
var person 
// console.log(typeof person)

// 2. que tipo de dado é a variavel acima?
// undefined

//3.declare uma variavel e atribua valores para cada um dos dados:
person = {
  name: "Bruna",
  age:25,
  weight:65,
  isAdmin:false,
  isAMan:false,
}

// 4. a variavel human abaixo é de que tipo de dados?
//objeto
let humam = {
}
// console.log(typeof human)


// 4.1 atribua a ela as mesmas propriedades e valores do exercicio 3
let human = {
  name: "Bruna",
  age: 25,
  weight: 65,
  isAdmin: false,
  isAMan: false,
}

// 4.2 mostre no console a seguinte mensagem:
// o humano <name> tem o peso <weight> kg
// console.log(`O humano ${human.name} tem o peso ${human.weight}`);

// 5. declare uma variavel do tipo Array, de nome humans e atribua a ela nenhum visualViewport, ou seja, somente o array vazio


// 6. reatribua valor para a variavel acima, colocando dentro dela o objeto human da questao 4.(nao copiar e colocar o objeto, mas usar o objeto criado inserir ele no array)
let humans = [
  human]
  console.log(humans)

// 7. coloque no console o valor da posicao zero do array acima
  console.log(humans[0].name)

// 8. crie um novo objeto student e coloque na posicao 1 do array humans

let newHuman = {
  name: "Luana",
  age: 25,
  weight: 65,
  isAdmin: false,
  isAMan: false,
}

console.log(newHuman)
humans = [
  human,
  newHuman
]
console.log(humans)

// 9. sem rodar o codigo responda o resultado da saida abaixo:

// a)
// console.log(a)
// var a=1
//undefined

// b)
//  let a 
// console.log(a)
// {
//     let a = 2
//     console.log(a)
// }
// console.log(a)
// undefined, dentro do escopo 2 e fora undefined tambem

//c)
// console.log(b)
// {
//     let b=3
//     console.log(b)
// }
// console.log(b)
//dentro do escopo = 3, undefined ou null porque a variavel é local.

// d)
// const c = 10
// {
//     console.log(c)
//     const c = 20
//     console.log(c)
// }
// resposta: 10 porque const nao aceita a alteracao  de valor

