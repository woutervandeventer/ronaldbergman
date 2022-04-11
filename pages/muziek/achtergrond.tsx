import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import Container from '../../components/Container'
import CustomImage from '../../components/CustomImage'
import Page from '../../components/Page'
import PageTitle from '../../components/PageTitle'
import SectionDivider from '../../components/SectionDivider'
import SectionTitle from '../../components/SectionTitle'
import suling from '../../public/images/suling-large.jpeg'
import piano from '../../public/images/piano-large.jpeg'

const Muziek: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ronald Bergman | Mijn muzikale achtergrond</title>
        <meta
          name='description'
          content='Van huis uit opgegroeid met popmuziek kreeg ik later interesse en ervaring in jazz, klassiek, dans en muziek uit midden Java, Brazilië en Sunda.'
        />
      </Head>
      <Page>
        <PageTitle title='Muziek' />
        <Container>
          <section>
            <SectionTitle title='Mijn muzikale achtergrond' />
            <p>
              Van huis uit opgegroeid met popmuziek kreeg ik later interesse en
              ervaring in jazz, klassiek, dans en muziek uit midden Java,
              Brazilië en Sunda (West Java).
            </p>
            <p className='bold'>Westerse muziek</p>
            <p>
              Ondanks dat ik enige muziektheoretische kennis heb opgedaan op het
              gebied van jazz en klassiek, zijn mijn gehoor en intuïtie de
              belangrijkste hulpmiddelen bij het componeren en improviseren.
              Mijn basisinstrument is dwarsfluit en de piano gebruik ik om
              overzicht te kunnen krijgen in de harmonie. Om beter ritmisch te
              kunnen spelen, bespeel ik diverse Braziliaanse percussie
              instrumenten. Al deze verschillende elementen, t.w. melodie,
              harmonie en ritme, geven elkaar ondersteuning tot één mooi geheel.
            </p>
            <CustomImage
              src={piano}
              alt='Ronald aan het componeren achter de piano.'
            />
            <SectionDivider />
            <p className='bold'>Oosterse muziek</p>
            <p>
              In tegenstelling tot de stemming van de instrumenten in het westen
              is die van in Azië niet getemperd (gelijkgestemd, temperiert).
              Kwarttonen zijn daar niet vreemd. Ook is er geen sprake van een
              harmonisch stelsel. Toch is antropoloog/musicus Wim van Zanten
              erin geslaagd om in samenwerking met wijlen musicus Pak Uking
              Sukri, toen werkzaam bij o.a. Radio Bandung, in deze muziek en
              poëzie duidelijkheid te brengen voor de westerling. Uitgebreid
              uitleg deed hij in zijn boek ‘Sundanese music in the Cianjuran
              Style’ a.d.h.v. westerse notatie. Daar heb ik heel veel kennis
              kunnen opdoen in combinatie met muziekopnamen. In de periode
              waarin hij colleges gaf aan Universiteit Leiden gaf hij als bijvak
              deze muziek en ik mocht daar meedoen als gast leerling. Met de
              gevorderde groep speelde ik later mee met hun concerten. Daarna
              werd ik vast lid van de groep.
            </p>
            <CustomImage
              src={suling}
              alt='Ronald bespeelt de suling, een houten fluit uit Indonesië.'
            />
          </section>
        </Container>
      </Page>
    </>
  )
}

export default Muziek
