module.exports = (sequelize, DataTypes) => {
  const Mock = sequelize.define('mock', {
    name: DataTypes.STRING,
    exam: DataTypes.STRING,
    subject: DataTypes.STRING,
    discipline: DataTypes.STRING,
    level: DataTypes.STRING,
  });

  Mock.associate = (models) => {
    Mock.hasMany(models.userMock);
    Mock.hasMany(models.questionMock);
  };

  return Mock;
};
