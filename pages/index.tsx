import type { NextPage } from 'next'
import Container from '../components/Container'
import Page from '../components/Page'
import SectionDivider from '../components/SectionDivider'
import Video from '../components/Video'
import styles from '../styles/components/Index.module.scss'

const Home: NextPage = () => {
  return (
    <Page>
      <h1 className={styles.introText}>
        Mijn naam is Ronald Bergman en mijn passie ligt in video en muziek
      </h1>

      <Container>
        <Video src="https://www.youtube-nocookie.com/embed/tqD9IgLGjec" />

        <p>
          Het stukje muziek dat u nu hoort of net hoorde heet FSR, welke ook de
          initialen zijn van dit bedrijf. Maar bassist/componist Ray Brown
          bedoelde daarmee For Sonny Rollins.
        </p>

        <SectionDivider />

        <p>
          Video en muziek zijn bij mij als een symbiose onlosmakelijk aan elkaar
          verbonden.
        </p>

        <p>
          Enerzijds leg ik als uitvoerend musicus muziekoptredens van collegae
          op video vast. Anderzijds voorzie ik mijn videoregistraties met
          bijpassende muziek van reizen in binnen- en buitenland.
        </p>

        <p>
          Hierdoor wordt aan de video een onzichtbare derde dimensie toegevoegd.
        </p>
      </Container>
    </Page>
  )
}

export default Home
