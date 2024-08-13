// App.js
import React, { useState } from 'react';
import BannerPage from './components/banner'; 
import './App.css';
import Dashboard from './components/dashboard';

const App = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [dashboard, setDashboard] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const handleDashboard = ()=>{
    setDashboard(!dashboard);
  }

  return (
    <div className="page-container">

      {!dashboard?
        <>
        <div className='dashboard-heading'>
                <p>Dashboard</p>
                <div onClick={handleDashboard} className='dashboard-button'>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
        </div>
        {isVisible?
          <BannerPage handleDashboard = {handleDashboard} timeRemaining = {timeRemaining} setTimeRemaining = {setTimeRemaining} setIsVisible={setIsVisible} />
          :
          <h1>hello there</h1>
        }
        </>
      :
        <Dashboard handleDashboard = {handleDashboard} setTimeRemaining={setTimeRemaining} isVisible = {isVisible} setIsVisible={setIsVisible}/>
      }
    </div>
    
  );
};

export default App;
