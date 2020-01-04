'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      firstName: Sequelize.STRING,
      lastName: Sequelize.STRING,
      email: Sequelize.STRING,
      password: Sequelize.STRING,
      phone: Sequelize.BIGINT,
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
    }, {
      freezeTableName: true,
      timestamps: true,
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
