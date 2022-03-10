import { NextPage } from 'next'
import React, { useRef } from 'react'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageTitle from '../../components/PageTitle'
import SectionDivider from '../../components/SectionDivider'
import SectionTitle from '../../components/SectionTitle'
import Video from '../../components/Video'
import styles from '../../styles/components/VideoOverig.module.scss'

const VideoOverig: NextPage = () => {
  const programmaboekjesRef = useRef<HTMLElement>(null)
  const muziekRef = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLElement>(null)
  const teasersRef = useRef<HTMLElement>(null)
  const clipsRef = useRef<HTMLElement>(null)
  const muziekVervangenRef = useRef<HTMLElement>(null)

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    ref: React.RefObject<HTMLElement>
  ) => {
    e.preventDefault()

    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Page>
      <PageTitle title="Video" />
      <Container>
        <SectionTitle title="Overige werkzaamheden" />

        <nav className={styles.nav}>
          <div>
            Naast digitalisering en registratie bied ik ook de volgende diensten
            aan:
          </div>
          <ul>
            <li>
              <a
                onClick={(e) => {
                  handleClick(e, programmaboekjesRef)
                }}
              >
                Programmaboekjes digitaliseren
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  handleClick(e, muziekRef)
                }}
              >
                Muziek voorzien van bijpassende video
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  handleClick(e, videoRef)
                }}
              >
                Video voorzien van bijpassende muziek
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  handleClick(e, teasersRef)
                }}
              >
                Teasers
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  handleClick(e, clipsRef)
                }}
              >
                Clips
              </a>
            </li>
            <li>
              <a
                onClick={(e) => {
                  handleClick(e, muziekVervangenRef)
                }}
              >
                Muziek vervangen
              </a>
            </li>
          </ul>
        </nav>

        <SectionDivider />
        <section ref={programmaboekjesRef}>
          <SectionTitle title="Programmaboekjes digitaliseren" />
          <p>
            Bij dansvoorstellingen horen ook programmaboekjes bij met
            historische info. Deze heb ik aangevuld met foto’s van afbeeldingen
            die de tekst illustreren.
          </p>
          <Video src="https://www.youtube.com/embed/b4a04qxyM74" />
          <Video src="https://www.youtube.com/embed/E5wSDdyUbFw" />
        </section>

        <SectionDivider />
        <section ref={muziekRef}>
          <SectionTitle title="Muziek voorzien van bijpassende video" />
          <p>
            Ik raakte heel erg geïnspireerd door een audio-opname van een
            pianostuk van Claude Debussy gespeeld door Ida Wildvank en heb daar
            een video gemaakt met filmbeelden uit de tijd waarin deze muziek is
            geschreven nl. de film Parijs 1900. De beelden zijn meer dan 70 jaar
            oud dus ik hoefde geen rekening te houden met auteursrechten.
          </p>
          <Video
            src="https://www.youtube.com/embed/QJHSJq5hACw"
            caption="Door deze opname begint Ida steeds meer in zicht te komen bij de internationale pianowereld."
          />
        </section>
        <SectionDivider />
        <section ref={videoRef}>
          <SectionTitle title="Video voorzien van bijpassende muziek" />
          <p>
            Ik heb een video a.d.h.v. foto’s gemaakt waarin de ontwikkeling van
            een schilderij als metamorfose is te zien van uitgescheurde vormpjes
            papier tot schilderij. Wij hadden Margriet Snaterse opdracht gegeven
            om voor onze tuin een schilderij te maken waarin onze passie voor
            dans uit de barok en klassieke muziek uit Sunda, West-Java, in één
            schilderij te laten zien. Als achtergrond een symbiose van
            landschappen van Toscana en Sunda, West Java.
          </p>
          <Video src="https://www.youtube.com/embed/tS_L7eYcoHM" />
        </section>
        <SectionDivider />
        <section ref={teasersRef}>
          <SectionTitle title="Teasers" />
          <p>
            Toen de corona uitbrak werden fysieke optredens voor publiek
            afgelast. Iemand kreeg het idee om in aanwezigheid van een klein
            publiek een opname te maken van een interview met twee beroemdheden
            nl. jazzmusicus en jazzveteraan Ack van Rooyen en tv presentator
            Matthijs van Nieuwkerk. Aansluitend volgde een muziekoptreden.
            Hieraan heb ik als 2e cameraman en editor meegewerkt. Deze opname
            zou in een later stadium worden gestreamd. Om dit gebeuren alvast in
            de media bekend te maken kreeg ik als opdracht een teaser te maken
            van een selectie van 17 minuten aan videomateriaal uit een vorig
            optreden. Hieruit heb ik deze teaser van 22 seconden gemaakt.
          </p>
          <Video
            src="https://www.youtube.com/embed/5Tz1IDhBkBY"
            caption="Deze teaser werd her en der verspreid en kreeg al op één account 10.000 weergaven op Facebook."
          />
          <p>
            Hierna werd de stream uitgezonden. Deze krijgt nog steeds veel
            bekijks van tot op heden 54.000 weergaven en 7.300
            betrokkenheidsreacties op dezelfde account. Hier een weergave vanuit
            mijn You Tubekanaal in hoge kwaliteit.
          </p>
          <Video src="https://www.youtube.com/embed/ogRlOdb_kpM" />
          <p>
            Daarna kreeg ik opdracht van componist Sinta Wullur een teaser met
            haar te maken van haar oratorium welke door haar acquisiteur ter
            goedkeuring aan een producent zou worden aangeboden voor
            uitvoeringen in het komende jaar.
          </p>
          <Video
            src="https://www.youtube.com/embed/qChlkCs5ZP8"
            caption="Binnen een paar dagen kreeg Sinta deze opdracht."
          />
        </section>
        <SectionDivider />
        <section ref={clipsRef}>
          <SectionTitle title="Clips" />
          <p>
            Huwelijksreportages vind ik leuk om te doen maar mijn voorkeur ligt
            toch meer in de kunstwereld. Hier een clip met een samenvatting van
            een reportage die ik in 2006 heb gemaakt met mijn vorige camera.
          </p>
          <Video src="https://www.youtube.com/embed/ps5QBXsAQt8" />
        </section>
        <SectionDivider />
        <section ref={muziekVervangenRef}>
          <SectionTitle title="Muziek vervangen" />
          <p>
            Bij het reviseren van een video-opname uit 1996 van een
            dansuitvoering was het beeld intact maar het geluid heel slecht.
            Gelukkig werd gebruikt gemaakt van een keuze uit een 20-tal cd’s die
            ik allemaal heb opgevraagd. Van hieruit verving ik een 30-tal
            dansnummers. Het tempo van het geluid op de video en dat van de cd
            verschilde overal. Dit heb ik via een audioprogramma weten te
            corrigeren. Daar ging heel veel tijd mee gemoeid gezien het feit dat
            dit om honderdste seconden ging en de hoeveelheid dansnummers. Hier
            een klein stukje als voorbeeld.
          </p>
          <Video
            src="https://www.youtube.com/embed/a3gwJCpnXs4"
            caption="Fragment video met oorspronkelijk geluid"
          />
          <Video
            src="https://www.youtube.com/embed/3j3VT6Q25Vw"
            caption="Hetzelfde fragment met toevoeging van de cd"
          />
          <p>
            U ziet dat de video meer cachet heeft gekregen door deze toevoeging.
          </p>
        </section>
      </Container>
    </Page>
  )
}

export default VideoOverig
