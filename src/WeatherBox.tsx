import React from 'react';

import WeatherIcon from './WeatherIcon';

import * as WeatherTypes from './weatherTypes';

interface Props {
    dayName: string;
    data: WeatherTypes.DayWeather;
}

const WeatherBox: React.FC<Props> = props => {
    return (
        <div className='WeatherBox inline-block rounded m-8 mt-16 min-h-card h-auto pb-4 bg-gray-700'>
            <h4 className='text-3xl mx-auto text-center font-bold'>{ props.dayName }</h4>
            <div className='mx-auto w-48 h-0 m-2 border-2 border-white rounded-lg'></div>
            <p>{props.data.summary}</p>
            <br></br>
            <WeatherIcon icon={props.data.icon}/>
            <br></br>
            <br></br>
            <span>{ `${Math.floor(props.data.precipProbability * 100)}% chance of ${props.data.precipType}` }</span>
            <br></br>
            <span>{ `High of ${Math.floor(props.data.apparentTemperatureHigh)}F, low of ${Math.floor(props.data.apparentTemperatureLow)}F` }</span>
        </div>
    );
}
export default WeatherBox;