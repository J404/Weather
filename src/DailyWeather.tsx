import React from 'react';

import WeatherBox from './WeatherBox';

import * as WeatherTypes from './weatherTypes';

interface Props {
    dailyWeather: WeatherTypes.DailyWeather;
}

const getDaysOfTheWeek = (): string[] => {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const today = new Date().getDay();

    for (let i = 0; i < today + 1; i++) {
        const removedDay = days.shift();
        days.push(removedDay as string);
    }

    return days.slice(0, 5);
}

const DailyWeather: React.FC<Props | undefined> = props => {
    const days = getDaysOfTheWeek();

    return (
        <div className='DailyWeather'>
        { (props.dailyWeather && props.dailyWeather.summary && props.dailyWeather.data) ? (
            <div>
                <div className='grid xsm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5'>
                    {
                        days.map((dayName, i) => <WeatherBox key={i} dayName={dayName} data={props.dailyWeather.data[i + 1]}/>)
                    }
                </div>
            </div>
        ) : (
            <p>Loading...</p>
        )}
        </div>
    );
}
export default DailyWeather;