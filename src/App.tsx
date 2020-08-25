import React, { useState, useEffect } from 'react';
import './App.css';

import Subtitle from './Subtitle';
import WeatherBox from './WeatherBox';

interface HourlyWeatherList {
  summary: string;
  icon: string;
  data: Weather[];
}

interface Weather {
  time: number;
  summary: string;
  icon: string;
  precipProbability: number;
  temperature: number;
}

interface DailyWeather {
  summary: string;
  data: DayWeather[];
}

interface DayWeather {
  time: number;
  summary: string;
  icon: string;
  precipIntensity: number;
  precipProbability: number;
  precipType: string;
  apparentTemperatureHigh: number;
  apparentTemperatureLow: number;
}

interface WeatherData {
  currently: Weather;
  hourly: HourlyWeatherList;
  daily: DailyWeather;
}

interface APIResponse {
  data: WeatherData;
}

function App() {
  const [weatherData, updateWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const getWeatherData = async () => {
      const serverResponse = await fetch('http://localhost:5000/weather');
      const serverData: APIResponse = await serverResponse.json();

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
