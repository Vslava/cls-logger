module.exports = {
  up: (queryInterface, Sequelize) => (
    Promise.all([
      queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'),
      queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS pgcrypto;'),
    ])
  ),
  down: (queryInterface, Sequelize) => (
    Promise.all([
      queryInterface.sequelize.query('DROP EXTENSION IF EXISTS "uuid-ossp";'),
      queryInterface.sequelize.query('DROP EXTENSION IF EXISTS pgcrypto;'),
    ])
  ),
};
