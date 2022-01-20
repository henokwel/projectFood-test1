import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react';
import styles from '../styles/Home.module.css'

export default function Home() {

  // const fetchData = async () => {

  //   const res = await fetch("/api/hello")
  //   const data = await res.json()
  //   console.log(data);

  // }


  useEffect(() => {
    (async () => {
      const res = await fetch("/api/hello")
      const data = await res.json()
    })()
  }, [])


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h4>Google Api Test</h4>
        
        
      </main>

       
    </div>
  )
}
