import React, { ReactNode } from 'react'
import styles from '../styles/components/Page.module.scss'
import Background from './Background'

interface Props {
  children: ReactNode
}

const Page = ({ children }: Props) => {
  return (
    <>
      <Background />
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Page
