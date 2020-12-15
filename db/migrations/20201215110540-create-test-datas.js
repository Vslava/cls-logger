module.exports = {
  up: async (queryInterface, Sequelize) => (
    queryInterface.createTable('test_datas', {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        primaryKey: true,
      },
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    })
  ),

  down: async (queryInterface, Sequelize) => (
    queryInterface.dropTable('test_datas')
  ),
};
