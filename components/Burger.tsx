import React from 'react'
import styles from '../styles/components/Burger.module.scss'

interface Props {
  onClick: () => void
  showMenu: boolean
}

const Burger = ({ onClick, showMenu }: Props) => {
  return (
    <button
      className={`${styles.button} ${showMenu && styles.open}`}
      onClick={onClick}
      aria-label="Open and close navigation menu"
    >
      <div></div>
    </button>
  )
}

export default Burger
