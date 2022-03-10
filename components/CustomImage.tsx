import Image from 'next/image'
import React from 'react'
import styles from '../styles/components/CustomImage.module.scss'

interface Props {
  src: StaticImageData
  alt: string
  maxWidth?: number
}

const CustomImage = ({ src, alt, maxWidth }: Props) => {
  return (
    <div className={styles.wrapper} style={{ maxWidth: maxWidth }}>
      <Image src={src} alt={alt} layout="responsive" />
    </div>
  )
}

export default CustomImage
