import { NextPage } from 'next'
import React from 'react'
import Background from '../components/Background'
import Container from '../components/Container'
import Page from '../components/Page'
import PageTitle from '../components/PageTitle'
import SectionDivider from '../components/SectionDivider'
import SectionTitle from '../components/SectionTitle'
import Video from '../components/Video'

const Muziek: NextPage = () => {
  return (
    <Page>
      <Background type="music" />
      <PageTitle title="Muziek" />
      <Container>
        Dit is een pagina over mijn muzikale activiteiten die ik met
        verschillende groepen heb, met veel achtergondinformatie.
        <section>
          <SectionTitle title="Brazilië" />
          <p>
            Met onze groep ChoroSamBassaNova spelen wij met zijn drieën muziek
            uit Brazilië. Hier een klein videofragment ter demonstratie.
          </p>
          <Video src="https://www.youtube.com/embed/Nd07qlJjcrE" />
          <p>
            Dit was een teaser om een kort overzicht te geven van de
            verschillende stijlen die we spelen, genaamd Choro, Samba en Bossa
            Nova. Hier is de naam van deze groep aan ontleend. Het gehele
            optreden, inclusief interview met Anja Schulze, is{' '}
            <a
              href="https://youtu.be/FLoff0fWolc"
              target={'_blank'}
              rel="noreferrer"
            >
              hier
            </a>{' '}
            te beluisteren.
          </p>
          <p>
            Een aantal jaren geleden heb ik met 3 vrienden van mij de groep
            Conjunto Haiano (vert. Haagse Formatie) opgericht. Wij speelden
            instrumentale muziek meer vanuit de Choro stijl met een klein
            uitstapje naar de Samba.
          </p>
          <p>Een aantal videofragmenten:</p>
          <Video
            src="https://www.youtube.com/embed/t-oWIJNNxFI"
            caption="André de Sapato Novo"
          />
        </section>
        <SectionDivider />
        <section>
          <SectionTitle title="Indonesië" />
        </section>
        <SectionDivider />
        <section>
          <SectionTitle title="Mijn muzikale achtergrond" />
        </section>
        <SectionDivider />
        <section>
          <SectionTitle title="Componeren" />
        </section>
        <SectionDivider />
        <section>
          <SectionTitle title="De toekomst" />
        </section>
      </Container>
    </Page>
  )
}

export default Muziek
