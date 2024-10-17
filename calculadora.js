function soma(a, b){
  return a + b
}

function subtracao(a, b){
  return a - b
}

function multiplicacao(a, b){
  return a * b
}

function divisao(a, b){
  return a / b
}

console.log(soma(2, 2))
console.log(subtracao(2, 2))
console.log(multiplicacao(2, 2))
console.log(divisao(2, 2))

module.exports = {
  soma,
  subtracao,
  multiplicacao,
  divisao
}
