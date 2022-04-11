import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Container from '../../components/Container'
import CustomImage from '../../components/CustomImage'
import Jukebox from '../../components/Jukebox'
import Page from '../../components/Page'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import wordsOnWings from '../../public/images/words-on-wings.jpg'

const Muziek: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ronald Bergman | Componeren</title>
        <meta
          name='description'
          content='Ronald is beïnvloed door veel uiteenlopende muziekstijlen uit Europa, Noord en Zuid Amerika, Afrika en Azië. Dat heeft zijn weerslag op het schrijven van muziek.'
        />
      </Head>
      <Page>
        <PageTitle title='Muziek' />
        <Container>
          <section>
            <SectionTitle title='Componeren' />
            <p className='bold'>Instrumentaal</p>
            <p>
              Zoals eerder aangegeven ben ik beïnvloed door veel uiteenlopende
              muziekstijlen uit Europa, Noord en Zuid Amerika, Afrika en Azië.
              Dat heeft zijn weerslag op het schrijven van muziek. Eerst schreef
              ik instrumentale muziek in Choro, Samba en Bossa Nova stijl.
            </p>
            <p className='bold'>Liederen</p>

            <div>
              <CustomImage
                src={wordsOnWings}
                alt='Words On Wings'
                maxWidth={400}
                priority
              />
            </div>

            <p>
              Later ben ik gedichten tegengekomen van jazz-zangeres Joy Misa die
              mij inspireerden tot het schrijven van liederen. Het resultaat
              werd door haar <span className='bold'>art songs</span> genoemd.
              Van een paar songs werd het meerdere tot een aantal van 20.
              Hieruit ontstond een project genaamd{' '}
              <span className='bold'>Words on Wings</span>. Door samensmelting
              van poëzie en muziek kregen woorden vleugels. De inhoud van haar
              gedichten zijn merendeels emoties, levenservaringen dat met heel
              veel sfeer werd verwoord. Ik liet mijn fantasie gaan. Iemand die
              naar het resultaat luisterde, ervaarde dit alsof ze naar een film
              zat te kijken. Zo heb ik haar gedichten ook ervaren omdat haar
              taal beeldend is. Op mijn beurt noem ik ze weer{' '}
              <span className='bold'>art movie songs</span>. Ze haalt de natuur
              vaak aan als metafoor. De metamorfose van gedicht/muziek naar song
              is een bijzonder proces gebaseerd voornamelijk op gehoor en
              intuïtie. Kennis en techniek komen pas later aan de orde.
            </p>
            <p>
              Hier een aantal songs met vermelding van stijl/ritme, titel, link
              en de inhoud van het gedicht in het kort zoals ik het heb ervaren.
            </p>
            <Jukebox />
            <p>
              Dit zijn opnames met onze groep Words on Wings tijdens ons
              optreden in de Centrale Bibliotheek Den Haag.
            </p>
            <p className='bold'>De toekomst</p>
            <p>
              Wij hopen dit project levend te kunnen houden in de vorm van
              optredens en professionele opnames. Financieel kunnen wij dat
              echter niet alleen realiseren. Wij blijven het e.e.a. proberen.
              Mocht u daar ideeën over hebben dan kunt hier in dit formulier
              vermelden. Wie weet...
            </p>
          </section>
        </Container>
      </Page>
    </>
  )
}

export default Muziek
