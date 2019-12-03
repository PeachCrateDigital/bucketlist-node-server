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

app.use(express.json())
app.use(cors({
  origin: function (origin, cb) {
      let wl = ['https://bucketlistgroup.now.sh'];
      if (wl.indexOf(origin) != -1) {
          cb(null, true);
      } else {
          cb(new Error('invalid origin: ' + origin), false);
      }
  },
  optionsSuccessStatus: 200
}))
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
