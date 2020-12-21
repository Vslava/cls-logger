const { factory } = require('factory-bot');

const TestData = require('../../src/models/test-data');

factory.define('TestData', TestData, {
  title: factory.sequence('TestData.title', (n) => `title ${n}`),
  description: factory.sequence('TestData.description', (n) => `description ${n}`),
});
