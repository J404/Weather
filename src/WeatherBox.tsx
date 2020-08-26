import React from 'react';

import WeatherIcon from './WeatherIcon';

import * as WeatherTypes from './weatherTypes';

interface Props {
    dayName: string;
    data: WeatherTypes.DayWeather;
}

const WeatherBox: React.FC<Props> = props => {
    return (
        <div className='WeatherBox inline-block rounded m-8 mt-16 h-card bg-gray-700'>
            <h4 className='text-3xl mx-auto text-center font-bold'>{ props.dayName }</h4>
            <div className='mx-auto w-48 h-0 m-2 border-2 border-white rounded-lg'></div>
            <br></br>
            <WeatherIcon icon={props.data.icon}/>
            <br></br>
            <br></br>
            <span>{ `${props.data.precipProbability * 100}% chance of ${props.data.precipType}` }</span>
            <br></br>
            <span>{ `High of ${props.data.apparentTemperatureHigh}F, low of ${props.data.apparentTemperatureLow}F` }</span>
        </div>
    );
}
export default WeatherBox;