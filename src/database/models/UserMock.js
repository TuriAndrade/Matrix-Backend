module.exports = (sequelize, DataTypes) => {
  const UserMock = sequelize.define('userMock', {});

  UserMock.associate = (models) => {
    UserMock.belongsTo(models.user, { foreignKey: 'userId' });
    UserMock.belongsTo(models.mock, { foreignKey: 'mockId' });
    UserMock.hasMany(models.chosenAlternative);
  };

  return UserMock;
};
