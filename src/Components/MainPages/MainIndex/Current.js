import React, { useEffect, useState } from "react";
import styles from "./current.module.css";
import { getImageUrl } from "../../../utils";
import Navbar from "../Comp/Navbar/Navbar";
import Content from "../Comp/Content/Content";
import Forecast from "../Comp/Forecast/Forecast";
import Cities from "../Comp/Cities/Cities";
const Current = () => {
  const [Data,getData] = useState([]);
  const [name,setname] = useState("");
  const [img,setimg] = useState("");
  const [temp,settemp] = useState("");
  const [forecast,setforecast] = useState([]);
  const BaseUrl = "http://api.weatherapi.com/v1/forecast.json?key=de577ac04a894870b6060215241401&q=London&days=1&aqi=no&alerts=no";
  const getDat = async () =>{
    const response = await fetch(BaseUrl);
    const data = await response.json();
    getData(data);
    console.log(Data.current);
    console.log("Error Happend here")
    console.log(Data.location);
    console.log(Data.forecast);
    setname(Data.location.name);
    setimg(Data.current.condition.icon);
    settemp(Data.current.temp_c);
    setforecast(Data.forecast.forecastday[0].hour);

    // setforecast(Data.forecastday.hour);
  }
  useEffect(()=>{
    getDat();
  },[]);
  return (
    <>
    <div className={styles.main}>
      <Navbar/>
      <Content name={name} img= {img} temp={temp} forecast = {forecast}/>
      <Forecast/>
    </div>
    {/* <div className={styles.cities}>
      <Navbar/>
      <Cities/>
      <Content/>
    </div> */}
    </>
  );
};

export default Current;
