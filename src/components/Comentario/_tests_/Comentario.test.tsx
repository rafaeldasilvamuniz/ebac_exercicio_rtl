import { screen } from '@testing-library/react'
import Comentario from '..'

import { renderizaComProvider } from '../../../utils/tests'

describe('Testes para o componente header', () => {
  test('Deve renderizar corretamente', () => {
    renderizaComProvider(<Comentario />)
    expect(screen.getByText('Jogos no Brasil')).toBeInTheDocument()
  })

  test('Deve renderizar com 2 itens no carrinho', () => {
    renderizaComProvider(<Comentario />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              comentario: 'Jogo 1 teste de console'
            },
            {
              comentario: 'Jogo 2 teste de console RPG'
            }
          ]
        }
      }
    })

    expect(screen.getByTestId('qtd-comentario').innerHTML).toContain('2 itens')
  })
})
