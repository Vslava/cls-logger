const request = require('supertest');
const { factory } = require('factory-bot');

const server = require('../../src/server')

describe(__filename, () => {
  beforeEach(async function () {
    this.server = request(server);
  });

  it('gets the page', async function () {
    // init
    factory.create('TestData');

    // process
    // check
    this.server
      .get('/')
      .expect('');
  });
});
