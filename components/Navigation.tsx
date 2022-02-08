import React from 'react'
import styles from '../styles/components/Navigation.module.scss'
import Button from './Button'

const Navigation = () => {
  return (
    <nav>
      Ga verder naar:
      <ul className={styles.navigation}>
        <li>
          <Button href="/digitalisering" title="Digitalisering" />
        </li>
        <li>
          <Button href="/registratie" title="Registratie" />
        </li>
        <li>
          <Button href="/video-overig" title="Video overig" />
        </li>
        <li>
          <Button href="/muziek" title="Muziek" />
        </li>
        <li>
          <Button href="/prijslijst" title="Prijslijst" />
        </li>
        <li>
          <Button href="/contact" title="Contact" />
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
