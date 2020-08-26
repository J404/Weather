import React from 'react';

interface Props {
    icon: string;
}

const WeatherIcon: React.FC<Props> = props => {
    let icon: JSX.Element;

    switch(props.icon) {
        case 'rain':
            icon = <svg width="115" height="103" className='mx-auto' viewBox="0 0 115 103" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M69.0343 16.6661C73.1762 22.833 75.3868 30.1841 75.3868 37.5C75.3868 44.8159 73.8791 46.5 73.8791 46.5L63.3248 43.875C63.98 41.5279 64.3301 39.0545 64.3301 36.4998C64.3301 21.312 51.9545 8.99984 36.6883 8.99984C21.4221 8.99984 9.04647 21.312 9.04647 36.4998C9.04647 51.6877 21.4221 63.9998 36.6883 63.9998C37.0248 63.9998 37.3599 63.9938 37.6934 63.982V75C30.2384 75 22.9507 72.8006 16.7521 68.6801C10.5534 64.5595 5.72218 58.7028 2.86926 51.8506C0.016332 44.9984 -0.730123 37.4584 0.724285 30.1841C2.17869 22.9098 5.76864 16.228 11.0402 10.9835C16.3117 5.73904 23.028 2.16751 30.3398 0.720569C37.6516 -0.726377 45.2305 0.0162482 52.1181 2.85453C59.0056 5.69282 64.8925 10.4993 69.0343 16.6661Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M103.045 72.3432C99.765 74.0875 96.1032 75 92.384 75V63.9934C99.1324 63.7771 104.536 58.2664 104.536 51.5C104.536 44.5965 98.9111 39 91.9719 39C86.304 39 81.5126 42.7338 79.9473 47.864L72.3714 46L74.3817 37.5C77.0116 34.8836 82.2598 32.043 85.8189 30.9689C89.3779 29.8948 93.1484 29.7105 96.7961 30.4323C100.444 31.1542 103.856 32.7599 106.731 35.1073C109.606 37.4546 111.855 40.4711 113.278 43.8896C114.702 47.3081 115.256 51.0231 114.891 54.7054C114.527 58.3877 113.255 61.9238 111.189 65.0003C109.122 68.0769 106.325 70.599 103.045 72.3432Z" fill="white"/>
            <rect x="37.1908" y="64" width="56.2888" height="11" fill="white"/>
            <rect x="21" y="80" width="5" height="15" fill="white"/>
            <rect x="88" y="88" width="5" height="15" fill="white"/>
            <rect x="65" y="80" width="5" height="15" fill="white"/>
            <rect x="44" y="87" width="5" height="15" fill="white"/>
            </svg>;            
        break;
        case 'partly-cloudy-day':
            icon = <svg width="120" height="103" className='mx-auto' viewBox="0 0 120 103" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="55" width="5" height="15" fill="white"/>
            <rect y="58" width="5" height="15" transform="rotate(-90 0 58)" fill="white"/>
            <rect x="91.5355" y="30.1421" width="5" height="15" transform="rotate(-135 91.5355 30.1421)" fill="white"/>
            <rect x="14.5355" y="98.1421" width="5" height="15" transform="rotate(-135 14.5355 98.1421)" fill="white"/>
            <rect x="15" y="14.5355" width="5" height="15" transform="rotate(-45 15 14.5355)" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M87.6242 65.6663C90.5415 69.6131 92.0986 74.3178 92.0986 79C92.0986 83.6822 91.0366 84.76 91.0366 84.76L83.6027 83.08C84.0642 81.5779 84.3108 79.9949 84.3108 78.3599C84.3108 68.6397 75.594 60.7599 64.8413 60.7599C54.0886 60.7599 45.3719 68.6397 45.3719 78.3599C45.3719 88.0801 54.0886 95.9599 64.8413 95.9599C65.0783 95.9599 65.3143 95.9561 65.5493 95.9485V103C60.2983 103 55.1653 101.592 50.7993 98.9553C46.4333 96.3181 43.0304 92.5698 41.021 88.1844C39.0115 83.799 38.4857 78.9734 39.5101 74.3178C40.5346 69.6623 43.0631 65.3859 46.7761 62.0294C50.4891 58.673 55.2197 56.3872 60.3698 55.4612C65.5198 54.5351 70.858 55.0104 75.7092 56.8269C80.5605 58.6434 84.7069 61.7195 87.6242 65.6663Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M111.58 101.3C109.269 102.416 106.69 103 104.07 103L104.07 95.9558C108.824 95.8173 112.63 92.2905 112.63 87.96C112.63 83.5417 108.668 79.96 103.78 79.96C99.788 79.96 96.4132 82.3497 95.3107 85.633L89.9746 84.44L91.3906 79C93.2429 77.3255 96.9395 75.5075 99.4463 74.8201C101.953 74.1327 104.609 74.0147 107.178 74.4767C109.747 74.9387 112.151 75.9664 114.176 77.4687C116.201 78.971 117.785 80.9015 118.787 83.0894C119.79 85.2772 120.18 87.6548 119.923 90.0115C119.667 92.3681 118.771 94.6312 117.315 96.6002C115.86 98.5692 113.89 100.183 111.58 101.3Z" fill="white"/>
            <rect x="65.1953" y="95.96" width="39.6469" height="7.03999" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M92.415 43.8181C94.7405 49.7527 95.515 56.1822 94.6653 62.4994L88.9447 61.7298C87.8353 60.5496 86.6114 59.4524 85.2849 58.4515C85.1872 58.3778 85.0891 58.3047 84.9904 58.2321C84.9968 57.9888 85 57.7448 85 57.5C85 42.3122 72.6878 30 57.5 30C42.3122 30 30 42.3122 30 57.5C30 63.7046 32.0548 69.4293 35.521 74.0306C35.1158 75.9463 34.9462 77.8947 35.0148 79.8416L30.8987 83.9314C26.406 79.4099 23.14 73.8178 21.4091 67.6833C19.6782 61.5487 19.5396 55.0742 21.0062 48.8712C22.4729 42.6682 25.4965 36.9414 29.7915 32.2317C34.0864 27.522 39.511 23.9847 45.5529 21.954C51.5948 19.9233 58.0547 19.4662 64.3223 20.6258C70.59 21.7854 76.4587 24.5235 81.3741 28.5815C86.2895 32.6395 90.0894 37.8834 92.415 43.8181Z" fill="white"/>
            </svg>;            
        break;
        case 'cloudy':
            icon = <svg width="115" height="75" className='mx-auto' viewBox="0 0 115 75" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M69.0343 16.6661C73.1762 22.833 75.3868 30.1841 75.3868 37.5C75.3868 44.8159 73.8791 46.5 73.8791 46.5L63.3248 43.875C63.98 41.5279 64.3301 39.0545 64.3301 36.4998C64.3301 21.312 51.9545 8.99984 36.6883 8.99984C21.4221 8.99984 9.04647 21.312 9.04647 36.4998C9.04647 51.6877 21.4221 63.9998 36.6883 63.9998C37.0248 63.9998 37.3599 63.9938 37.6934 63.982V75C30.2384 75 22.9507 72.8006 16.7521 68.6801C10.5534 64.5595 5.72218 58.7028 2.86926 51.8506C0.016332 44.9984 -0.730123 37.4584 0.724285 30.1841C2.17869 22.9098 5.76864 16.228 11.0402 10.9835C16.3117 5.73904 23.028 2.16751 30.3398 0.720569C37.6516 -0.726377 45.2305 0.0162482 52.1181 2.85453C59.0056 5.69282 64.8925 10.4993 69.0343 16.6661Z" fill="white"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M103.045 72.3432C99.765 74.0875 96.1032 75 92.384 75V63.9934C99.1324 63.7771 104.536 58.2664 104.536 51.5C104.536 44.5965 98.9111 39 91.9719 39C86.304 39 81.5126 42.7339 79.9473 47.864L72.3714 46L74.3817 37.5C77.0116 34.8836 82.2598 32.043 85.8189 30.9689C89.3779 29.8948 93.1484 29.7105 96.7961 30.4324C100.444 31.1542 103.856 32.7599 106.731 35.1073C109.606 37.4546 111.855 40.4712 113.278 43.8896C114.702 47.3081 115.256 51.0231 114.891 54.7054C114.527 58.3877 113.255 61.9238 111.189 65.0003C109.122 68.0769 106.325 70.599 103.045 72.3432Z" fill="white"/>
            <rect x="37.1908" y="64" width="56.2888" height="11" fill="white"/>
            </svg>;            
        break;
        default:
            icon = <svg width="115" height="115" className='mx-auto' viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M57.5 95C78.2107 95 95 78.2107 95 57.5C95 36.7893 78.2107 20 57.5 20C36.7893 20 20 36.7893 20 57.5C20 78.2107 36.7893 95 57.5 95ZM57.5 85C72.6878 85 85 72.6878 85 57.5C85 42.3122 72.6878 30 57.5 30C42.3122 30 30 42.3122 30 57.5C30 72.6878 42.3122 85 57.5 85Z" fill="white"/>
            <rect x="55" width="5" height="15" fill="white"/>
            <rect x="55" y="100" width="5" height="15" fill="white"/>
            <rect y="58" width="5" height="15" transform="rotate(-90 0 58)" fill="white"/>
            <rect x="100" y="60" width="5" height="15" transform="rotate(-90 100 60)" fill="white"/>
            <rect x="88.429" y="88.9645" width="5" height="15" transform="rotate(-45 88.429 88.9645)" fill="white"/>
            <rect x="91.5355" y="30.1421" width="5" height="15" transform="rotate(-135 91.5355 30.1421)" fill="white"/>
            <rect x="14.5355" y="98.1421" width="5" height="15" transform="rotate(-135 14.5355 98.1421)" fill="white"/>
            <rect x="15" y="14.5355" width="5" height="15" transform="rotate(-45 15 14.5355)" fill="white"/>
            </svg>;
    }

    return (
        <div className='WeatherIcon'>
            { icon }
        </div>
    );
}

export default WeatherIcon;