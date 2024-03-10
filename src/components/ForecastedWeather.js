// ForecastedWeather.js
import React from "react";

const ForecastedWeather = ({ data }) => {
  const list = data.timelines.daily;
  console.log(list);

  return (
    <div className="container">
      <div className="weather-card">
        <h2>Forecasted Weather</h2>
        <div className="forecast-container">
          {list.map((forecast, index) => (
            <div key={index} className="forecast-item">
              {/* <p>hi is it visible </p> */}
              {/* <img
                src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                alt="Weather Icon"
              /> */}
              <p>Date : {forecast.time.substring(0, 10)}</p>
              {console.log(forecast.values.temperatureAvg)}
              <p>Temperature: {forecast.values.temperatureAvg}°C</p>
              <p>Humidity: {forecast.values.humidityAvg}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForecastedWeather;
