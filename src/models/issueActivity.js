'use strict';

module.exports = (sequelize, DataTypes) => {
  const issue_activity = sequelize.define('issue_activity', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.STRING,
    projectCode: DataTypes.STRING,
    issueId: DataTypes.INTEGER,
    from: {
      type: DataTypes.ENUM,
      values: ['open', 'closed', 'reopen', 'resolved', 'N/A'],
      defaultValue: 'open'
    },
    to: {
        type: DataTypes.ENUM,
        values: ['open', 'closed', 'reopen', 'resolved', 'N/A'],
        defaultValue: 'open'
    },
    isDeleted: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    },
  }, {
    freezeTableName: true,
    timestamps: true,
  });
  issue_activity.associate = function(models) {
    // associations can be defined here
  };

  return issue_activity;
};