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

export function Cart() {
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
            {/* <p>Seu carrinho está vazio :(</p> */}
            <CartProduct>
              <CartProductImage>
                <Image
                  src="https://s3-alpha-sig.figma.com/img/387d/13ce/de131bd1ccf9bbe6b2331e88d3df20cd?Expires=1665964800&Signature=eRip5zM0xcid60KsBVoA1e4VB9XM-2rtr1wfN5UGqzM0y0if6NDCIF4f8n62xOO~JCuQnCZ5k~xx-C1XgCbXs4luHdzfhBOQhUmqfxMNfwf61i8rsboFeGPvKF5qJWYNLSiRq05KwWvIDB6LZysA4FN86fAsbN0ytJ~s0yxlWjZmxFxr46B9842Na1j-OZR2wYlR6F~6ctfaPXtSZajM-Eubd6D34fQFKKuZ2m6Jp4JVBBPHhQODonL6xWTIP0TW6lNMRaALapIhGeafIjHxxJ-GnnF4FF5JFjeCKo8y4v8dS46f9Ft4JxOYKq8TNxaxrJJHthYSo1SzCGGg3pcR0A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                  height={90}
                  width={100}
                  alt=""
                />
              </CartProductImage>

              <CartProductDetails>
                <p>Product 1</p>

                <strong>R$ 50,00</strong>
                <button>Remover</button>
              </CartProductDetails>
            </CartProduct>
          </section>

          <CartFinish>
            <FinishDetails>
              <div>
                <span>Quantidade</span>
                <p>2 itens</p>
              </div>
              <div>
                <span>Valor total</span>
                <p>R$ 100,00</p>
              </div>
            </FinishDetails>
            <button>Finalizar compra</button>
          </CartFinish>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
