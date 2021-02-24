const express = require('express');
const applicationRoute = express.Router();

// Application model being imported
let ApplicationModel = require('../models/Application');


applicationRoute.route('/').get((req, res) => {
  ApplicationModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })
 applicationRoute.route('/help').get((req, res) => {
  ApplicationModel.find((error, data) => {
     if (error) {
       return next(error)
     } else {
       res.json(data)
     }
   })
 })

 applicationRoute.route('/create-application').post((req, res, next) => {
  ApplicationModel.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

applicationRoute.route('/edit-application/:id').get((req, res) => {
  ApplicationModel.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update App
applicationRoute.route('/update-application/:id').post((req, res, next) => {
  ApplicationModel.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data)
      console.log('Application successfully updated!')
    }
  })
})

// Delete app
applicationRoute.route('/delete-application/:id').delete((req, res, next) => {
  ApplicationModel.findByIdAndDelete(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
})

module.exports = applicationRoute;