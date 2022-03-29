import React from 'react'
import SectionTitle from './SectionTitle'

const VideoOverzettenForm = () => {
  return (
    <section>
      <SectionTitle title="VHS video overzetten" />

      <p className="bold">Basistarieven excl. BTW (21%)</p>

      <table>
        <thead>
          <tr>
            {/* TODO: linken naar videopagina */}
            <th>Fase I Digitalisering</th>
          </tr>
        </thead>

        <tr>
          <td>Starttarief (tot 2 uur overzetten)</td>
          <td>€22,50</td>
        </tr>

        <tr>
          <td>Per extra uur</td>
          <td>€10,00</td>
        </tr>
      </table>

      <form
        name="vhs-video-overzetten"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="vhs-video-overzetten" />

        <p>Selecteer de duur van de tape</p>

        <div>
          <input type="radio" name="duur-tape" value="<2uur" checked />
          Korter dan 2 uur
        </div>

        <div>
          <input type="radio" name="duur-tape" value=">2uur" />
          Langer dan 2 uur
        </div>

        <p>Vink hier eventuele extra werkzaamheden aan</p>

        <div>
          <input type="checkbox" name="revisie" />
          Fase II Revisie
        </div>

        <div>
          <input type="checkbox" name="editing" />
          Fase III Editing
        </div>

        <div>
          <input type="checkbox" name="overzetten" />
          Fase IV Overzetten op DVD of MP4
        </div>

        <label htmlFor="email">Uw e-mailadres</label>
        <input type="email" name="email" id="email" required />

        <p>
          Na het invullen van deze gegevens zal ik contact met u opnemen via uw
          e-mailadres. Indien u dit liever telefonisch of per app wilt, kunt u
          hier uw gegevens achterlaten
        </p>

        <textarea name="bericht" id="messaged" cols={30} rows={10}></textarea>

        <input type="submit" value="Versturen" />
      </form>

      <p>
        Indien wij mondeling of schriftelijk overeenkomen met de prijs dan stuur
        ik u een offerte ter ondertekening.
      </p>
    </section>
  )
}

export default VideoOverzettenForm
