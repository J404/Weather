import React, { useState, useEffect } from 'react';
import './App.css';

import * as WeatherTypes from './weatherTypes';

import Subtitle from './Subtitle';
import DailyWeather from './DailyWeather';
import Dashboard from './Dashboard'
import WeatherIcon from './WeatherIcon';

function App() {
  const [weatherData, updateWeather] = useState<WeatherTypes.WeatherData>({} as WeatherTypes.WeatherData);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getWeatherData = async () => {
      const serverResponse = await fetch('http://localhost:5000/weather');
      const serverData: WeatherTypes.APIResponse = await serverResponse.json();

      updateWeather(serverData.data);
      setLoading(false);
    }

    getWeatherData();
  }, []);

  return (
    <div className="App text-white bg-gray-900 min-w-screen min-h-full">
      <h2 className="text-6xl font-header text-left ml-12">Weather</h2>
      <Subtitle message='Proudly the bottom 10%'/>
      {!loading ? (
        <div id='main'>
          <Dashboard currently={weatherData.currently} hourly={weatherData.hourly}/>
          <div className='mt-8'>
            <Subtitle message='The rest of your week' />
            <DailyWeather dailyWeather={weatherData.daily}/>
          </div>
        </div>
        ) : (
          <div className='animate-spin-slow mx-auto my-auto w-1/4'>
            <WeatherIcon icon='clear' height={50} width={50} />
          </div>
      )}
    </div>
  );
}

export default App;
