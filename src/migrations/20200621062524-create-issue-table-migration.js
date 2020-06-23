'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('issues', {
      id: {
          type: Sequelize.INTEGER,
          autoIncrement: true,
          primaryKey: true
      },
      userId: Sequelize.INTEGER,
      projectId: Sequelize.STRING,
      projectCode: Sequelize.STRING,
      title: Sequelize.STRING,
      description: Sequelize.TEXT,
      taskType: Sequelize.STRING,
      issueType: Sequelize.TEXT,
      devices: Sequelize.STRING,
      status: {
        type: Sequelize.ENUM,
        values: ['open', 'closed', 'reopen', 'resolved', 'N/A'],
        defaultValue: 'open'
      },
      isDeleted: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
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
