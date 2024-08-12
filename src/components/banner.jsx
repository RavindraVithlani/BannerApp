import React, { useEffect, useState } from 'react';

const BannerPage = () => {
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

    const getTimeComponents = () => {
        if (timeRemaining <= 0) {
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = getTimeComponents();

    return (
        <div className="page-container">
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

