import React, { useEffect, useState } from 'react';
import { getTimeComponents } from '../utils/bannerUtils';

const BannerPage = ({ handleDashboard, timeRemaining, setTimeRemaining, setIsVisible, remainingTime }) => {
  const [endDate, setEndDate] = useState(null);

  useEffect(() => {
    const fetchEndDate = async () => {
      try {
        const response = await fetch('https://api.spava.in/api/banner');
        const data = await response.json();
        const { is_visible, duration } = data;

        console.log(is_visible, duration);
        setEndDate(duration);

        // Set visibility
        setIsVisible(is_visible === '0' ? false : true);
      } catch (error) {
        console.error('Error fetching end date:', error);
      }
    };

    fetchEndDate();
  }, [setIsVisible]);

  useEffect(() => {
    if (endDate === null) return;

    const id = setInterval(() => {
      const now = new Date().getTime();
      const remainingTime = endDate - now;
      console.log(remainingTime);
      if (remainingTime < 0) {
        setTimeRemaining(0);
        clearInterval(id);
        return;
      }
      setTimeRemaining(remainingTime);
    }, 1000);

    return () => clearInterval(id);
  }, [endDate, setTimeRemaining]);

  const { days, hours, minutes, seconds } = timeRemaining > 0 
  ? getTimeComponents(timeRemaining) 
  : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return (
    <div className="banner-container">
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
