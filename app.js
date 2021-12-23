const express = require('express');
const mongoose = require('mongoose');
const app = express();
const url = 'mongodb://localhost/employeeDB';
const employeeRoute = require('./routes/employees');
const { engine } = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

mongoose.connect(url, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('open', () => {
  console.log('Database connected......');
});

app.set('views', path.join(__dirname, '/views/'));
app.engine(
  'hbs',
  engine({
    extname: '.hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/',
  })
);
app.set('view engine', 'hbs');
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/employees', employeeRoute);
app.listen('9000', () => {
  console.log('Server is running on port 9000');
});
