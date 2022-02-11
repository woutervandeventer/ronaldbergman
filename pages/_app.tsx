import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Background from '../components/Background'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Background />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
export default MyApp
