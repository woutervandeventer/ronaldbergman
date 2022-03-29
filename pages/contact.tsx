import React, { useState } from 'react'
import Container from '../components/Container'
import Page from '../components/Page'
import PageTitle from '../components/PageTitle'
import SectionTitle from '../components/SectionTitle'
import VideoOverzettenForm from '../components/VideoOverzettenForm'

interface SelectButtonProps {
  formTitle: string
  setSelectedForm: React.Dispatch<React.SetStateAction<string>>
}

const SelectButton = ({ formTitle, setSelectedForm }: SelectButtonProps) => {
  return <button onClick={() => setSelectedForm(formTitle)}>{formTitle}</button>
}

const Contact = () => {
  const [selectedForm, setSelectedForm] = useState('VHS video overzetten')

  // render different form on selection
  // create form component
  // handle submit
  // use netlify forms

  return (
    <Page>
      <PageTitle title="Contact" />
      <Container>
        <ul>
          <li>
            <SelectButton
              formTitle="VHS video overzetten"
              setSelectedForm={setSelectedForm}
            />
          </li>

          <li>
            <SelectButton
              formTitle="Videoregistratie"
              setSelectedForm={setSelectedForm}
            />
          </li>

          <li>
            <SelectButton
              formTitle="Muzikaal optreden"
              setSelectedForm={setSelectedForm}
            />
          </li>
        </ul>

        {selectedForm === 'VHS video overzetten' && <VideoOverzettenForm />}
      </Container>
    </Page>
  )
}

export default Contact
