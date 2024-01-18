import React from 'react'
import styles from './Homepage.module.css';
const Homepage = () => {
  return (
    <>
    <div className={styles.main}>
        <div className={styles.div1}>
            <img className={styles.mainimg} src="https://assets.api.uizard.io/api/cdn/stream/38699d0b-f191-45f2-9ed8-07410452cf42.png" alt="" />
        </div>
        <div className={styles.div2}> 
        <img className={styles.smallimg} src="https://assets.api.uizard.io/api/cdn/stream/38699d0b-f191-45f2-9ed8-07410452cf42.png" alt="" />
        <div className={styles.maintitle}>
        <h1 className={styles.title}>Breeze</h1>
        <p>Weather App</p>
        </div>
        <button className={styles.btn}>Get Started </button>
        </div>
    </div>
    </>
  )
}
export default Homepage
