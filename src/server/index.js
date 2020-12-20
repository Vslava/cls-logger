const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');

const getRoot = require('./get-root');

const app = express();

app.engine(
  '.hbs',
  handlebars({
    defaultLayout: false,
    extname: '.hbs',
  }),
);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', '.hbs');

app.get('/', getRoot);

module.exports = app;
