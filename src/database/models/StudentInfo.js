module.exports = (sequelize, DataTypes) => {
  const StudentInfo = sequelize.define('studentInfo', {
    timesReproved: DataTypes.INTEGER,
    schoolYear: DataTypes.INTEGER,
    schoolType: DataTypes.STRING,
    federativeUnit: DataTypes.STRING,
    weakDisciplines: DataTypes.ARRAY(DataTypes.STRING),
  });

  StudentInfo.associate = (models) => {
    StudentInfo.belongsTo(models.user, { foreignKey: 'userId' });
  };

  return StudentInfo;
};
