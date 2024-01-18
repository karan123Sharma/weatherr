import React from 'react'
import styles from './Forecast.module.css';
const Forecast = () => {
  return (
    <div className={styles.main}>
      <h2>7 days Forecast</h2>
      <table>
        <tr>
            <td>Today</td>
            <td>Sunny</td>
            <td>36/22</td>
        </tr>
        <tr>
            <td>Today</td>
            <td>Sunny</td>
            <td>36/22</td>
        </tr>
        <tr>
            <td>Today</td>
            <td>Sunny</td>
            <td>36/22</td>
        </tr>
        <tr>
           <td>Today</td>
            <td>Sunny</td>
            <td>36/22</td>
        </tr>
        <tr>
           <td>Today</td>
            <td>Sunny</td>
            <td>36/22</td>
        </tr>
        <tr>
           <td>Today</td>
            <td>Sunny</td>
            <td>36/22</td>
        </tr>
      </table>
    </div>
  )
}

export default Forecast
