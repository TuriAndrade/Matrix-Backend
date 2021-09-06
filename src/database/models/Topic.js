module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    link: DataTypes.STRING,
    name: DataTypes.STRING,
  });

  Topic.associate = (models) => {
    Topic.hasMany(models.Essay);
  };

  return Topic;
};
