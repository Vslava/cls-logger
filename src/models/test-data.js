const { sequelize, DataTypes } = require('../config/db');

const TestData = sequelize.define(
  'test_datas',
  {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
  },
  { underscored: true },
);

module.exports = TestData;
