// App.js
import React, { useState } from 'react';
import BannerPage from './components/banner'; 
import './App.css';
import Dashboard from './components/dashboard';

const App = () => {
  const [dashboard, setDashboard] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const handleDashboard = ()=>{
    setDashboard(!dashboard);
  }

  return (
    <div className="page-container">
      {!dashboard?
        <>
        
        <BannerPage handleDashboard = {handleDashboard} timeRemaining = {timeRemaining} setTimeRemaining = {setTimeRemaining} />
        </>
      :
        <Dashboard handleDashboard = {handleDashboard} setTimeRemaining={setTimeRemaining}/>
      }
    </div>
    
  );
};

export default App;
