const express = require('express');
const app = express();
const path = require('path');
const users = require('./fake-data/users');

app.use(express.static(path.join(__dirname, '/public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.listen(process.env.PORT || 3000);
module.exports = app;
