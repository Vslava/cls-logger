require('../util/init-dotenv');

const PORT = (process.env.PORT || 5000);
const DATABASE_URL = process.env.DATABASE_URL;
const DB_SSL_ON = process.env.DB_SSL_ON;

module.exports = {
  PORT,
  DATABASE_URL,
  DB_SSL_ON,
};
