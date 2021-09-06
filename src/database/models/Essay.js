module.exports = (sequelize, DataTypes) => {
  const Essay = sequelize.define('Essay', {
    link: DataTypes.STRING,
    title: DataTypes.STRING,
    grade: DataTypes.FLOAT,
  });

  Essay.associate = (models) => {
    Essay.belongsTo(models.User, { foreignKey: 'userId' });
    Essay.belongsTo(models.Topic, { foreignKey: 'topicId' });
  };

  return Essay;
};
