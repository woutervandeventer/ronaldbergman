import React, { ReactNode } from 'react'
import styles from '../styles/components/Page.module.scss'
import Background from './Background'

interface Props {
  children: ReactNode
}

const Page = ({ children }: Props) => {
  return (
    <main className={styles.main}>
      <Background />
      {children}
    </main>
  )
}

export default Page
