import { HeaderContainer, HeaderContent, NewtransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoImg from '../../assets/Logo (2).svg'
import { NewTransactionModal } from '../NewTransactionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewtransactionButton>Nova Transação</NewtransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
