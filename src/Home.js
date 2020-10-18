import React, { useState } from 'react';
import Axios from 'axios';

function Home() {
  const [currentTime, setCurrentTime] = useState('00:00:00')
  const fetchCurrentTime = () => {
    Axios.get('http://localhost:3001/currentTime').then(response => {
      if (response.data.currentTime) setCurrentTime(response.data.currentTime);
    }).catch(error => {
      console.log(error);
    });
  };
  return (
    <div>
      <button onClick={fetchCurrentTime}>Get Current Time</button>
      <br />
      {currentTime}
    </div>
  );
};

export default Home;
