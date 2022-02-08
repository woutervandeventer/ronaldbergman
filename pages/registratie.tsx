import { NextPage } from 'next'
import React from 'react'
import Background from '../components/Background'
import Container from '../components/Container'
import Page from '../components/Page'
import PageTitle from '../components/PageTitle'
import SectionDivider from '../components/SectionDivider'
import SectionTitle from '../components/SectionTitle'
import Video from '../components/Video'

const Registratie: NextPage = () => {
  return (
    <Page>
      <Background type="video" />
      <PageTitle title="Video" />
      <Container>
        <section>
          <SectionTitle title="Registratie" />
          <p>
            Ik registreer overwegend dans- en muziekvoorstellingen. Dat doe ik
            op de meest eenvoudige manier met één camera en ik gebruik daarbij
            extern een hoogwaardige stereomicrofoon. Door dit aan te sluiten
            wordt het geluid automatisch op één niveau opgenomen dat door mij
            vooraf is ingesteld. Hierdoor heb ik geen last van hinderlijke
            volumecorrecties bij zachte passages.
          </p>
          <p>
            Ik hou van een meest natuurlijke registratie. In werkelijkheid zit
            ik als publiek in de zaal op één plek en niet opeens achter, voor,
            links, rechts of zelfs boven b.v. de pianist. In werkelijkheid zoom
            ik in gedachten op haar of hem in. Dit doe ik ook in mijn opname via
            een langzaam vloeiende beweging. In een dans richt ik mij intuïtief
            op het centrum van de actie zonder het geheel te verliezen door bij
            tijd en wijle langzaam in en uit te zoomen.
          </p>
          <p>
            Afhankelijk van de opdracht ben ik bereid een tweede camera aan te
            schaffen voor details. In dat geval zal het inzoomen niet
            plaatsvinden. Hierbij zal bij editing als resultaat een afwisselend
            integraal- en detailbeeld te zien zijn, beiden in één vaststaand
            kader.
          </p>
        </section>
        <SectionDivider />
        <p>Hieronder een paar voorbeelden met één camera.</p>
        <Video
          src="https://www.youtube.com/embed/ot_qeI3-6rI"
          caption="Muziekregistratie uit 2017 met mijn huidige camera"
        />
        <Video
          src="https://www.youtube.com/embed/kdI6TnIsUns"
          caption="Dansregistratie uit 2009 met mijn vorige camera"
        />
      </Container>
    </Page>
  )
}

export default Registratie
