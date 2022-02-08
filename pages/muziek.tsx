import { NextPage } from 'next'
import React from 'react'
import Background from '../components/Background'
import Container from '../components/Container'
import Page from '../components/Page'
import PageTitle from '../components/PageTitle'

const Muziek: NextPage = () => {
  return (
    <Page>
      <Background type="music" />
      <PageTitle title="Muziek" />
      <Container>Muziek</Container>
    </Page>
  )
}

export default Muziek
