function myFisrtFction() {
  console.log('olhe a funcao')
}
 myFisrtFction()

 function sum (number1, number2) {
   console.log(number1 + number2)
 }

 sum(3, 4)

 function myFirstFcionWithReturn(num1, num2) {
   let total = num1 + num2
   return total
 }
console.log( myFirstFcionWithReturn(10,10))

function meuPratoDeComida(comida1, comida2, comida3) {
return `Meu prato de comida é ${comida1}, ${comida2}, ${comida3}, `
}
const prato = meuPratoDeComida('arroz', 'feijao', 'batata')
console.log(prato)

const myFirstArrowFuction = (n1, n2) => {
  let total = n1 + n2
  return total;
}
const result = myFirstArrowFuction (40,40)
console.log (result)