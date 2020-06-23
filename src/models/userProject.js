'use strict';

module.exports = (sequelize, DataTypes) => {
  const project_user = sequelize.define('project_user', {
    userId: DataTypes.INTEGER,
    emailId: DataTypes.STRING,
    projectId: DataTypes.STRING,
    projectCode: DataTypes.STRING,
  }, {
    freezeTableName: true,
    timestamps: true,
  });
  project_user.associate = function(models) {
    // associations can be defined here
  };

  return project_user;
};