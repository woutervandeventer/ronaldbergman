import Link from 'next/link'
import React from 'react'
import styles from '../styles/components/Logo.module.scss'

interface Props {
  onClick: () => void
}

const Logo = ({ onClick }: Props) => {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a onClick={onClick}>FranklinStudioRony</a>
      </Link>
    </div>
  )
}

export default Logo
