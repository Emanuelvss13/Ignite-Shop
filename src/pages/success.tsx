
import { ImageContainer, SuccessContainer } from "../styles/pages/sucess";
import Link from 'next/link'

export default function Success(){
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImageContainer>

      </ImageContainer>

      <p>Uhuul <strong>Diego Fernandes</strong>, sua compra de 3 camisetas já está a caminho da sua casa. </p>

      <Link href="/" >
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
  )
}