const express = require('express');
const fs = require('fs');
const path = require('path');

const listenPort = process.env.PORT;
const staticPath = path.join(__dirname, '..', 'static');
const indexFile = 'index.html';

const app = express();

app.use(express.static(
  staticPath,
  { index: false },
));

app.get('*', (req, res, next) => {
  fs.readFile(
    path.join(staticPath, indexFile),
    'utf8',
    (err, data) => {
      if (err) {
        return next(404);
      }

      res.contentType('text/html');
      res.send(data);
    },
  );
});

app.listen({ host: '0.0.0.0', port: listenPort }, () => {
  console.log(`Server ready at http://0.0.0.0:${listenPort}`);
});
