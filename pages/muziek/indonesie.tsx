import { NextPage } from 'next'
import React from 'react'
import Container from '../../components/Container'
import CustomImage from '../../components/CustomImage'
import Page from '../../components/Page'
import PageTitle from '../../components/PageTitle'
import SectionDivider from '../../components/SectionDivider'
import SectionTitle from '../../components/SectionTitle'
import Video from '../../components/Video'
import dangiangParahiangan from '../../public/images/dangiang-parahiangan-large.jpeg'
import dinand from '../../public/images/dinand.jpg'
import dinand2 from '../../public/images/dinand2.jpg'

const Muziek: NextPage = () => {
  return (
    <Page>
      <PageTitle title="Muziek" />
      <Container>
        <section>
          <SectionTitle title="Indonesië" />

          <div>
            <CustomImage
              src={dangiangParahiangan}
              alt="Foto van de groep Dangiang Parahiangan"
              maxWidth={400}
            />
          </div>

          <p>
            <span className="bold">Dangiang Parahiangan</span> is de naam van
            onze groep opgericht door Wim van Zanten. Wij spelen klassieke
            muziek uit West Java. West Java wordt voor het merendeel Sunda
            genoemd. Deze muziek, meestal in liedvorm, wordt gespeeld en
            gezongen in kleine kringen. Je kunt dit vergelijken met
            Schubertiades in Wenen waarbij liederen van Schubert werden
            voorgedragen op gedichten van o.a. Goethe. Dit ensemble bestaat uit
            4 personen: een zangeres, 2 citherspelers en ik als fluitist. Ik
            speel hier suling, een Sundanese bamboefluit waarop de overige
            instrumenten en uiteraard de zang gestemd zijn.
          </p>
          <p>Hier een videofragment:</p>
          <Video src="https://www.youtube.com/embed/s0GZqHQYc7U" />
          <p>
            Wat u net hoorde was de eerste serie liederen die we op een concert
            tijdens het Gergiev festival in Rotterdam speelden. Hier een{' '}
            <a
              href="https://youtu.be/-KKP_T2vC4s"
              target={'_blank'}
              rel="noreferrer"
            >
              link
            </a>{' '}
            van dit concert in zijn geheel inclusief een mondelinge toelichting
            door Wim van Zanten.
          </p>
          <p>
            Tijdens de toelichting veel over de geschiedenis en inhoud van deze
            prachtige poëzie en muziek, ook te lezen via deze hyperlink.
          </p>
          <p>
            Deze Sundanese muziek is weinig bekend in Nederland. Misschien in
            een heel klein Indische kring maar het is zeker bij het Indonesisch
            ambassadepersoneel. In Indonesië wordt deze muziek vaak tijdens
            speciale ceremoniën gebruikt, meestal bij huwelijken. Ook in hotels
            als achtergrondmuziek. Dit vormt een zeer aangenaam contrast met het
            grote lawaai buiten in de grote steden. Concerten vinden meestal
            plaats in landen buiten Indonesië.
          </p>
          <p>
            Aangezien zij rust en sereniteit uitdraagt is deze muziek zeker
            geschikt voor uw evenement met een speciale cachet. Ook geschikt
            voor tijdens de yoga- en meditatiepraktijken.
          </p>
          <SectionDivider />

          <div>
            <CustomImage
              src={dinand}
              alt="Foto met Dinand Woesthoff"
              maxWidth={600}
            />
          </div>

          <p>
            Popster <span className="bold">Dinand Woesthoff</span> heeft mij
            uitgenodigd om in zijn groep mee te spelen tijdens een pop venue in
            het Amsterdamse Bos. Als slot een optreden tijdens de{' '}
            <span className="bold">75e Indiëherdenking</span> op 15 augustus
            2020. Dat vond ik een grote eer. Ik heb dit als een prachtige
            samenwerking ervaren waarbij we een symbiose met Oost en West hebben
            kunnen bereiken. Van het laatste optreden een televisie opname door
            NPO:
          </p>
          <Video src="https://www.youtube.com/embed/L0qXfbPdeT0" />
          <p>
            Mocht u belangstelling hebben voor deze muziek klik op dit
            formulier, tevens contactformulier waarop alle benodigde informatie
            staat en waarop u uw wensen kenbaar kunt maken.
          </p>
          <div>
            <CustomImage src={dinand2} alt="Foto met Dinand Woesthoff" />
          </div>
        </section>
      </Container>
    </Page>
  )
}

export default Muziek
