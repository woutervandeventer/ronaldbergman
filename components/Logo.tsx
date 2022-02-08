import Link from 'next/link'
import React from 'react'
import styles from '../styles/components/Logo.module.scss'

interface Props {
  onClick: () => void
}

const Logo = ({ onClick }: Props) => {
  return (
    <Link href="/">
      <a className={styles.link} onClick={onClick}>
        <span>FranklinStudioRony</span>
      </a>
    </Link>
  )
}

export default Logo
