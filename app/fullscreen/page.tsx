import Image from 'next/image'
import styles from './page.module.css'
import NextVideo from 'next-video';
import awesomeVideo from '/videos/BBB-720p-1min.mp4';

export default function Home() {
  return (
    <>
      <style>{`
        .h-screen { height: 100vh; }
        .w-full { width: 100%; }
      `}</style>
      <NextVideo
        className="h-screen w-full"
        style={{ '--media-object-fit': 'cover' }}
        src={awesomeVideo}
        controls={true}
      />
    </>
  )
}
