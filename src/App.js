// App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import RealTimeWeather from "./components/RealTimeWeather";
import ForecastedWeather from "./components/ForecastedWeather";
import LocationSettings from "./components/LocationSettings";

const API_KEY = "51PRyL27bzM8MyfKo0bOJVAdGRB0DQXB";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchData();
  }, [location]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const currentWeatherResponse = await axios.get(
        // `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        // `https://api.tomorrow.io/v4/weather/realtime?location=toronto&apikey=${API_KEY}`
        `https://api.tomorrow.io/v4/weather/realtime?location=new%20york&apikey=${API_KEY}`
      );
      const forecastWeatherResponse = await axios.get(
        //`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}&units=metric`
        // `https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=${API_KEY}`
        `https://api.tomorrow.io/v4/weather/forecast?location=new%20york&apikey=${API_KEY}`
      );
      setCurrentWeather(currentWeatherResponse.data);
      setForecastWeather(forecastWeatherResponse.data);
      console.log(currentWeatherResponse.data);
      console.log(forecastWeatherResponse.data);
      setLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  const handleLocationChange = (newLocation) => {
    console.log(newLocation);
    setLocation(newLocation);
  };

  return (
    <div>
      <LocationSettings onLocationChange={handleLocationChange} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {currentWeather && <RealTimeWeather data={currentWeather} />}
      {forecastWeather && <ForecastedWeather data={forecastWeather} />}
    </div>
  );
}

export default App;
