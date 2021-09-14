module.exports = (sequelize, DataTypes) => {
  const QuestionMock = sequelize.define('QuestionMock', {});

  QuestionMock.associate = (models) => {
    QuestionMock.belongsTo(models.Question, { foreignKey: 'questionId' });
    QuestionMock.belongsTo(models.Mock, { foreignKey: 'mockId' });
  };

  return QuestionMock;
};
