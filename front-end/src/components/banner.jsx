import React, { useEffect, useState } from 'react';
import { getTimeComponents } from '../utils/bannerUtils';

const BannerPage = ({ handleDashboard }) => {
    const [timeRemaining, setTimeRemaining] = useState(0);

    const endDate = new Date(2024, 7, 15, 9, 0, 0).getTime();

    useEffect(() => {
        const id = setInterval(() => {
            const now = new Date().getTime();
            const remainingTime = endDate - now;
            
            if (remainingTime < 0) {
                setTimeRemaining(0);
                return;
            }

            setTimeRemaining(remainingTime)
        }, 1000);

        return () => clearInterval(id); // Cleanup function
    }, [endDate]);

    

    const { days, hours, minutes, seconds } = getTimeComponents(timeRemaining);

    return (
        <div className="banner-container">
            <div className='dashboard-heading'>
                <p>Dashboard</p>
                <div onClick={handleDashboard} className='dashboard-button'>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
            <div className="banner">
                <div className="time">
                    <p className="timer colon">{days}</p>
                    <p className="timer colon">{hours}</p>
                    <p className="timer colon">{minutes}</p>
                    <p className="timer">{seconds}</p>
                    <p className="heading">Days</p>
                    <p className="heading">Hours</p>
                    <p className="heading">Minutes</p>
                    <p className="heading">Seconds</p>
                </div>
            </div>
        </div>
    );
};

export default BannerPage;

