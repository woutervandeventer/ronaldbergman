import React from 'react'
import styles from '../styles/components/Background.module.scss'
import { useRouter } from 'next/router'

const Background = () => {
  const currentPath = useRouter().pathname

  if (['/', '/contact'].includes(currentPath)) {
    return (
      <div className={styles.combinedContainer}>
        <div className={styles.subContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/muziek.jpeg"
            alt="Achtergrondfoto"
            className={styles.combinedImage}
          />
          <div className={styles.overlay} />
        </div>
        <div className={styles.subContainer}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/video.jpeg"
            alt="Achtergrondfoto"
            className={styles.combinedImage}
          />
          <div className={styles.reverseOverlay} />
        </div>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className={styles.image}
        src={
          ['/digitalisering', '/registratie', '/video-overig'].includes(
            currentPath
          )
            ? '/images/video.jpeg'
            : '/images/muziek.jpeg'
        }
        alt="Achtergrondfoto"
      />
      <div className={styles.overlay}></div>
    </div>
  )
}

export default Background
