import { CartButton } from '../CartButton'
import * as Dialog from '@radix-ui/react-dialog'
import {
  CartClose,
  CartContent,
  CartFinish,
  CartProduct,
  CartProductDetails,
  CartProductImage,
  FinishDetails
} from './styles'
import { X } from 'phosphor-react'
import Image from 'next/future/image'
import { useCart } from '../../hooks/useCart'
import { useState } from 'react'
import axios from 'axios'

export function Cart() {
  const { cartItems, removeCartItem, cartTotal } = useCart()
  const cartQuantity = cartItems.length

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(cartTotal)

  const [isCreatingCheckoutSession, SetIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProduct() {
    try {
      SetIsCreatingCheckoutSession(true)
      const response = await axios.post('/api/checkout', {
        products: cartItems
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (error) {
      SetIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <CartButton />
      </Dialog.Trigger>

      <Dialog.Portal>
        <CartContent>
          <CartClose>
            <X size={24} weight="bold" />
          </CartClose>

          <h2>Sacola de compras</h2>

          <section>
            {cartQuantity <= 0 && <p>Seu carrinho está vazio :(</p>}

            {cartItems.map(cartItem => (
              <CartProduct key={cartItem.id}>
                <CartProductImage>
                  <Image
                    src={cartItem.imageUrl}
                    height={90}
                    width={100}
                    alt=""
                  />
                </CartProductImage>

                <CartProductDetails>
                  <p>{cartItem.name}</p>

                  <strong>{cartItem.price}</strong>
                  <button onClick={() => removeCartItem(cartItem.id)}>
                    Remover
                  </button>
                </CartProductDetails>
              </CartProduct>
            ))}
          </section>

          <CartFinish>
            <FinishDetails>
              <div>
                <span>Quantidade</span>
                <p>
                  {cartQuantity} {cartQuantity > 1 ? 'itens' : 'item'}
                </p>
              </div>
              <div>
                <span>Valor total</span>
                <p>{formattedCartTotal}</p>
              </div>
            </FinishDetails>
            <button
              disabled={isCreatingCheckoutSession || cartQuantity === 0}
              onClick={handleBuyProduct}
            >
              Finalizar compra
            </button>
          </CartFinish>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
