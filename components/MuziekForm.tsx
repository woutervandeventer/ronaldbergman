import React from 'react'
import styles from '../styles/components/Form.module.scss'

const MuziekForm = () => {
  return (
    <section>
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>Tarieven live muziek*</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Starttarief per persoon (2x 45 min. optreden)</td>
            <td>€200,-</td>
          </tr>

          <tr>
            <td>Per extra 45 min. per persoon</td>
            <td>€75,-</td>
          </tr>
        </tbody>
      </table>

      <p>*excl. BTW (9%) en reiskosten</p>

      <form
        name='muziek'
        method='post'
        data-netlify='true'
        // data-netlify-honeypot="bot-field"
        className={styles.form}
      >
        <input type='hidden' name='form-name' value='muziek' />

        <p className='bold'>Geef hier aan welke live muziek u nodig heeft</p>

        <div>
          <p className='bold'>Brazilië</p>

          <div>
            <div>
              <input
                type='radio'
                name='groep'
                value='chorosambassanova'
                id='chorosambassanova'
                required
              />
              <label htmlFor='chorosambassanova'>ChoroSamBassaNova</label>
            </div>

            <div>
              <input
                type='radio'
                name='groep'
                value='conjunto-haiano'
                id='conjunto-haiano'
                required
              />
              <label htmlFor='conjunto-haiano'>Conjunto Haiano</label>
            </div>

            <p className='bold'>Indonesië</p>

            <div>
              <input
                type='radio'
                name='groep'
                value='dangiang-parahiangan'
                id='dangiang-parahiangan'
                required
              />
              <label htmlFor='dangiang-parahiangan'>Dangiang Parahiangan</label>
            </div>
          </div>
        </div>

        <div>
          <label className='bold' htmlFor='duur-optreden'>
            De duur van het optreden
          </label>
          <input
            type='text'
            name='duur-optreden'
            id='duur-optreden'
            required
            placeholder='Bijv. 2x 45 minuten'
          />
        </div>

        <div>
          <label className='bold' htmlFor='locatie'>
            De locatie
          </label>
          <input
            type='text'
            name='locatie'
            id='locatie'
            required
            placeholder='Adres'
          />
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

export default MuziekForm
