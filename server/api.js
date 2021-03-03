let Db = require('./dboperations')
let Customer = require('./customer')
const dboperations = require('./dboperations')

dboperations.getCustomer().then(result => {
    console.log(result);
})
