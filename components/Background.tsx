import React from 'react'
import styles from '../styles/components/Background.module.scss'

interface Props {
  type: 'video' | 'music' | 'combined'
}

const Background = ({ type }: Props) => {
  switch (type) {
    case 'video':
      return (
        <div className={`${styles.background} ${styles.combined}`}>
          <img src="/images/video.jpeg" alt="Camera met kroonluchter" />
          <div className={styles.overlay}></div>
        </div>
      )
    case 'music':
      return (
        <div className={`${styles.background} ${styles.combined}`}>
          {/* <img
            className={styles.image}
            src="/images/muziek.jpeg"
            alt="Ronald Bergman als fluitist en componist"
          /> */}
          <div className={styles.overlay}></div>
        </div>
      )
    case 'combined':
      return (
        <div className={`${styles.background} ${styles.combined}`}>
          <img src="/images/muziek.jpeg" alt="" />
          <div className={styles.overlay}></div>
        </div>
      )
  }
}

export default Background
