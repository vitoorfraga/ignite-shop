import { stripe } from '@/lib/stipe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import React from 'react'
import Stripe from 'stripe'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {params: {id:}}
    ],
    fallback: false
  }
} 

export default function Produto({ product }: ProductProps) {
  console.log(product)
  return (
    <ProductContainer>
      <ImageContainer />

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getServerSideProps: GetServerSideProps<
  any,
  { id: string }
> = async ({ params }) => {
  console.log(params)
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  console.log(product)

  const price = product.default_price as Stripe.Price

  return {
    props: {
      // product,
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(price.unit_amount / 100),
        description: product.description,
      },
    },
    // revalidate: 60 * 60 * 1, // 1 Hora
  }
}
