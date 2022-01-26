import type { NextPage } from 'next'
import Background from '../components/Background'
import Button from '../components/Button'
import Page from '../components/Page'
import SectionDivider from '../components/SectionDivider'
import Video from '../components/Video'
import styles from '../styles/components/Index.module.scss'

const Home: NextPage = () => {
  return (
    <Page>
      <Background type="combined" />
      <h1 className={styles.introText}>
        Mijn naam is Ronald Bergman en mijn passie ligt in video en muziek
      </h1>
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
        Enerzijds leg ik als uitvoerend musicus muziekoptredens van collegae op
        video vast. Anderzijds voorzie ik mijn videoregistraties met bijpassende
        muziek van reizen in binnen- en buitenland.
      </p>
      <p>
        Hierdoor wordt aan de video een onzichtbare derde dimensie toegevoegd.
      </p>
      <section>
        Ga verder naar:
        <ul className={styles.navigation}>
          <li>
            <Button href="/digitalisering" title="Digitalisering" />
          </li>
          <li>
            <Button href="/registratie" title="Registratie" />
          </li>
          <li>
            <Button href="/video-overig" title="Video overig" />
          </li>
          <li>
            <Button href="/muziek" title="Muziek" />
          </li>
          <li>
            <Button href="/prijslijst" title="Prijslijst" />
          </li>
          <li>
            <Button href="/contact" title="Contact" />
          </li>
        </ul>
      </section>
    </Page>
  )
}

export default Home
