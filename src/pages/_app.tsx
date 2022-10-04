import { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { globalStyles } from '../styles/global'
import { Container } from '../styles/pages/app'

globalStyles()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header />
      <Component {...pageProps} />
    </Container>
  )
}

export default MyApp
