import Head from 'next/head'
import Container from '../../components/Container'
import MuziekForm from '../../components/MuziekForm'
import Page from '../../components/Page'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'

const Contact = () => {
  return (
    <>
      <Head>
        <title>Ronald Bergman | Contact</title>
        <meta
          name='description'
          content='Neem gerust contact op voor vragen over het omzetten van video, videoregistratie of live muziek.'
        />
      </Head>
      <Page>
        <PageTitle title='Contact' />
        <Container>
          <SectionTitle title='Contactformulier muzikaal optreden' />
          <MuziekForm />
        </Container>
      </Page>
    </>
  )
}

export default Contact
