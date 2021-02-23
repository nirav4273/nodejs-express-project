import 'dotenv/config'

import express from 'express'
import bodyParser from 'body-parser'
import passport from 'passport'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import { graphqlHTTP } from 'express-graphql'

import schema from './graphql/schema/index'
import root from './graphql/resolver/index'

// import {passportAuth, authMiddleware} from "./utils/passport";

const app = express()

app.use(passport.initialize())
app.use(bodyParser())
app.use(fileUpload())

app.use(cors({
  exposedHeaders: 'Authorization'
}))

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`> App Running On ${process.env.PORT || 3000}`)
})
