import React, { useState } from "react";
import Container from "../components/Container";
import MuziekForm from "../components/MuziekForm";
import Page from "../components/Page";
import PageTitle from "../components/PageTitle";
import VideoOverzettenForm from "../components/VideoOverzettenForm";
import VideoRegistratieForm from "../components/VideoRegistratieForm";
import styles from "../styles/components/Contact.module.scss";

interface SelectButtonProps {
  formTitle: string;
  selectedForm: string;
  setSelectedForm: React.Dispatch<React.SetStateAction<string>>;
}

const SelectButton = ({
  formTitle,
  selectedForm,
  setSelectedForm,
}: SelectButtonProps) => {
  return (
    <button
      className={`${styles.selectButton} ${
        selectedForm === formTitle && styles.selected
      }`}
      onClick={() => setSelectedForm(formTitle)}
    >
      {formTitle}
    </button>
  );
};

const Contact = () => {
  const [selectedForm, setSelectedForm] = useState("VHS video overzetten");

  return (
    <Page>
      <PageTitle title="Contact" />
      <Container>
        <ul className={styles.buttonList}>
          <li>
            <SelectButton
              formTitle="VHS video overzetten"
              selectedForm={selectedForm}
              setSelectedForm={setSelectedForm}
            />
          </li>

          <li>
            <SelectButton
              formTitle="Video registratie"
              selectedForm={selectedForm}
              setSelectedForm={setSelectedForm}
            />
          </li>

          <li>
            <SelectButton
              formTitle="Muzikaal optreden"
              selectedForm={selectedForm}
              setSelectedForm={setSelectedForm}
            />
          </li>
        </ul>

        {selectedForm === "VHS video overzetten" && <VideoOverzettenForm />}
        {selectedForm === "Video registratie" && <VideoRegistratieForm />}
        {selectedForm === "Muzikaal optreden" && <MuziekForm />}
      </Container>
    </Page>
  );
};

export default Contact;
