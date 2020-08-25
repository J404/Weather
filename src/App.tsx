import React, { useState, useEffect } from 'react';
import './App.css';

import * as WeatherTypes from './weatherTypes';

import Subtitle from './Subtitle';
import WeatherBox from './WeatherBox';

function App() {
  const [weatherData, updateWeather] = useState<WeatherTypes.WeatherData | null>(null);

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
      <h2 className="text-6xl font-header">Weather</h2>
      <Subtitle message='Example subtitle'/>
      <div className='grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5'>
        <WeatherBox/>
        <WeatherBox/>
        <WeatherBox/>
        <WeatherBox/>
        <WeatherBox/>
      </div>
    </div>
  );
}

export default App;
