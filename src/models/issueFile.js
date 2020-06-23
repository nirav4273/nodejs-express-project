'use strict';

module.exports = (sequelize, DataTypes) => {
  const issue_files = sequelize.define('issue_files', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    projectId: DataTypes.STRING,
    projectCode: DataTypes.STRING,
    issueId: DataTypes.INTEGER,
    isDeleted: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
  issue_files.associate = function(models) {
    // associations can be defined here
  };

  return issue_files;
};