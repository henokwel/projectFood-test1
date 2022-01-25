import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
  const [currentSearch, setCurrentSearch] = useState("");
  console.log(data);


  // const fetchData = async () => {
  //   const res = await fetch("/api/hello")
  //   const data = await res.json()
  //   console.log(data);
  // }


  // Get Location
  




  const fetchData = async () => {
    // const res = await fetch("/api/hello")
    // const data = await res.json()
    // console.log(data);
    // if (navigator.geolocation) {
    //  navigator.geolocation.getCurrentPosition(showPos)
    //  showPos()

  }


  const showPos = (pos) => {
    console.log(pos)
  }
  //
  const showInMapClicked = () => {
    // window.open("https://maps.google.com?q=59.5280591+17.913884")
  };

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

        <h4>Your Current Location</h4>
        <button onClick={showInMapClicked}>Get Location</button>

        <form onSubmit={(e) => handleSubmit(e)}>
          {/* <input
            type="text"
            value={currentSearch}
            onChange={(e) => handleInput(e)}
            placeholder="Your Location" />
          <br /> */}
          <label>
            Food: <br />
            <select  >
              <option value="grapefruit" defaultChecked >All</option>
              <option value="lime">Pizza</option>
              <option value="coconut">Burger</option>
              <option value="mango">Sushi</option>
              <option value="mango">Kebab</option>
            </select>
          </label>
          <br />

          <label>
            Price:<br />
            <select  >
              {/* <option value="grapefruit" defaultChecked >All</option> */}
              <option value="one" >$</option>
              <option value="two" defaultChecked>$$</option>
              <option value="three">$$$</option>

            </select>
          </label>
          <br />

          <input type="submit" title="Submit" value="Search" />
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



