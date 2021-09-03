module.exports = (sequelize, DataTypes) => {
  const StudyHistory = sequelize.define('StudyHistory', {
    subject: DataTypes.STRING,
    hasStudied: DataTypes.BOOLEAN,
    discipline: DataTypes.STRING,
    level: DataTypes.STRING,
  });

  StudyHistory.associate = (models) => {
    StudyHistory.belongsTo(models.User, { foreignKey: 'userId' });
  };

  return StudyHistory;
};
