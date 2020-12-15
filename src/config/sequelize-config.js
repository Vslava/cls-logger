const SEQUELIZE_OPTIONS = require('./db-config');

const settings = require('./settings');

const sequelizeConfig = {
  ...SEQUELIZE_OPTIONS,
  url: settings.DATABASE_URL,
}

module.exports = {
  production: sequelizeConfig,
  development: sequelizeConfig,
  test: sequelizeConfig,
}
