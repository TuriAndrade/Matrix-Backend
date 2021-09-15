module.exports = (sequelize, DataTypes) => {
  const Alternative = sequelize.define('alternative', {
    html: DataTypes.STRING,
    delta: DataTypes.JSON,
    isCorrect: DataTypes.BOOLEAN,
  });

  Alternative.associate = (models) => {
    Alternative.belongsTo(models.question, { foreignKey: 'questionId' });
  };

  return Alternative;
};
