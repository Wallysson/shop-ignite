import { CartButtonContainer } from './styles'
import { Handbag } from 'phosphor-react'
import { ComponentProps } from 'react'

type CartButtonProps = ComponentProps<typeof CartButtonContainer>

export function CartButton({ ...rest }: CartButtonProps) {
  return (
    <CartButtonContainer {...rest}>
      <Handbag weight="bold" />
    </CartButtonContainer>
  )
}
