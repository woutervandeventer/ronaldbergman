import React, { ReactNode } from 'react'
import styles from '../styles/components/Page.module.scss'
import Background from './Background'

interface Props {
  children: ReactNode
  background?: 'video' | 'music'
}

const Page = ({ children, background }: Props) => {
  return (
    <main className={styles.main}>
      <Background image={background} />
      {children}
    </main>
  )
}

export default Page
