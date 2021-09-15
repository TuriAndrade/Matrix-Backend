module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('studentInfos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      timesReproved: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      schoolYear: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      schoolType: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      federativeUnit: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      weakDisciplines: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        allowNull: true,
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
    queryInterface.dropTable('studentInfos'),
};
