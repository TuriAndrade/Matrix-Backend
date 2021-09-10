module.exports = (sequelize, DataTypes) => {
  const UserMock = sequelize.define('UserMock', {});

  UserMock.associate = (models) => {
    UserMock.belongsTo(models.User, { foreignKey: 'userId' });
    UserMock.belongsTo(models.Mock, { foreignKey: 'mockId' });
  };

  return UserMock;
};
