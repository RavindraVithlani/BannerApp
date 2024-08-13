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
    setTimer(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        setCountdown(timer); // Reset the countdown when the banner is updated
    };
    const handleVisible = ()=>{
        setIsVisible(!isVisible)
    }
    const handleDays = (e) => setDays(parseInt(e.target.value))
    const handleHours = (e) => setHours(parseInt(e.target.value))
    const handleMinutes = (e) => setMinutes(parseInt(e.target.value))
    const handleSeconds = (e) => setSeconds(parseInt(e.target.value))


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
                            onChange={() => handleVisible} 
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
                                onChange={handleDays} 
                                className="form-input timer-input"
                                placeholder="Days"
                            />
                            <span className="input-label">Days</span>
                        </div>
                        <div className="timer-input-group">
                            <input 
                                type="number" 
                                value={hours} 
                                onChange={handleHours} 
                                className="form-input timer-input"
                                placeholder="Hours"
                            />
                            <span className="input-label">Hours</span>
                        </div>
                        <div className="timer-input-group">
                            <input 
                                type="number" 
                                value={minutes} 
                                onChange={handleMinutes} 
                                className="form-input timer-input"
                                placeholder="Minutes"
                            />
                            <span className="input-label">Minutes</span>
                        </div>
                        <div className="timer-input-group">
                            <input 
                                type="number" 
                                value={seconds} 
                                onChange={handleSeconds} 
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
