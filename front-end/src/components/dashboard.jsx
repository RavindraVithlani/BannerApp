import React, { useState } from 'react';
import '../Dashboard.css'; 
import { calculateDeadline } from '../utils/bannerUtils';

export default function Dashboard({ handleDashboard, setTimeRemaining, isVisible, setIsVisible }) {
    
    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [seconds, setSeconds] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const duration = calculateDeadline(days, hours,minutes, seconds);
    
        try {
            const response = await fetch('http://api.spava.in/api/banner', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(
                    {
                        is_visible: isVisible?'1':'0',
                        duration: duration
                    }
                ),
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const data = await response.json();
            if (data.message==='success'){
                window.alert("Updated successfully!!");
                setTimeRemaining(duration);
                handleDashboard(false);
            }
        } catch (error) {
            window.alert("An error occurred")
            console.error('Error:', error);
        }
    };
    
    const handleDays = (e) => setDays(parseInt(e.target.value))
    const handleHours = (e) => setHours(parseInt(e.target.value))
    const handleMinutes = (e) => setMinutes(parseInt(e.target.value))
    const handleSeconds = (e) => setSeconds(parseInt(e.target.value))


    return (
        <div className="dashboard-container">
            <h1 className="dashboard">Dashboard</h1>
            <form onSubmit={handleSubmit} className="dashboard-form">
            <div className="form-group" style={{display:'flex'}}>
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
                            onChange={handleDays} 
                            className="form-input timer-input"
                            placeholder="Days"
                            min="1"
                            required
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
                            min="1"
                            required
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
                            min="1"
                            required
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
                            min="1"
                            required
                        />
                        <span className="input-label">Seconds</span>
                        </div>
                    </div>
                </div>
                <button type="submit" className="dashboard-button">Update Banner</button>
            </form>
            <button onClick={handleDashboard} className="home-button">Home</button>
        </div>
    );
}
