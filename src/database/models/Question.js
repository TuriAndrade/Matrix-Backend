module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    html: DataTypes.STRING,
    delta: DataTypes.JSON,
  });

  Question.associate = (models) => {
    Question.hasMany(models.Alternative);
    Question.hasMany(models.QuestionMock);
  };

  return Question;
};
