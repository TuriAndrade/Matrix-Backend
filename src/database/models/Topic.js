module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    link: DataTypes.STRING,
    name: DataTypes.STRING,
  });

  return Topic;
};
