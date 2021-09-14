module.exports = (sequelize, DataTypes) => {
  const ChosenAlternative = sequelize.define('ChosenAlternative', {
    alternativeId: DataTypes.INTEGER,
    questionId: DataTypes.INTEGER,
  });

  ChosenAlternative.associate = (models) => {
    ChosenAlternative.belongsTo(models.UserMock, { foreignKey: 'userMockId' });
  };

  return ChosenAlternative;
};
