import React from 'react'
import styles from '../styles/components/PageTitle.module.scss'

interface Props {
  title: string
}

const PageTitle = ({ title }: Props) => {
  return <h2 className={styles.title}>{title}</h2>
}

export default PageTitle
