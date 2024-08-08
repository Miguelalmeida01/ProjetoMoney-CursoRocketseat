import { HeaderContainer, HeaderContent } from './styles'

import logoImg from '../../assets/Vector.svg'
export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <button>Nova Transação</button>
      </HeaderContent>
    </HeaderContainer>
  )
}
