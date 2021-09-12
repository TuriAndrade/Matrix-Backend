module.exports = (sequelize, DataTypes) => {
  const Question = sequelize.define('Question', {
    html: DataTypes.STRING,
    delta: DataTypes.JSON,
  });

  return Question;
};
