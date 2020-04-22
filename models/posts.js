'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    title: DataTypes.STRING,
    subtitle: DataTypes.STRING,
    content: DataTypes.STRING,
    imgUrl: DataTypes.STRING,
    author: DataTypes.STRING
  }, {});
  Posts.associate = function(models) {
    // associations can be defined here
  };
  return Posts;
};