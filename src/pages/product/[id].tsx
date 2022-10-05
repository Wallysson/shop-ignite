import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Stripe from 'stripe'
import { IProduct } from '../../contexts/CartContext'
import { useCart } from '../../hooks/useCart'
import { stripe } from '../../lib/stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetalis
} from '../../styles/pages/product'

interface ProductProps {
  product: IProduct
}

export default function Product({ product }: ProductProps) {
  const { addToCart, hasItemAlreadyInCart } = useCart()
  const { isFallback } = useRouter()

  const itemAlreayInCart = hasItemAlreadyInCart(product.id)

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>Buy Product | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} alt="" width={520} height={480} />
        </ImageContainer>

        <ProductDetalis>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <button
            onClick={() => addToCart(product)}
            disabled={itemAlreayInCart}
          >
            {itemAlreayInCart
              ? 'Produto já está no carrinho'
              : 'Colocar no carrinho'}
          </button>
        </ProductDetalis>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'prod_MWmXLq8TaYOC7S'
        }
      }
    ],
    // fallback: 'blocking' quando usa dessa forma é pra bloquear o fallback
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount / 100),
        description: product.description,
        defaultPriceId: price.id,
        numberPrice: price.unit_amount / 100
      }
    },
    revalidate: 60 * 60 * 1 // 1 hour
  }
}
