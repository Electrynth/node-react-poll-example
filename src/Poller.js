import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function Poller() {
  const [currentTime, setCurrentTime] = useState('00:00:00')
  const fetchCurrentTime = () => {
    Axios.get('http://localhost:3001/currentTime').then(response => {
      if (response.data.currentTime) setCurrentTime(response.data.currentTime);
    }).catch(error => {
      console.log(error);
    });
  };

  useEffect(() => {
    const intervalId = setInterval(() => fetchCurrentTime(), 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <div>
      {currentTime}
    </div>
  );
};

export default Poller;
