const SEQUELIZE_OPTIONS = require('./db-config');

const settings = require('./settings');

const SEQUELIZE_CONFIG = {
  ...SEQUELIZE_OPTIONS,
  url: settings.DATABASE_URL,
}

module.exports = {
  production: SEQUELIZE_CONFIG,
  development: SEQUELIZE_CONFIG,
  test: SEQUELIZE_CONFIG,
}
