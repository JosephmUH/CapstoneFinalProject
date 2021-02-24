//Created from following tutorial https://www.positronx.io/vue-mevn-stack-tutorial-build-full-stack-vue-js-crud-app/
let express = require('express'),
cors = require('cors'),
mongoose = require('mongoose'),
database = require('./database'),
bodyParser = require('body-parser');

// Connect Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log("Database connected")
  },
  error => {
    console.log("Database could't be connected to: " + error)
  }
)


const applicationAPI = require('../server/routes/data.route')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cors());

// API
app.use('/api', applicationAPI)

//Creates on port 4000
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log('Connected to port ' + port)
})

//Handles Errors
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message)
})

//Handles 404 Errors
app.use((req, res, next) => {
  next(createError(404));
})

