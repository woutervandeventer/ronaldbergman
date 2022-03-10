import { NextPage } from 'next'
import React from 'react'
import Container from '../../components/Container'
import CustomImage from '../../components/CustomImage'
import Page from '../../components/Page'
import PageTitle from '../../components/PageTitle'
import SectionDivider from '../../components/SectionDivider'
import SectionTitle from '../../components/SectionTitle'
import Video from '../../components/Video'
import chorosambassanova from '../../public/images/chorosambassanova.jpg'
import conjuntoHaiano from '../../public/images/conjunto-haiano.jpg'

const Muziek: NextPage = () => {
  return (
    <Page>
      <PageTitle title="Muziek" />
      <Container>
        <section>
          <SectionTitle title="Brazilië" />
          <div>
            <CustomImage
              src={chorosambassanova}
              alt="Foto van de groep ChoroSambassaNova"
            />
          </div>
          <p>
            Met onze groep <span className="bold">ChoroSamBassaNova</span>{' '}
            spelen wij met zijn drieën muziek uit Brazilië. Hier een klein
            videofragment ter demonstratie.
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
          <SectionDivider />

          <div>
            <CustomImage
              src={conjuntoHaiano}
              alt="Foto van de groep Conjunto Haiano"
              maxWidth={500}
            />
          </div>

          <p>
            Een aantal jaren geleden heb ik met 3 vrienden van mij de groep{' '}
            <span className="bold">Conjunto Haiano</span> (vert. Haagse
            Formatie) opgericht. Wij speelden instrumentale muziek meer vanuit
            de Choro stijl met een klein uitstapje naar de Samba.
          </p>
          <p>Een aantal videofragmenten:</p>
          <Video
            src="https://www.youtube.com/embed/t-oWIJNNxFI"
            caption="André de Sapato Novo"
          />
          <Video
            src="https://www.youtube.com/embed/vUGbS1vz_U0"
            caption="Carinhoso - het meest bekende stuk van componist Pinxuinguinha welke iedere Braziliaan kent zoals ook het geval is bij Aquarela do Brasil (Brazil)"
          />
          <Video
            src="https://www.youtube.com/embed/vFMB-zx-dUk"
            caption="1x0 um a zero - componist Pixinguinha schreef dit stuk n.a.v. een voetbalwedstrijd uit 1946 die door Brazilië werd gewonnen"
          />
          <Video
            src="https://www.youtube.com/embed/VWLNr-9Vt3o"
            caption="Amanhecer - een stuk van de virtuoze gitarist Baden Powell in samba stijl"
          />
          <p>
            Het gehele optreden van Conjunto Haiano in de Duinzigtkerk te Den
            Haag is{' '}
            <a
              href="https://youtu.be/OYEwpp0Ex6E"
              target={'_blank'}
              rel="noreferrer"
            >
              hier
            </a>{' '}
            terug te zien.
          </p>
          <p>
            Braziliaanse muziek in deze setting is heel erg geschikt voor kleine
            evenementen. Het publiek kan er naar gaan luisteren of er op dansen.
            Ook is het geschikt als achtergrondmuziek maar de ervaring leert dat
            het publiek niet kan stilzitten.
          </p>
          <p>
            Indien u belangstelling heeft voor deze muziek klik op dit
            formulier, tevens contactformulier, waarop alle benodigde informatie
            staat en waarop u uw wensen kenbaar kunt maken.
          </p>
        </section>
      </Container>
    </Page>
  )
}

export default Muziek
