import type { NextPage } from 'next'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageTitle from '../../components/PageTitle'
import SectionDivider from '../../components/SectionDivider'
import SectionTitle from '../../components/SectionTitle'
import videodragers from '../../public/images/videodragers.jpg'
import entreeTurkije from '../../public/images/5e-entree-turkije.jpg'
import CustomImage from '../../components/CustomImage'

const Digitalisering: NextPage = () => {
  return (
    <Page>
      <PageTitle title="Video" />
      <Container>
        <section>
          <SectionTitle title="Digitalisering" />
          <p>
            Ik kan het analoog videomateriaal digitaal omzetten in vier fasen:
          </p>
          <p>
            <span className="bold">1)</span> Met{' '}
            <span className="bold">capture</span> (verkrijgen) kan ik het
            analoog materiaal in de vorm van VHS, Hi8 en VCI-videobanden
            omzetten in een tijdelijke digitale vorm zoals b.v. een MV4-bestand
            welke ik op een DVD zet.
          </p>
          <p>
            Dan heb ik nog niets met het uiterlijk en geluid van het materiaal
            gedaan. Om dit te verbeteren moet er wel nog het e.e.a. aan
            gebeuren.
          </p>
          <div>
            <CustomImage
              src={videodragers}
              alt="Verschillende videodragers: VHS, Hi8 en DVD"
            />
          </div>
          <p>
            <span className="bold">2)</span> Met{' '}
            <span className="bold">revisie</span> kan ik het gedigitaliseerde
            materiaal schoonpoetsen door fletse kleuren, doffe audio helder te
            maken en te versterken en slechte stukken te verwijderen.
          </p>
          <p>
            <span className="bold">3)</span> Met{' '}
            <span className="bold">editing</span> kan ik titels en overgangen
            aanbrengen en nieuwe audio, foto’s en video’s toevoegen. En dan moet
            dit geheel nog kunnen worden afgespeeld.
          </p>
          <p>
            <span className="bold">4)</span> Alvorens het bewerkte materiaal op{' '}
            <span className="bold">dvd</span> of{' '}
            <span className="bold">blu-ray</span> te branden, kan ik naar wens
            een menu met een aantal hoofdstukken toevoegen, afhankelijk van de
            lengte van de video, zodat er bij het afspelen niet eindeloos
            gescrold hoeft te worden. Het branden van deze schijven zal in de
            toekomst verdwijnen vanwege het gemak en de mogelijkheid tot
            streaming via de media You Tube en Facebook.
          </p>
          <p>
            In dat geval kan ik een <span className="bold">mp4</span> maken
            zodat u het materiaal zelf op het net kan zetten bijvoorbeeld op uw
            eigen kanaal op genoemde media. In plaats van een menu maak ik een
            tijdschema met alle hoofdstukken welke u in de omschrijving bij uw
            media kunt toevoegen.
          </p>
          <div>
            <CustomImage src={entreeTurkije} alt="Vijfde entrée Turkije" />
          </div>
        </section>
        <SectionDivider />
        <section>
          <SectionTitle title="Het gevolg van digitalisering" />
          <p>
            Ik heb veel mensen in dans en muziek blij kunnen maken met mijn
            videowerkzaamheden. Stapels videobanden lagen in de kast met
            prachtige registraties, gemaakt vanaf de jaren 90 van de vorige
            eeuw. Van kleurrijke barokproducties vol dans en muziek tot
            historische optredens van grote meesters in de muziek. Niemand keek
            hier meer naar om en zo raakten de registraties in dit gedateerde
            format in de vergetelheid.
          </p>
          <p>
            Ik kreeg opdracht om deze weer digitaal tot leven te brengen,
            gelukkig op een moment voordat verpulvering van de videobanden zou
            toeslaan. Bijbehorende programmaboekjes met waardevol historisch
            materiaal in de vorm van teksten en foto’s heb ik hierin verwerkt
            met als resultaat een eindproduct waar iedereen nu heel erg trots op
            is.
          </p>
          <p>
            Vol verwondering en enthousiasme kijken dansers en musici naar hun
            vaardigheden uit een ver verleden. Hieruit zijn weer reünies
            ontstaan.
          </p>
          <p>Digitalisering heeft dus ook een sociale functie.</p>
        </section>
      </Container>
    </Page>
  )
}

export default Digitalisering
