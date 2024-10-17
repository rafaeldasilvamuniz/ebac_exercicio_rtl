import { useSelector } from 'react-redux'

import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

import { RootState } from '../../store'

const Header = () => {
  const itens = useSelector((state: RootState) => state.carrinho.itens)

  const comentDois = itens.reduce((comtTds, cmt) => {
    comtTds += cmt.comentario
    //comtTds.toString.arguments(comentario)
    return comtTds
  }, null)

  return (
    <S.Header>
      <h1>Comentários Teste do Exercício</h1>
      <div>
        <img src={cesta} />
        <div>
          <span data-testid="qtd-comentario">{itens.length} itens</span>, valor
          total: {paraReal(comentDois)}
        </div>
      </div>
    </S.Header>
  )
}

export default Header
