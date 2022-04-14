import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/components/App.module.scss'
import Background from '../components/Background'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className={styles.container}>
        <Header />
        <Background />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}
export default MyApp
