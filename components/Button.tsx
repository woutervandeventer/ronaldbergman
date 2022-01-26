import Link from 'next/link'
import React from 'react'
import styles from '../styles/components/Button.module.scss'

interface Props {
  href: string
  title: string
}

const Button = ({ href, title }: Props) => {
  return (
    <Link href={href}>
      <a className={styles.button}>{title}</a>
    </Link>
  )
}

export default Button
