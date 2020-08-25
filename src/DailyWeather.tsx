import React from 'react';

import WeatherBox from './WeatherBox';

import * as WeatherTypes from './weatherTypes';

interface Props {
    dailyWeather: WeatherTypes.DailyWeather;
}

const DailyWeather: React.FC<Props | undefined> = props => {
    return (
        <div className='DailyWeather'>
        { (props.dailyWeather && props.dailyWeather.summary && props.dailyWeather.data) ? (
            <div>
                <p>{props.dailyWeather.summary}</p>
                <div className='grid xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                    <WeatherBox dayName='Monday' data={props.dailyWeather.data[1]}/>
                    <WeatherBox dayName='Tuesday' data={props.dailyWeather.data[2]}/>
                    <WeatherBox dayName='Wednesday' data={props.dailyWeather.data[3]}/>
                    <WeatherBox dayName='Thursday' data={props.dailyWeather.data[4]}/>
                    <WeatherBox dayName='Friday' data={props.dailyWeather.data[5]}/>
                </div>
            </div>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
}
export default DailyWeather;