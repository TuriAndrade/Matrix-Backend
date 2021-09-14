module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable(
      'chosenAlternatives',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        questionId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        alternativeId: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        userMockId: {
          type: Sequelize.INTEGER,
          references: { model: 'userMocks', key: 'id' },
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
      },
      {
        indexes: [
          {
            name: 'userMockId_questionId_UNIQUE',
            unique: true,
            fields: ['userMockId', 'questionId'],
          },
        ],
      }
    ),

  down: async (queryInterface, Sequelize) =>
    queryInterface.dropTable('chosenAlternatives'),
};
