import Link from 'next/link'
import React, { useRef, useState } from 'react'
import styles from '../styles/components/Dropdown.module.scss'
import useMediaQuery from '../utility/useMediaQuery'
import useOnClickOutside from '../utility/useOnClickOutside'

type Item = {
  href: string
  text: string
}

interface Props {
  title: string
  items: Item[]
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

const Dropdown = ({ title, items, setShowMenu }: Props) => {
  const [showItems, setShowItems] = useState(false)
  const ref = useRef(null)
  const isLargeScreen = useMediaQuery(`(min-width: ${styles.m}px)`)

  const handleClickOutside = () => {
    setShowItems(false)
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <li
      className={styles.container}
      ref={ref}
      onMouseEnter={() => isLargeScreen && setShowItems(true)}
      onMouseLeave={() => isLargeScreen && setShowItems(false)}
    >
      <button
        className={styles.button}
        onClick={() => !isLargeScreen && setShowItems(!showItems)}
      >
        {title}
      </button>
      <ul className={`${styles.items} ${showItems && styles.showItems}`}>
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.href}>
              <a
                onClick={() => {
                  setShowItems(false)
                  setShowMenu(false)
                }}
              >
                {item.text}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default Dropdown
