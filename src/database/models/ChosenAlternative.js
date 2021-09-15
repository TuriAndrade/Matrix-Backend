module.exports = (sequelize, DataTypes) => {
  const ChosenAlternative = sequelize.define('chosenAlternative', {
    alternativeId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
  });

  ChosenAlternative.associate = (models) => {
    ChosenAlternative.belongsTo(models.userMock, { foreignKey: 'userMockId' });
  };

  return ChosenAlternative;
};
