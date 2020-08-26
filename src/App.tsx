import React, { useState, useEffect } from 'react';
import './App.css';

import * as WeatherTypes from './weatherTypes';

import Subtitle from './Subtitle';
import DailyWeather from './DailyWeather';

function App() {
  const [weatherData, updateWeather] = useState<WeatherTypes.WeatherData>({} as WeatherTypes.WeatherData);

  useEffect(() => {
    const getWeatherData = async () => {
      const serverResponse = await fetch('http://localhost:5000/weather');
      const serverData: WeatherTypes.APIResponse = await serverResponse.json();

      updateWeather(serverData.data);
    }

    getWeatherData();
  }, []);

  return (
    <div className="App text-white bg-gray-900 w-screen min-h-screen">
      <h2 className="text-6xl font-header text-left ml-12">Weather</h2>
      <Subtitle message='Proudly the bottom 10%'/>
      <DailyWeather dailyWeather={weatherData.daily}/>
    </div>
  );
}

export default App;
