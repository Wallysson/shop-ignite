import Image from 'next/future/image'
import { HomeContainer, Product } from '../styles/pages/home'

import shirt1 from '../assets/Shirt/1.png'
import shirt2 from '../assets/Shirt/2.png'
import shirt3 from '../assets/Shirt/3.png'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={shirt2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
