// App.js
import React, { useState } from 'react';
import BannerPage from './components/banner'; 
import './App.css';
import Dashboard from './components/dashboard';

const App = () => {
  const [dashboard, setDashboard] = useState(true);
  const handleDashboard = ()=>{
    setDashboard(!dashboard);
  }

  return (
    <div className="page-container">
      {!dashboard?
        <>
        
        <BannerPage handleDashboard = {handleDashboard} />
        </>
      :
        <Dashboard handleDashboard = {handleDashboard}/>
      }
    </div>
    
  );
};

export default App;
