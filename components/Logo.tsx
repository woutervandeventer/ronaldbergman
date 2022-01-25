import Link from 'next/link'
import React from 'react'
import styles from '../styles/components/Logo.module.scss'

const Logo = () => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>FranklinStudioRony</a>
      </Link>
    </div>
  )
}

export default Logo
