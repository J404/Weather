import React from 'react';

import * as WeatherTypes from './weatherTypes';

import WeatherIcon from './WeatherIcon';
import HourlyWeather from './HourlyWeather';

interface Props {
    currently: WeatherTypes.Weather;
    hourly: WeatherTypes.HourlyWeatherList;
}

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',];

const Dashboard: React.FC<Props> = props => {
    const date = new Date();

    const month = months[date.getMonth()];
    const day = date.getDate();
    const dayOfWeek = days[date.getDay()];

    return (
        <div className='Dashboard grid grid-cols-1 grid-rows-2 p-6 mx-10 bg-gray-700 rounded mt-4'>
            <div className='h-auto row-span-1 ml-0 mb-8 grid sm:grid-cols-1 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12'>
                <div className='h-auto xl:col-span-1 lg:col-span-1 md:col-span-2 sm:col-span-3'>
                    <WeatherIcon icon={props.currently.icon} />
                </div>
                <div className='h-auto inline-block xl:col-span-11 lg:col-span-11 md:col-span-10 sm:col-span-9 text-left'>
                    <h3 className='text-4xl font-bold ml-2 xl:ml-0 w-auto'>{`${dayOfWeek}, ${month} ${day}`}</h3>
                    <div className='ml-2 xl:ml-0 w-auto h-0 m-2 border-2 border-white rounded-lg'></div>
                    <p>{`Currently ${Math.floor(props.currently.temperature)}F`}</p>
                    <p>Humid throughout the day.</p>
                </div>
            </div>
            <div className='row-span-1'>
                <HourlyWeather summary={props.hourly.summary} icon={props.hourly.icon} data={props.hourly.data}/>
            </div>
        </div>
    );
}
export default Dashboard;