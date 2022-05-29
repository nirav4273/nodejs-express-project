
require('dotenv').config({ path: '../.env' })

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: 3306,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
      timestamps: true
    }
  },
  test: {
    username: 'root',
    password: null,
    database: 'jambar',
    port: 3306,
    host: '127.0.0.1',
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
      timestamps: true
    }
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: 3306,
    host: process.env.DB_HOST,
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
      timestamps: true
    }
  }
}
