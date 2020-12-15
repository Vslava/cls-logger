const { Sequelize, DataTypes, QueryTypes, Op } = require('sequelize');

const SEQUELIZE_OPTIONS = require('./db-config');
const settings = require('./settings');

const sequelize = new Sequelize(
  settings.DATABASE_URL,
  SEQUELIZE_OPTIONS,
);

module.exports = {
  Sequelize,
  DataTypes,
  QueryTypes,
  Op,
  sequelize,
};
