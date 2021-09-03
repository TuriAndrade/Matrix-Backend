module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable(
      'studyHistories',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        subject: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        hasStudied: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
        },
        discipline: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        level: {
          type: Sequelize.STRING,
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
      },
      {
        indexes: [
          {
            name: 'userId_subject_discipline_UNIQUE',
            unique: true,
            fields: ['userId', 'subject', 'discipline'],
          },
        ],
      }
    ),

  down: async (queryInterface, Sequelize) =>
    queryInterface.dropTable('studyHistories'),
};
