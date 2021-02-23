
const bcrypt = require('bcrypt')

const salt = process.env.SALT_ROUND ? Number(process.env.SALT_ROUND) : 10

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('user', [{
      firstName: 'admin',
      lastName: 'admin',
      email: 'admin@jambar.com',
      password: await bcrypt.hash('admin', salt),
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'active'
    }, {
      firstName: 'James',
      lastName: 'Mclauchlan',
      email: 'james@jambar.com',
      password: await bcrypt.hash('merlion', salt),
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'active'
    }, {
      firstName: 'Barbara',
      lastName: 'Mclauchlan',
      email: 'barbara@jambar.com',
      password: await bcrypt.hash('universal', salt),
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'active'
    }, {
      firstName: 'Sudheer',
      lastName: 'Paturi',
      email: 'sudheer@jambar.com',
      password: await bcrypt.hash('littleindia', salt),
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'active'
    }, {
      firstName: 'Jon',
      lastName: 'Snow',
      email: 'user@jambar.com',
      password: await bcrypt.hash('winterfell', salt),
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'active'
    }, {
      firstName: 'Albus',
      lastName: 'Dumbledore',
      email: 'user1@jambar.com',
      password: await bcrypt.hash('hogwarts', salt),
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'active'
    }, {
      firstName: 'Drake',
      lastName: 'Ramoray',
      email: 'user2@jambar.com',
      password: await bcrypt.hash('friends', salt),
      createdAt: new Date(),
      updatedAt: new Date(),
      status: 'active'
    }], {})
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('user', null, {})
  }
}
