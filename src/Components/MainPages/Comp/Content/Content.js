import React from 'react'
import styles from './Content.module.css';
import { getImageUrl } from "../../../../utils";
const Content = (props) => {
    // const day1 = props.forecast[0].temp_c;
    props.forecast.map((key)=>{
        console.log(key.temp_c);
    })
  return (
    <div className={styles.content}>
      <input className={styles.search} type="text" placeholder='Search for the city' />
      <div className={styles.maincity}>
        <div>
        <h1>{props.name}</h1>
        <p>Chances of Rain : 0%</p>
        <br />
        <br />
        <h1 className={styles.degree}>{props.temp}°</h1>
        </div>
        <div>
       <img src={props.img} alt="" /> 
        </div>
      </div>
      <div className={styles.forecast}>
        <h3 className={styles.time} >Today's Forecast</h3>
            <div className={styles.details}>
                <h3 className={styles.time}>6:00 AM</h3>
                <img src="" alt="" />
                <h2>key.temp_c</h2>
            </div>
      </div>
      <div className={styles.Conditions}> 
        <div className={styles.gaps}>
            <h2>Air Conditions</h2>
            <div className={styles.gaps}>
            <div className={styles.desc}>
                    <img className={styles.icons} src={getImageUrl("/thermometer.png")} alt="" />
                    <h2>Real Feel</h2>
                </div>
                <h3>Degree</h3>
            </div>
            <div className={styles.gaps}>
                <div className={styles.desc}>
                <img className={styles.icons} src={getImageUrl("/drop.png")} alt="" />
                    <h2>Chances of Rain</h2>
                </div>
                <h3>0%</h3>
            </div>
        </div>
        <div>
        <br/><br/>
        <div className={styles.gaps}>
            <div className={styles.gaps} > 
                <div className={styles.desc}>
                    <img className={styles.icons} src={getImageUrl("/wind.png")} alt="" />
                    <h2>wind</h2>
                    </div>
                    <h3> 0.2km/hr</h3>
                </div>

            <div>
            <div className={styles.gaps}>
                <div className={styles.desc}>
                    <img className={styles.icons} src={getImageUrl("/sun.png")} alt="" />
                        <h2> UV Index</h2>
                    </div>
                    <h3>3</h3>
                </div>
            </div>
            </div>
        </div>
        <div>
           <button className={styles.btn}>See More</button>
        </div>
      </div>
    </div>
  )
}

export default Content
