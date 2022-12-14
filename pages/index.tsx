import Head from 'next/head'
import Animations from '../components/animations'
import { useEffect } from "react";
import styles from './tapping.module.css'

export default function Home() {
  useEffect(() => {
    const mouseTapListner = (event: any) => {
      const tap = document.createElement("div")
      tap.className = styles.tapping
      tap.style.top = event.clientY - 100 + "px"
      tap.style.left = event.clientX - 100 + "px"
      document.body.prepend(tap)
      setTimeout(() => document.body.removeChild(tap), 400)
      return;
    }
    document.addEventListener('click', mouseTapListner)
    return () => {
      document.removeEventListener('click', mouseTapListner)
    }
  }, [])

  return (
    <div>
      <Head>

        <title>CSS 연습</title>
        <meta
          name="description"
          content="css 키프레임과 3D연습을 위한 연습장" />
      </Head>
      <main>
        <Animations />
      </main>
    </div>
  )
}
