import bcrypt from 'bcryptjs';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: DataTypes.STRING,
      password: DataTypes.VIRTUAL,
      passwordHash: DataTypes.STRING,
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      role: DataTypes.STRING,
      picture: DataTypes.STRING,
    },
    {
      hooks: {
        beforeCreate: async (user) => {
          if (user.password) {
            user.passwordHash = await bcrypt.hash(user.password, 8);
          }
        },
        beforeUpdate: async (user) => {
          if (user.password) {
            user.passwordHash = await bcrypt.hash(user.password, 8);
          }
        },
      },
    }
  );

  return User;
};
