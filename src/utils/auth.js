const jwt = require('jsonwebtoken')

const secret = process.env.SECRET || 'jambar'

exports.generateToken = (obj) => {
  return jwt.sign({
    ...obj,
    timestamp: new Date().getTime()
  }, secret, { expiresIn: '7d' })
}

exports.isAdminUser = (user) => {
  return user.email === 'admin@jambar.com'
}
