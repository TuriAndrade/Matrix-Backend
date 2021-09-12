module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('alternatives', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      html: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      delta: {
        type: Sequelize.JSON,
        allowNull: false,
      },
      isCorrect: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
    queryInterface.dropTable('alternatives'),
};
