import React, { useEffect, useRef, useState } from 'react'
import { jukeboxData } from '../data/jukeboxData'
import styles from '../styles/components/Jukebox.module.scss'
import YouTube from 'react-youtube'

interface Props {
  item: {
    title: string
    style: string
    description: string
    videoId: string
  }
  currentVideoPlayingId: string
  setCurrentVideoPlayingId: React.Dispatch<React.SetStateAction<string>>
}

const JukeboxItem = ({
  item,
  currentVideoPlayingId,
  setCurrentVideoPlayingId
}: Props) => {
  const playerRef = useRef<YouTube>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (currentVideoPlayingId !== item.videoId) {
      setIsPlaying(false)
    }
  }, [currentVideoPlayingId, item])

  useEffect(() => {
    if (!playerRef.current) {
      return
    }

    const player = playerRef.current.getInternalPlayer()

    isPlaying ? player.playVideo() : player.pauseVideo()
  }, [isPlaying])

  return (
    <li className={styles.container} key={item.videoId}>
      <div
        className={`${styles.text} ${isPlaying && styles.hidden}`}
        onClick={() => {
          setIsPlaying(true)
          setCurrentVideoPlayingId(item.videoId)
        }}
      >
        <div className={styles.header}>
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
          onEnd={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          ref={playerRef}
        />
      </div>
    </li>
  )
}

const Jukebox = () => {
  const [currentVideoPlayingId, setCurrentVideoPlayingId] = useState('')

  return (
    <ul className={styles.list}>
      {jukeboxData.map((item) =>
        JukeboxItem({ item, currentVideoPlayingId, setCurrentVideoPlayingId })
      )}
    </ul>
  )
}

export default Jukebox
