module.exports = (sequelize, DataTypes) => {
  const Mock = sequelize.define('Mock', {
    name: DataTypes.STRING,
    exam: DataTypes.STRING,
    subject: DataTypes.STRING,
    discipline: DataTypes.STRING,
    level: DataTypes.STRING,
  });

  Mock.associate = (models) => {
    Mock.hasMany(models.UserMock);
  };

  return Mock;
};
