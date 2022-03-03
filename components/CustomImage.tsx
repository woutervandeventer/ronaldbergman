import Image from 'next/image'
import React from 'react'
import styles from '../styles/components/CustomImage.module.scss'

interface Props {
  src: StaticImageData
  alt: string
}

const CustomImage = ({ src, alt }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Image src={src} alt={alt} layout="responsive" />
    </div>
  )
}

export default CustomImage
