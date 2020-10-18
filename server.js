const express = require('express');

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});

app.get('/currentTime', (req, res) => {
  const date = new Date();

  let hour = date.getHours().toString();
  hour = hour.length === 1 ? '0' + hour : hour;
  let minute = date.getMinutes().toString();
  minute = minute.length === 1 ? '0' + minute : minute;
  let second = date.getSeconds().toString();
  second = second.length === 1 ? '0' + second : second;

  res.json({ currentTime: `${hour}:${minute}:${second}` });
});

const portNumber = 3001;
app.listen(portNumber, () => console.log(`listenin on port ${portNumber}`));
