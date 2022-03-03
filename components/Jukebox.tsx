import React, { useRef, useState } from 'react'
import { jukeboxData } from '../data/jukeboxData'
import styles from '../styles/components/Jukebox.module.scss'
import YouTube from 'react-youtube'

interface Props {
  title: string
  style: string
  description: string
  videoId: string
}

const JukeboxItem = (item: Props) => {
  const playerRef = useRef<YouTube>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClick = async () => {
    if (!playerRef.current) {
      return
    }

    const player = playerRef.current.getInternalPlayer()
    const state = await player.getPlayerState()

    if (state === 1) {
      player.pauseVideo()
    } else {
      player.playVideo()
    }
  }

  return (
    <li className={styles.container} key={item.videoId}>
      <div
        className={`${styles.text} ${isPlaying && styles.hidden}`}
        onClick={handleClick}
      >
        <div>
          <span className={styles.title}>{item.title}</span> -{' '}
          <span className={styles.style}>{item.style}</span>
        </div>
        <div className={styles.description}>{item.description}</div>
      </div>
      <div className={styles.iframeWrapper}>
        <YouTube
          className={styles.iframe}
          videoId={item.videoId}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          ref={playerRef}
        />
      </div>
    </li>
  )
}

const Jukebox = () => {
  return (
    <ul className={styles.list}>
      {jukeboxData.map((item) => JukeboxItem(item))}
    </ul>
  )
}

export default Jukebox
