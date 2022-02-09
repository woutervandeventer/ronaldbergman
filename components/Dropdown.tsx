import Link from 'next/link'
import React, { SyntheticEvent, useEffect, useRef, useState } from 'react'
import styles from '../styles/components/Dropdown.module.scss'

type Item = {
  href: string
  text: string
}

interface Props {
  title: string
  items: Item[]
  setShowMenu?: React.Dispatch<React.SetStateAction<boolean>>
}

const Dropdown = ({ title, items, setShowMenu }: Props) => {
  const [showItems, setShowItems] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const useOutsideAlerter = () => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setShowItems(false)
        }
      }

      document.addEventListener('mousedown', handleClickOutside)

      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    })
  }

  useOutsideAlerter()

  const handleClick = () => {
    setShowItems(false)
    setShowMenu && setShowMenu(false)
  }

  return (
    <div
      className={styles.container}
      ref={dropdownRef}
      onMouseEnter={() => setShowItems(true)}
      onMouseLeave={() => setShowItems(false)}
    >
      <span
        onClick={() => {
          setShowItems(!showItems)
        }}
      >
        {title}
      </span>
      <ul className={`${styles.items} ${showItems && styles.showItems}`}>
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.href}>
              <a onClick={handleClick}>{item.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Dropdown
