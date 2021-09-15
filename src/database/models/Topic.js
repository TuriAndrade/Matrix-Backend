module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('topic', {
    link: DataTypes.STRING,
    name: DataTypes.STRING,
  });

  Topic.associate = (models) => {
    Topic.hasMany(models.essay);
  };

  return Topic;
};
