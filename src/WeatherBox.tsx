import React from 'react';

const WeatherBox: React.FC = () => {
    return (
        <div className='WeatherBox inline-block m-8 mt-16 h-card bg-gray-700'>
            <h4 className='text-3xl font-bold m-2'>Monday</h4>
            <br></br>
            <p>Icon goes here</p>
            <br></br>
            <br></br>
            <span>60F/20C</span>
            <br></br>
            <span>Rainy</span>
            <br></br>
            <span>High of 2000F</span>
            <br></br>
            <span>Low of -3000C</span>
        </div>
    );
}
export default WeatherBox;