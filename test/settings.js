const { sequelize } = require('../src/config/db');

require('./factory');

afterEach(async () => {
  const tables = [
    'test_datas',
  ];

  await sequelize.query(
    tables.map((table) => `DELETE FROM ${table};`).join('\n'),
    { logging: false },
  );
});
