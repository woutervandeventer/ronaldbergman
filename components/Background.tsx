import styles from '../styles/components/Background.module.scss'
import Image from 'next/image'
import muziek from '../public/images/dwarsfluit-small.jpeg'
import video from '../public/images/video-1-small.jpeg'
import videoMuziek from '../public/images/video-muziek-2-small.jpeg'

interface Props {
  image?: 'video' | 'music'
}

const Background = ({ image }: Props) => {
  let src

  if (image === 'video') {
    src = video
  } else if (image === 'music') {
    src = muziek
  } else {
    src = videoMuziek
  }

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
