import React from 'react'
import styles from '../styles/components/Navigation.module.scss'
import Button from './Button'

const Navigation = () => {
  return (
    <nav>
      Ga verder naar:
      <ul className={styles.navigation}>
        <li>
          <Button href='/video/digitalisering' title='Digitalisering' />
        </li>
        <li>
          <Button href='/video/registratie' title='Registratie' />
        </li>
        <li>
          <Button href='/video/overig' title='Video overig' />
        </li>
        <li>
          <Button href='/muziek/brazilie' title='Brazilië' />
        </li>
        <li>
          <Button href='/muziek/indonesie' title='Indonesië' />
        </li>
        <li>
          <Button href='/muziek/achtergrond' title='Muzikale achtergrond' />
        </li>
        <li>
          <Button href='/muziek/componeren' title='Componeren' />
        </li>
        <li>
          <Button href='/contact/digitaliseren' title='Contact' />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
