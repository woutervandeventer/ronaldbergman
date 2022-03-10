import React from 'react'
import styles from '../styles/components/Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      {`\u00A9 ${new Date().getFullYear().toString()} website door `}
      <a href="https://woutervandeventer.com/" target="_blank" rel="noreferrer">
        Wouter van Deventer
      </a>
    </footer>
  )
}

export default Footer
