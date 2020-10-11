import 'dotenv/config'
import path from 'path'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import compression from 'compression'
import mongoose from 'mongoose'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'
import morgan from 'morgan'
import articlesRouter from './routes/articles'

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('Database connected ✨'))
  .catch((e) => console.log('💥', e.message))

const app = express()
app.use(express.static(path.join(__dirname, '../public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(mongoSanitize())
app.use(xss())
app.use(morgan('dev'))
app.use('/api/articles', articlesRouter)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'index.html'))
})
app.all('*', (req, res, next) => {
  const error = new Error('Route not found!')
  error.status = 404
  next(error)
})
// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  const status = error.status || 500
  res.status(status).json({ message: error.message })
})

const port = process.env.PORT || 1337
app.listen(port, () => console.log('Server is up on port', port, '🚀'))
