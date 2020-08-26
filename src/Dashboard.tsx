import React from 'react';

import WeatherIcon from './WeatherIcon';

const Dashboard: React.FC = () => {
    return (
        <div className='Dashboard grid col-auto p-6 mx-10 bg-gray-700 rounded mt-4'>
            <div className='ml-0 grid sm:grid-cols-1 xl:grid-cols-12'>
                <WeatherIcon icon='partly-cloudy-day'/>
                <div className='inline-block col-span-11 text-left'>
                    <h3 className='text-4xl font-bold ml-2 xl:ml-0 w-auto'>Tuesday, August 25</h3>
                    <div className='ml-2 xl:ml-0 w-auto h-0 m-2 border-2 border-white rounded-lg'></div>
                    <p>High 420F, Low 69F</p>
                    <p>Humid throughout the day.</p>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;