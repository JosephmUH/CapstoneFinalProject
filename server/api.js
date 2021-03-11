let Db = require('./dboperations')
let Customer = require('./customer')
const dboperations = require('./dboperations')


let express = require('express')
let bodyParser = require('body-parser')
let cors = require('cors')
const { response } = require('express')
let app = express()
let router = express.Router();

app.use(bodyParser.urlencoded({extended: true}))

app.use(bodyParser.json())
app.use(cors())
app.use('/api', router)



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
router.route('/add-customer').post((request,response)=>{
    let customer = {...request.body}
    dboperations.addCustomer(customer).then(result => {
        response.status(201).json(result);
    })

}) 

//should allow deletion of customer
router.route('/delete-customer/:id').delete((request,response)=>{
    dboperations.deleteCustomer(request.params.id).then(result => {
        response.status(201).json(result);
    })

}) 


let port = process.env.PORT || 4000
app.listen(port)
console.log('Customer API is running at ' + port)




dboperations.getCustomer().then(result => {
    console.log(result);
})
