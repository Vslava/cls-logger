const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => (
    queryInterface.sequelize.query(`
      INSERT INTO test_datas (title, description)
        VALUES ('Article 1', '${faker.lorem.sentence()}');

      INSERT INTO test_datas (title, description)
        VALUES ('Article 2', '${faker.lorem.sentence()}');

      INSERT INTO test_datas (title, description)
        VALUES ('Article 3', '${faker.lorem.sentence()}');
    `)
  ),

  down: async (queryInterface, Sequelize) => (
    queryInterface.sequelize.query(`
      DELETE FROM test_datas;
    `)
  ),
};
