import React from 'react'
import Container from '../components/Container'
import Page from '../components/Page'
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'

const Contact = () => {
  return (
    <Page>
      <PageTitle title="Contact" />
      <Container>
        <SectionTitle title="Contactformulier" />
        <p>
          Met het onderstaande formulier kunt u contact met mij opnemen. Indien
          u iets wilt bestellen kunt u dat bij de keuze aangeven.
        </p>
      </Container>
    </Page>
  )
}

export default Contact
