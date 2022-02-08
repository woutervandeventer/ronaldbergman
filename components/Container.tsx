import React, { ReactNode } from 'react'
import styles from '../styles/components/Container.module.scss'
import Navigation from './Navigation'

interface Props {
  children: ReactNode
}

const Container = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      {children}
      <Navigation />
    </div>
  )
}

export default Container
