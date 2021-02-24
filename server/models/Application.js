const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Creates the mongoDB schema for applications
let applicationSchema = new Schema({
  date: {
    type: String,
  },
  name: {
    type: String
  },
  status: {
    type: String
  },
  comments: {
    type: String
  },
}, {
  collection: 'applications'
})

//Exports Schema to be used 
module.exports = mongoose.model('Application', applicationSchema)