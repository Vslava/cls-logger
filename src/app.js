const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars')

const settings = require('./config/settings');

const { getRoot } = require('./routes');

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

const listenPort = settings.PORT;

app.listen({ host: '0.0.0.0', port: listenPort }, () => {
  console.log(`Server ready at http://0.0.0.0:${listenPort}`);
});
