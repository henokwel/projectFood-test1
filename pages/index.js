import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home({ data }) {

  console.log(data);

  const [currentSearch, setCurrentSearch] = useState("");
  // const fetchData = async () => {

  //   const res = await fetch("/api/hello")
  //   const data = await res.json()
  //   console.log(data);

  // }

  

  const fetchData = async () => {
    const res = await fetch("/api/hello")
    const data = await res.json()
    console.log(data);

  }


  //


  // useEffect(() => {
  //   (async () => {
  //     const res = await fetch("/api/hello")
  //     const data = await res.json()
  //     console.log(data);

  //   })()
  // }, [])

  const handleInput = e => {
    const target = e.target
    const value = target.value
    setCurrentSearch(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Google map test</title>
        <meta name="Google map test" content="Test Google map" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h4>Google Api Test</h4>
        <button onClick={fetchData}>Fetch Data</button>

        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            value={currentSearch}
            onChange={(e) => handleInput(e)}
            placeholder="Your Location" />
          <br />
          <input type="submit" title="Submit" value="Submit" />
        </form>

        {currentSearch}
      </main>


    </div>
  )
}


// This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   const res = await fetch("http://localhost:3000/api/hello")
//   const data = await res.json()

//   // Pass data to the page via props
//   return { props: { data } }
// }


