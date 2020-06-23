'use strict';
import bcrypt from 'bcryptjs';

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone: DataTypes.BIGINT
  }, {
    freezeTableName: true,
    timestamps: true,
  });
  user.associate = function(models) {
    // associations can be defined here
  };
  // Method 3 via the direct method
  user.beforeCreate((user, options) => {
     user.password = passwordHash(user.password);
  });
  return user;
};

function passwordHash (password) {
  const salt = bcrypt.genSaltSync(5);
  return bcrypt.hashSync(password, salt);
}