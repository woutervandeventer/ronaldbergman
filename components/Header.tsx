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
        <Logo />
        <ul className={styles.navLinkList}>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Dropdown
              title="Video"
              items={[
                {
                  href: '/digitalisering',
                  text: 'Digitalisering'
                },
                {
                  href: '/registratie',
                  text: 'Registratie'
                },
                {
                  href: '/video-overig',
                  text: 'Overige werkzaamheden'
                }
              ]}
            />
          </li>
          <li>
            <Link href="/muziek">
              <a>Muziek</a>
            </Link>
          </li>
          <li>
            <Link href="/prijslijst">
              <a>Prijslijst</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
      <Burger onClick={() => setShowMenu(!showMenu)} showMenu={showMenu} />
    </header>
  )
}

export default Header
