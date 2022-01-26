import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import '../../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>

  )
}

export default MyApp
