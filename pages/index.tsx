import type { NextPage } from 'next'
import Head from 'next/head'
import Container from '../components/Container'
import Page from '../components/Page'
import SectionDivider from '../components/SectionDivider'
import Video from '../components/Video'
import styles from '../styles/components/Index.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ronald Bergman</title>
        <meta
          name='description'
          content='Ronald Bergman is expert op het gebied van video, zowel voor digitalisering als registratie. Daarnaast is Ronald een veelzijdig muzikant.'
        />
      </Head>

      <Page>
        <h1 className={styles.introText}>
          Ik ben Ronald Bergman.
          <br />
          Muziek en video zijn mijn passies.
        </h1>
        <Container>
          <p>
            Het onderstaande stukje muziek heet FSR, welke ook de initialen zijn
            van dit bedrijf. Maar bassist/componist Ray Brown bedoelde daarmee
            For Sonny Rollins.
          </p>
          <Video src='https://www.youtube-nocookie.com/embed/tqD9IgLGjec' />
          <SectionDivider />
          <p>Muziek en beeld zijn met elkaar verbonden.</p>
          <p>
            Enerzijds leg ik als uitvoerend musicus muziekoptredens van collegae
            op video vast. Anderzijds voorzie ik mijn videoregistraties van
            reizen in binnen- en buitenland met bijpassende muziek waarmee ik
            aan de video een derde dimensie toevoeg.
          </p>
        </Container>
      </Page>
    </>
  )
}

export default Home
