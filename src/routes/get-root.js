const getTestData = require('../services/get-test-data');

module.exports = (req, res, next) => {
  getTestData().then((dataItems) => {
    res.render('index', {
      dataItems,
    });
  }).catch(next);
};
