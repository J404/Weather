import React from 'react';

import WeatherIcon from './WeatherIcon';

import * as WeatherTypes from './weatherTypes';

const HourlyWeather: React.FC<WeatherTypes.HourlyWeatherList> = props => {
    const currentHour = new Date().getHours();

    const hourlySections = [props.data[1], props.data[3], props.data[5], props.data[7], props.data[9]];

    const getTimeFromIndex = (i: number): string => {
        let hour = currentHour + (i * 2) + 1;

        while (hour > 24)
            hour -= 24;

        return `${hour}:00`;
    }

    return (
        <div className='HourlyWeather grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5'>
            {
                hourlySections.map((hourWeather, i) => <div key={i}>
                    <WeatherIcon icon={hourWeather.icon} height={72}/>
                    <p>{getTimeFromIndex(i)}</p>
                    <p>{`${Math.floor(hourWeather.temperature)}F`}</p>
                    {(hourWeather.precipType) ? 
                        <p>{`${Math.floor(hourWeather.precipProbability * 100)}% chance of ${hourWeather.precipType}`}</p>
                        : 
                        <p>{hourWeather.summary}</p>
                    }     
                </div>)
            }
        </div>
    );
}
export default HourlyWeather;