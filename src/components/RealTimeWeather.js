// RealTimeWeather.js
import React from "react";

const RealTimeWeather = ({ data }) => {
  // const { data } = data;
  // const { name, weather, main } = data;
  // const weatherIcon = weather[0].icon;
  const temperature = data.data.values.temperature;
  const humidity = data.data.values.humidity;
  // console.log("\n", data.data.values.temperature);
  const clocation = data.location.name;
  console.log("\n", clocation);

  return (
    <div className="container">
      <div className="weather-card">
        <h2>Current Weather </h2>
        <h3>{clocation}</h3>
        <div className="weather-info">
          {/* <img
            src={`http://openweathermap.org/img/wn/${weatherIcon}.png`}
            alt="Weather Icon"
          /> */}
          {/* <p>{weather[0].description}</p>  */}
        </div>
        <p>Temperature: {temperature}°C</p>
        <p>Humidity: {humidity}%</p>
      </div>
    </div>
  );
};

export default RealTimeWeather;
