const { TestData } = require('../models');

module.exports = async () => (
  TestData.findAll({
    order: [['title', 'asc']],
    raw: true,
  })
);
