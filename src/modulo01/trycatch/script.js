function myAge(myage) {
  if (!myage) {
      throw 'voce precisa colocar a idade!'
  }
  console.log('eu executei depois do erro');
}
try {
  myAge(30)
  console.log('ja tratei e deu certo');
} catch (error) {
  console.log(error);
}
console.log('programa continua');