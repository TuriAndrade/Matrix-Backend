module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('questionMocks', {
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
      questionId: {
        type: Sequelize.INTEGER,
        references: { model: 'questions', key: 'id' },
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
    queryInterface.dropTable('questionMocks'),
};
