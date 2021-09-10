module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('mocks', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      exam: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      subject: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      discipline: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      level: {
        type: Sequelize.STRING,
        allowNull: true,
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

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('mocks'),
};
