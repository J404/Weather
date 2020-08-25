import React from 'react';

const WeatherBox: React.FC = () => {
    return (
        <div className='WeatherBox inline-block m-8 mt-16 h-card bg-gray-700'>
            <h4 className='text-3xl font-bold m-2'>Monday</h4>
            <br></br>
            <svg width="115" height="115" viewBox="0 0 115 115" fill="none" className='mx-auto' xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M57.5 95C78.2107 95 95 78.2107 95 57.5C95 36.7893 78.2107 20 57.5 20C36.7893 20 20 36.7893 20 57.5C20 78.2107 36.7893 95 57.5 95ZM57.5 85C72.6878 85 85 72.6878 85 57.5C85 42.3122 72.6878 30 57.5 30C42.3122 30 30 42.3122 30 57.5C30 72.6878 42.3122 85 57.5 85Z" fill="black"/>
                <rect x="55" width="5" height="15" fill="black"/>
                <rect x="55" y="100" width="5" height="15" fill="black"/>
                <rect y="58" width="5" height="15" transform="rotate(-90 0 58)" fill="black"/>
                <rect x="100" y="60" width="5" height="15" transform="rotate(-90 100 60)" fill="black"/>
                <rect x="88.429" y="88.9645" width="5" height="15" transform="rotate(-45 88.429 88.9645)" fill="black"/>
                <rect x="91.5355" y="30.1421" width="5" height="15" transform="rotate(-135 91.5355 30.1421)" fill="black"/>
                <rect x="14.5355" y="98.1421" width="5" height="15" transform="rotate(-135 14.5355 98.1421)" fill="black"/>
                <rect x="15" y="14.5355" width="5" height="15" transform="rotate(-45 15 14.5355)" fill="black"/>
            </svg>
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