'use strict';
module.exports = (sequelize, DataTypes) => {
  const AccessGroup = sequelize.define('AccessGroup', {
    group: DataTypes.STRING
  }, {});
  AccessGroup.associate = function(models) {
    // associations can be defined here
  };
  return AccessGroup;
};