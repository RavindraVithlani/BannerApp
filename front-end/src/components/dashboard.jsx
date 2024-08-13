import React, { useState } from 'react';
import '../Dashboard.css';  // Import the CSS file

export default function Dashboard({ handleDashboard }) {
    const [isVisible, setIsVisible] = useState(false);
    const [timer, setTimer] = useState(0);
    const [countdown, setCountdown] = useState(timer);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setCountdown(timer); // Reset the countdown when the banner is updated
    };

    return (
        <div className="dashboard-container">
            <h1 className="dashboard">Dashboard</h1>
            <form onSubmit={handleSubmit} className="dashboard-form">
                <div className="form-group" style={{display: 'flex'}}>
                    <label className="form-label">Banner On/Off:</label>
                    <label className="toggle-switch">
                        <input 
                            type="checkbox" 
                            checked={isVisible} 
                            onChange={() => setIsVisible(!isVisible)} 
                            className="toggle-checkbox" 
                        />
                        <span className="slider"></span>
                    </label>
                </div>
                <div className="form-group">
                    <label className="form-label">Banner Timer:</label>
                    <div className="timer-inputs">
                        <div className="timer-input-group">
                            <input 
                                type="number" 
                                value={days} 
                                onChange={(e) => setDays(parseInt(e.target.value))} 
                                className="form-input timer-input"
                                placeholder="Days"
                            />
                            <span className="input-label">Days</span>
                        </div>
                        <div className="timer-input-group">
                            <input 
                                type="number" 
                                value={hours} 
                                onChange={(e) => setHours(parseInt(e.target.value))} 
                                className="form-input timer-input"
                                placeholder="Hours"
                            />
                            <span className="input-label">Hours</span>
                        </div>
                        <div className="timer-input-group">
                            <input 
                                type="number" 
                                value={minutes} 
                                onChange={(e) => setMinutes(parseInt(e.target.value))} 
                                className="form-input timer-input"
                                placeholder="Minutes"
                            />
                            <span className="input-label">Minutes</span>
                        </div>
                        <div className="timer-input-group">
                            <input 
                                type="number" 
                                value={seconds} 
                                onChange={(e) => setSeconds(parseInt(e.target.value))} 
                                className="form-input timer-input"
                                placeholder="Seconds"
                            />
                            <span className="input-label">Seconds</span>
                        </div>
                    </div>
                </div>

                {isVisible && countdown > 0 && (
                    <p className="countdown">Time remaining: {countdown} seconds</p>
                )}
                <button type="submit" className="dashboard-button">Update Banner</button>
            </form>
            <button onClick={handleDashboard} className="home-button">Home</button>
        </div>
    );
}
