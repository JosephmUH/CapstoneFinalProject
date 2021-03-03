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




router.route('/customer').get((request,response)=>{
    dboperations.getCustomer().then(result => {
        //console.log(result)
        response.json(result[0])
    })

}) 


let port = process.env.PORT || 8090
app.listen(port)
console.log('Customer API is running at ' + port)




dboperations.getCustomer().then(result => {
    console.log(result);
})
