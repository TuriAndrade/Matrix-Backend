module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('userMocks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      mockId: {
        type: Sequelize.INTEGER,
        references: { model: 'mocks', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      userId: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    }),

  down: async (queryInterface, Sequelize) =>
    queryInterface.dropTable('userMocks'),
};
