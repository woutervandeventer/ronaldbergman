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
}

const Dropdown = ({ title, items }: Props) => {
  const [showItems, setShowItems] = useState(false)

  return (
    <>
      <div onClick={() => setShowItems(!showItems)}>{title}</div>
      <ul className={`${styles.items} ${showItems && styles.showItems}`}>
        {items.map((item, i) => (
          <li key={i}>
            <Link href={item.href}>
              <a>{item.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Dropdown
