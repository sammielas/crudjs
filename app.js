const express = require('express');
const mongoose = require('mongoose');
const app = express();
const url = 'mongodb://localhost/test';
const employeeRoute = require('./routes/employees');

mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('open', () => {
  console.log('Database connected......');
});
app.use(express.json());
app.use('/employees', employeeRoute);

app.listen('9000', () => {
  console.log('Server is running on port 9000');
});
