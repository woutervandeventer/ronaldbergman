import Link from 'next/link'
import React, { useState } from 'react'
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

  const handleClick = () => {
    setShowItems(false)
    setShowMenu && setShowMenu(false)
  }

  return (
    <>
      <div onClick={() => setShowItems(!showItems)}>{title}</div>
      <ul className={`${styles.items} ${showItems && styles.showItems}`}>
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.href}>
              <a onClick={handleClick}>{item.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Dropdown
