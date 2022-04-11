import React from 'react'
import styles from '../styles/components/Form.module.scss'

const VideoRegistratieForm = () => {
  return (
    <section>
      <table className={styles.table}>
        <thead>
          <tr>
            <th colSpan={2}>Tarieven*</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Starttarief (tot 2 uur filmen)</td>
            <td>€60,-</td>
          </tr>

          <tr>
            <td>Per extra uur</td>
            <td>€25,-</td>
          </tr>
        </tbody>
      </table>

      <p>*excl. BTW (21%) en reiskosten</p>

      <form
        name='video-registratie'
        method='post'
        data-netlify='true'
        // data-netlify-honeypot="bot-field"
        className={styles.form}
      >
        <input type='hidden' name='form-name' value='video-registratie' />

        <p className='bold'>Selecteer de duur van het filmen</p>

        <div>
          <div>
            <input
              type='radio'
              name='lengte-registratie'
              value='korter dan 2 uur'
              id='<2'
              required
            />
            <label htmlFor='<2'>Korter dan 2 uur</label>
          </div>

          <div>
            <input
              type='radio'
              name='lengte-registratie'
              value='langer dan 2 uur'
              id='>2'
              required
            />
            <label htmlFor='>2'>Langer dan 2 uur</label>
          </div>
        </div>

        <div>
          <p className='bold'>Vink hier aan wat u geregistreerd wilt hebben</p>

          <div>
            <div>
              <input type='checkbox' name='muziek' id='muziek' />
              <label htmlFor='muziek'>Muziek</label>
            </div>

            <div>
              <input type='checkbox' name='dans' id='dans' />
              <label htmlFor='dans'>Dans</label>
            </div>

            <div>
              <input type='checkbox' name='toneel' id='toneel' />
              <label htmlFor='toneel'>Toneel</label>
            </div>

            <div>
              <input type='checkbox' name='opening' id='opening' />
              <label htmlFor='opening'>
                Openingen van bijvoorbeeld galeries
              </label>
            </div>

            <div>
              <input type='checkbox' name='overig' id='overig' />
              <label htmlFor='overig'>Overige optredens of evenementen</label>
            </div>
          </div>
        </div>

        <div>
          <p className='bold'>Vink hier eventuele overige opdrachten aan</p>

          <div>
            <input
              type='checkbox'
              name='programmaboekjes'
              id='programmaboekjes'
            />
            <label htmlFor='programmaboekjes'>
              Programmaboekjes digitaliseren
            </label>
          </div>

          <div>
            <input
              type='checkbox'
              name='muziek-voorzien-van-video'
              id='muziek-voorzien-van-video'
            />
            <label htmlFor='muziek-voorzien-van-video'>
              Muziek voorzien van bijpassende video
            </label>
          </div>

          <div>
            <input
              type='checkbox'
              name='video-voorzien-van-muziek'
              id='video-voorzien-van-muziek'
            />
            <label htmlFor='video-voorzien-van-muziek'>
              Video voorzien van bijpassende muziek
            </label>
          </div>

          <div>
            <input type='checkbox' name='teasers' id='teasers' />
            <label htmlFor='teasers'>Teasers</label>
          </div>

          <div>
            <input type='checkbox' name='clips' id='clips' />
            <label htmlFor='clips'>Clips</label>
          </div>

          <div>
            <input
              type='checkbox'
              name='muziek-vervangen'
              id='muziek-vervangen'
            />
            <label htmlFor='muziek-vervangen'>Muziek vervangen</label>
          </div>
        </div>

        <div>
          <label className='bold' htmlFor='duur-registratie'>
            De duur van het registratie
          </label>
          <input
            type='text'
            name='duur-registratie'
            id='duur-registratie'
            required
            placeholder='Bijv. 45 minuten'
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

export default VideoRegistratieForm
