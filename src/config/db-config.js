const settings = require('./settings');

const SEQUELIZE_OPTIONS = {
  dialect: 'postgres',
  dialectOptions: {
  },
  logging: false,
  pool: {
    max: 3,
    min: 0,
    idle: 10000,
  },
};

if (settings.DB_SSL_ON && settings.DB_SSL_ON === 'true') {
  SEQUELIZE_OPTIONS.dialectOptions.ssl = {
    require: true,
    rejectUnauthorized: false,
  };
}

module.exports = SEQUELIZE_OPTIONS;
