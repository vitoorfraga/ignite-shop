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
