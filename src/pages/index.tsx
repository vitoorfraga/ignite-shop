import { styled } from '@/styles'
import { HomeContainer, Product } from '@/styles/pages/home'

import camiseta1 from './../assets/camisetas/1.png'
import camiseta2 from './../assets/camisetas/2.png'
import camiseta3 from './../assets/camisetas/3.png'
import Image from 'next/image'

export default function Home() {
  return (
    <HomeContainer>
      <span>tioadksoaskda</span>
      <Product>
        <Image src={camiseta1} width={520} height={480} alt="Produto" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={camiseta2} width={520} height={480} alt="Produto" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      {/* <Product>
        <Image src={camiseta3} width={520} height={480} alt="Produto" />

        <footer>
          <strong>Camiseta x</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product> */}
    </HomeContainer>
  )
}
