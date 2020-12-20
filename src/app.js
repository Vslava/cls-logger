const settings = require('./config/settings');
const server = require('./server');

const listenPort = settings.PORT;

server.listen({ host: '0.0.0.0', port: listenPort }, () => {
  console.log(`Server ready at http://0.0.0.0:${listenPort}`);
});
