import React from 'react'
import styles from '../styles/components/SectionTitle.module.scss'

interface Props {
  title: string
}

const SectionTitle = ({ title }: Props) => {
  return <h3 className={styles.title}>{title}</h3>
}

export default SectionTitle
