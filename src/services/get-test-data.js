const { TestData } = require('../models');

module.exports = async () => (
  TestData.findAll({
    raw: true,
  })
);
