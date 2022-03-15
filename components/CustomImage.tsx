import Image from 'next/image'
import React from 'react'
import styles from '../styles/components/CustomImage.module.scss'

interface Props {
  src: StaticImageData
  alt: string
  maxWidth?: number
  priority?: boolean
}

const CustomImage = ({ src, alt, maxWidth, priority }: Props) => {
  return (
    <div className={styles.wrapper} style={{ maxWidth: maxWidth }}>
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        lazyBoundary="500px"
        priority={priority}
      />
    </div>
  )
}

export default CustomImage
