const express = require('express')
const cors = require('cors')
const graphqlHTTP = require('express-graphql')
const cookieParser = require('cookie-parser')
const mongoose = require('mongoose')

const schema = require('./graphql')
const keys = require('./conf/keys')
const { dbLog, gqlLog } = require('./conf/loggers')
const routes = require('./conf/routes')
const authMiddleware = require('./middleware/auth')
const requestLogger = require('./middleware/requestLogger')

const app = express()

mongoose
  .connect(keys.mlab.uri, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
  .then(() => {
    dbLog(`Connected to mongodb`)
  })
  .catch((error) => {
    dbLog(`Could not connect to mongodb: ${error}`)
  })

var corsOptions = {
  origin: ['http://client.bucketlist.com', 'http://localhost:3000'],
  optionsSuccessStatus: 200 
}

app.use(express.json())
app.options('*', cors(corsOptions))

app.use(cors(corsOptions))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())

app.use(requestLogger)

app.use('/', routes)
app.use('/graphql', authMiddleware.checkAuth)
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
)

module.exports = app
