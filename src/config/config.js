
require('dotenv').config({ path: '../.env' })

module.exports = {
  development: {
    username: process.env.DB_USER || 'b11c14a5fb0626',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || 'heroku_0117a7eafd42e03',
    port: 3306,
    host: process.env.DB_HOST || 'eu-cdbr-west-03.cleardb.net',
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
    username: process.env.DB_USER || 'b11c14a5fb0626',
    password: process.env.DB_PASSWORD || 'c72b2459',
    database: process.env.DB_DATABASE || 'heroku_0117a7eafd42e03',
    port: 3306,
    host: process.env.DB_HOST || 'eu-cdbr-west-03.cleardb.net',
    dialect: 'mysql',
    operatorsAliases: false,
    define: {
      timestamps: true
    }
  }
}
