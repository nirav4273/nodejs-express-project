import 'dotenv/config'

import express from 'express'
import bodyParser from 'body-parser'
import passport from 'passport'
import fileUpload from 'express-fileupload'
import cors from 'cors'

// import {passportAuth, authMiddleware} from "./utils/passport";
// Routes
import sampleRoutes from './routes/sample'

const app = express()

app.use(passport.initialize())
app.use(bodyParser())
app.use(fileUpload())

app.use(cors({
  exposedHeaders: 'Authorization'
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

// End-points
app.use(sampleRoutes)

app.listen(process.env.PORT || 3000, () => {
  console.log(`> App Running On ${process.env.PORT || 3000}`)
})
