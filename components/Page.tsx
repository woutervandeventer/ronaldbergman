import React, { ReactNode } from 'react'
import styles from '../styles/components/Page.module.scss'

interface Props {
  children: ReactNode
}

const Page = ({ children }: Props) => {
  return <main className={styles.main}>{children}</main>
}

export default Page
