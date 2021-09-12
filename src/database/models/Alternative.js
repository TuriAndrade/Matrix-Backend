module.exports = (sequelize, DataTypes) => {
  const Alternative = sequelize.define('Alternative', {
    html: DataTypes.STRING,
    delta: DataTypes.JSON,
    isCorrect: DataTypes.BOOLEAN,
  });

  Alternative.associate = (models) => {
    Alternative.belongsTo(models.Question, { foreignKey: 'questionId' });
  };

  return Alternative;
};
