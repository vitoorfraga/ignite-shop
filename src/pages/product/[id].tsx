import { stripe } from '@/lib/stipe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product'
import { GetStaticProps } from 'next'
import React from 'react'
import Stripe from 'stripe'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: number
    description: string
  }[]
}

export default function Produto({ product }: ProductProps) {
  return (
    <ProductContainer>
      <ImageContainer />

      <ProductDetails>
        <h1>Camiseta x</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
          consequatur quas minus, quaerat ad delectus facere, itaque ratione
          ipsum aliquam animi tenetur deleniti blanditiis quam? Dolor architecto
          numquam deleniti similique.
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  console.log(params)

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      description: product.description,
    },
    revalidate: 60 * 60 * 1, // 1 Hora
  }
}
