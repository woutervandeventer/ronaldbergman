import React, { useEffect, useState } from 'react'
import styles from '../styles/components/Background.module.scss'
import Image from 'next/image'
import { useRouter } from 'next/router'
import muziek from '../public/images/dwarsfluit-small.jpeg'
import video from '../public/images/video-1-small.jpeg'
import videoMuziek from '../public/images/video-muziek-2-small.jpeg'

const Background = () => {
  const currentPath = useRouter().pathname

  const [src, setSrc] = useState(videoMuziek)

  useEffect(() => {
    if (currentPath.startsWith('/video')) {
      setSrc(video)
    } else if (currentPath.startsWith('/muziek')) {
      setSrc(muziek)
    } else {
      setSrc(videoMuziek)
    }
  }, [currentPath])

  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image src={src} alt='Achtergrondfoto' layout='responsive' priority />
        <div className={styles.overlay}></div>
      </div>
    </div>
  )
}

export default Background
