import Link from 'next/link'
import React, { useState } from 'react'
import Burger from './Burger'
import Logo from './Logo'
import styles from '../styles/components/Header.module.scss'
import Dropdown from './Dropdown'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} ${showMenu && styles.showMenu}`}>
        <Logo onClick={() => setShowMenu(false)} />
        <ul className={styles.navLinkList}>
          <li>
            <Link href="/">
              <a onClick={() => setShowMenu(false)}>Home</a>
            </Link>
          </li>
          <Dropdown
            title="Video"
            setShowMenu={setShowMenu}
            items={[
              {
                href: '/video/digitalisering',
                text: 'Digitalisering'
              },
              {
                href: '/video/registratie',
                text: 'Registratie'
              },
              {
                href: '/video/overig',
                text: 'Overige werkzaamheden'
              }
            ]}
          />
          <Dropdown
            title="Muziek"
            setShowMenu={setShowMenu}
            items={[
              {
                href: '/muziek/brazilie',
                text: 'Brazilië'
              },
              {
                href: '/muziek/indonesie',
                text: 'Indonesië'
              },
              {
                href: '/muziek/achtergrond',
                text: 'Mijn achtergrond'
              },
              {
                href: '/muziek/componeren',
                text: 'Componeren'
              }
            ]}
          />
          <li>
            <Link href="/contact">
              <a onClick={() => setShowMenu(false)}>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Burger onClick={() => setShowMenu(!showMenu)} showMenu={showMenu} />
    </header>
  )
}

export default Header
