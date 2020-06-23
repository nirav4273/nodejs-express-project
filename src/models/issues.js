'use strict';

module.exports = (sequelize, DataTypes) => {
  const issues = sequelize.define('issues', {
    userId: DataTypes.INTEGER,
    projectId: DataTypes.STRING,
    projectCode: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    taskType: DataTypes.STRING,
    issueType: DataTypes.TEXT,
    devices: {
      type: DataTypes.STRING,
      get() {
        const rawValue = this.getDataValue('devices');
        return rawValue ? rawValue.split(",") : [];
      }
    },
    status: {
        type: DataTypes.ENUM,
        values: ['open', 'closed', 'reopen', 'resolved', 'N/A'],
        defaultValue: 'open'
    },
    isDeleted: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
  }, {
    freezeTableName: true,
    timestamps: true,
  });
  issues.associate = function(models) {
    // associations can be defined here
  };

  return issues;
};