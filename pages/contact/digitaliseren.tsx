import Head from 'next/head'
import Container from '../../components/Container'
import Page from '../../components/Page'
import PageTitle from '../../components/PageTitle'
import SectionTitle from '../../components/SectionTitle'
import VideoOverzettenForm from '../../components/VideoOverzettenForm'

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
          <SectionTitle title='Contactformulier Digitaliseren Video' />
          <VideoOverzettenForm />
        </Container>
      </Page>
    </>
  )
}

export default Contact
