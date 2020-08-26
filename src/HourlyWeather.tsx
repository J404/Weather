import React from 'react';

import WeatherIcon from './WeatherIcon';

import * as WeatherTypes from './weatherTypes';

const HourlyWeather: React.FC<WeatherTypes.HourlyWeatherList> = props => {
    const currentHour = new Date().getHours();

    const hourlySections = [props.data[1], props.data[5], props.data[9], props.data[13]];

    return (
        <div className='HourlyWeather grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4'>
            {
                hourlySections.map((hourWeather, i) => <div key={i}>
                    <WeatherIcon icon={hourWeather.icon} height={72} width={61.8}/>
                    <p>{`${currentHour + i + 1}:00`}</p>
                    <p>{`${Math.floor(hourWeather.temperature)}F`}</p>
                    <p>{`${Math.floor(hourWeather.precipProbability * 100)}% chance of ${hourWeather.precipType}`}</p>
                </div>)
            }
        </div>
    );
}
export default HourlyWeather;