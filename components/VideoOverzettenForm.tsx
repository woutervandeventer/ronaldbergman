import React from 'react'
import styles from '../styles/components/Form.module.scss'

const VideoOverzettenForm = () => {
  return (
    <section>
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>Tarieven (Fase I - capture)*</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Starttarief (tot 2 uur overzetten)</td>
            <td>€22,50</td>
          </tr>

          <tr>
            <td>Per extra uur</td>
            <td>€10,-</td>
          </tr>
        </tbody>
      </table>

      <p>*excl. BTW (21%)</p>

      <form
        name='vhs-video-overzetten'
        method='post'
        data-netlify='true'
        // data-netlify-honeypot="bot-field"
        className={styles.form}
      >
        <input type='hidden' name='form-name' value='vhs-video-overzetten' />

        <p className='bold'>Selecteer de duur van de tape</p>

        <div>
          <div>
            <input
              type='radio'
              name='lengte-tape'
              value='korter dan 2 uur'
              id='<2u'
              required
            />
            <label htmlFor='<2u'>Korter dan 2 uur</label>
          </div>

          <div>
            <input
              type='radio'
              name='lengte-tape'
              value='langer dan 2 uur'
              id='>2u'
              required
            />
            <label htmlFor='>2u'>Langer dan 2 uur</label>
          </div>
        </div>

        <p className='bold'>Vink hier eventuele extra werkzaamheden aan</p>

        <div>
          <div>
            <input type='checkbox' name='revisie' id='revisie' />
            <label htmlFor='revisie'>Fase II Revisie</label>
          </div>

          <div>
            <input type='checkbox' name='editing' id='editing' />
            <label htmlFor='editing'>Fase III Editing</label>
          </div>

          <div>
            <input type='checkbox' name='overzetten' id='overzetten' />
            <label htmlFor='overzetten'>Fase IV Overzetten op DVD of MP4</label>
          </div>
        </div>

        <div>
          <label className='bold' htmlFor='naam'>
            Uw naam
          </label>
          <input
            type='text'
            name='naam'
            id='naam'
            placeholder='Naam'
            required
          />
        </div>

        <div>
          <label className='bold' htmlFor='email'>
            Uw e-mailadres
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            required
          />
        </div>

        <p>
          Na het invullen van deze gegevens zal ik contact met u opnemen via uw
          e-mailadres. Indien u dit liever telefonisch of per app wilt, kunt u
          hieronder uw gegevens achterlaten.
        </p>

        <textarea
          name='bericht'
          id='messaged'
          cols={30}
          rows={6}
          placeholder='Bericht'
        />

        <button className={styles.submitButton} type='submit'>
          Versturen
        </button>
      </form>

      <p>
        Indien wij mondeling of schriftelijk overeenkomen met de prijs dan stuur
        ik u een offerte ter ondertekening.
      </p>
    </section>
  )
}

export default VideoOverzettenForm
