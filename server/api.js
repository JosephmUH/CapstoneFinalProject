let Db = require('./dboperations')
let Customer = require('./customer')
const dboperations = require('./dboperations')
bodyParser = require('body-parser')
cors = require('cors')




let express = require('express')
const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors())

const router = express.Router();


//Creates API
app.use('/api', router)

//Setups up Port to run on 
const port = process.env.PORT || 4000
app.listen(port)
console.log('Customer API is running at ' + port)


//Handles Errors
app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message)
  })


  //Handles 404 Errors
app.use((request, response, next) => {
    next(createError(404));
  })
  

// const { response } = require('express')



router.use((request,response,next) => {
        console.log('middleware')
        next()
})


//Grabs all customers in table 
router.route('/customer').get((request,response)=>{
    dboperations.getCustomers().then(result => {
        //console.log(result)
        response.json(result[0])
    })

}) 

//Allows a search by customers ID
router.route('/edit-customer/:id').get((request,response)=>{
    dboperations.getCustomer(request.params.id).then(result => {
        response.json(result[0])
        console.log(result[0])
    })

}) 

//Should allow creation of new customer
router.route('/add-customer').post((request,response)=>{
    let customer = {...request.body}
    dboperations.addCustomer(customer).then(result => {
        response.status(201).json(result);
    })

}) 

//For update we need to create a UPDATE CUSTOMER SET AND WHERE type stored procedure
router.route('/update-customer/:id').post((request,response)=>{
    let customer = {...request.body}
    dboperations.updateCustomer(customer).then(result => {
        response.status(201).json(result);
    })

}) 



//should allow deletion of customer
router.route('/delete-customer/:id').delete((request,response)=>{
    dboperations.deleteCustomer(request.params.id).then(result => {
        response.status(201).json(result);
    })

}) 





// dboperations.getCustomer().then(result => {
//     console.log(result);
// })
