module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('question', {
    html: DataTypes.STRING,
    delta: DataTypes.JSON,
  });

  Question.associate = (models) => {
    Question.hasMany(models.alternative);
    Question.hasMany(models.questionMock);
  };

  return Question;
};
