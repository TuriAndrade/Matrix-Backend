module.exports = (sequelize, DataTypes) => {
  const StudyHistory = sequelize.define('studyHistory', {
    subject: DataTypes.STRING,
    hasStudied: DataTypes.BOOLEAN,
    discipline: DataTypes.STRING,
    level: DataTypes.STRING,
  });

  StudyHistory.associate = (models) => {
    StudyHistory.belongsTo(models.user, { foreignKey: 'userId' });
  };

  return StudyHistory;
};
