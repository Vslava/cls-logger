const request = require('supertest');
const { factory } = require('factory-bot');

const server = require('../../src/server')

describe(__filename, () => {
  beforeEach(async function () {
    this.server = request(server);
  });

  it('gets the page', async function () {
    // init
    const record1 = await factory.create('TestData');
    const record2 = await factory.create('TestData');

    // process
    // check
    await this.server
      .get('/')
      .expect([
        '<!DOCTYPE html>',
        '<html>',
        '  <head>',
        '    <meta charset="utf-8">',
        '    <title>Test Devops Page</title>',
        '  </head>',
        '  <body>',
        '    <h3>Test Devops Page</h3>',
        '      <div>',
        `        <h4>${record1.title}</h4>`,
        `        <p>${record1.description}</p>`,
        '      </div>',
        '      <div>',
        `        <h4>${record2.title}</h4>`,
        `        <p>${record2.description}</p>`,
        '      </div>',
        '  </body>',
        '</html>',
      ].join('\n'));
  });
});
