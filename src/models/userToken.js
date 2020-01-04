'use strict';
module.exports = (sequelize, DataTypes) => {
  const user_token = sequelize.define('user_token', {
    userId: DataTypes.INTEGER,
    token: DataTypes.STRING
  }, {
  	freezeTableName: true,
    timestamps: true,
  });
  user_token.associate = function(models) {
    // associations can be defined here
  };
  return user_token;
};