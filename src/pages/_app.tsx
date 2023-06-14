import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { Container, Header } from '../styles/pages/app'
import LogoImg from '../../public/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
  <Container>
    <Header>
      <Link href="/" >
        <Image src={LogoImg} alt="" />
      </Link>
    </Header>

    <Component {...pageProps} />
  </Container>
  )
}
