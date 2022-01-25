import React from 'react'
import styles from '../styles/components/Video.module.scss'

interface Props {
  src: string
  caption?: string
}

const Video = ({ src, caption }: Props) => {
  return (
    <figure>
      <div className={styles.videoWrapper}>
        <iframe
          className={styles.iframe}
          width="560"
          height="315"
          src={src}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  )
}

export default Video
