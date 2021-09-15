module.exports = (sequelize, DataTypes) => {
  const QuestionMock = sequelize.define('questionMock', {});

  QuestionMock.associate = (models) => {
    QuestionMock.belongsTo(models.question, { foreignKey: 'questionId' });
    QuestionMock.belongsTo(models.mock, { foreignKey: 'mockId' });
  };

  return QuestionMock;
};
