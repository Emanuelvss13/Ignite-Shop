import { HomeContainer, Product } from "../styles/pages/home"

import cm1 from '../assets/1.png'
import cm2 from '../assets/2.png'
import cm3 from '../assets/3.png'
import Image from "next/image"

import { useKeenSlider } from "keen-slider/react"

import 'keen-slider/keen-slider.min.css'

export default function Home() {

  const [ sliderRef ] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    }
  })

  return (
    <HomeContainer ref={ sliderRef } className="keen-slider">

      <Product className="keen-slider__slide" >
        <Image src={cm1} width={520} height={480} alt={""} />
      
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 200,00</span>
        </footer>
      </Product>
        
        <Product className="keen-slider__slide" >
          <Image src={cm2} width={520} height={480} alt={""} />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 200,00</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide" >
          <Image src={cm3} width={520} height={480} alt={""} />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 200,00</span>
          </footer>
        </Product>

        <Product className="keen-slider__slide" >
          <Image src={cm3} width={520} height={480} alt={""} />

          <footer>
            <strong>Camiseta X</strong>
            <span>R$ 200,00</span>
          </footer>
        </Product>
        
    </HomeContainer>
  )
}
