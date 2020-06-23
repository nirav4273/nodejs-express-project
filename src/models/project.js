'use strict';

import { generateString } from '../utils/utils'

module.exports = (sequelize, DataTypes) => {
  const project = sequelize.define('project', {
    userId: DataTypes.INTEGER,
    code: DataTypes.STRING,
    name: DataTypes.STRING
  }, {
    freezeTableName: true,
    timestamps: true,
  });
  project.associate = function(models) {
    // associations can be defined here
  };

  project.beforeCreate((data, options) => {
    data.dataValues.code = generateString(6);
    return data;
  })
  return project;
};