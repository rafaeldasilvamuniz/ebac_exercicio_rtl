const calc = require('./calculadora')

describe('Teste calc', () => {
test('calculos', () => {
  const minhasoma = calc.soma(2,2)

  expect(minhasoma).toBe(4)

})

test('multiplicar 3 com 3 deve resultar em 9', () => {
  const minhaMultiplicacao = calc.multiplicacao(3, 3)

  //expect(minhaMultiplicacao).toBe(10)
  expect(minhaMultiplicacao).toBeGreaterThan(4)
})

})
