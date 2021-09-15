module.exports = (sequelize, DataTypes) => {
  const Essay = sequelize.define('essay', {
    link: DataTypes.STRING,
    title: DataTypes.STRING,
    grade: DataTypes.FLOAT,
  });

  Essay.associate = (models) => {
    Essay.belongsTo(models.user, { foreignKey: 'userId' });
    Essay.belongsTo(models.topic, { foreignKey: 'topicId' });
  };

  return Essay;
};
