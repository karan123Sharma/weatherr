import React from "react";
import styles from './Navbar.module.css';
import { getImageUrl } from "../../../../utils";
const Navbar = () => {
  return (
    <div className={styles.nav}>
      <img
        className={styles.smallimg}
        src="https://assets.api.uizard.io/api/cdn/stream/38699d0b-f191-45f2-9ed8-07410452cf42.png"
        alt=""/>
      <ul>
        <li>
          <img className={styles.icons} src={getImageUrl("/rain.png")} alt="" />
          <p>Weather</p>
          <br />
        </li>
        <li>
          <img className={styles.icons} src={getImageUrl("/list.png")} alt="" />
          <p>Cities</p>
          <br />
        </li>
        <li>
          <img className={styles.icons} src={getImageUrl("/map.png")} alt="" />
          <p>Map</p>
          <br />

        </li>
        <li>
          <img className={styles.icons} src={getImageUrl("/settings.png")} alt="" />
          <p>Setting</p>
          <br />

        </li>
      </ul>
    </div>
  );
};

export default Navbar;
