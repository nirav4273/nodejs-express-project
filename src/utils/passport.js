import passport from 'passport'

import { user as User } from '../models'

const JWTstrategy = require('passport-jwt').Strategy
const ExtractJWT = require('passport-jwt').ExtractJwt

const secret = process.env.SECRET || 'jambar'

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.use(
  new JWTstrategy({
    secretOrKey: secret,
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
  },
  async (token, done) => {
    try {
      return done(null, token)
    } catch (error) {
      done(error)
    }
  })
)

export const passportAuth = passport.authenticate('jwt')

export const authMiddleware = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.replace('Bearer ', '')

      // Check Token with user table
      const result = await User.findOne({
        where: {
          token
        }
      })

      if (result) {
        next()
      } else {
        res.send(401)
      }
    } else {
      res.status(401)
    }
  } catch (e) {
    res.send(401)
  }
}
