let config = require('./dbconfig')
const sql = require('mssql')

//Pulls all data from Customer Table
async function getCustomers(){
    try{
        //passing in connection
        let pool = await sql.connect(config)
        let products = await pool.request().query("SELECT * From Customers")
        return products.recordsets;

    }
    catch (error){
            console.log(error);
    }
}

//Search by parameter ID
async function getCustomer(customerID) {
    try{
        let pool = await sql.connect(config)
        let product = await pool.request()
        .input('Id', sql.Int, customerID)
        .execute('EditCustomer')
        return product.recordsets;
    }
catch (error){
    console.log(error)
    }
}


//Create a Customer Record
async function addCustomer(customer) {
    try{
        let pool = await sql.connect(config)
        let insertCustomer = await pool.request()
        .input('Id', sql.Int, customer.Id)
        .input('firstName', sql.NVarChar, customer.firstName)
        .input('lastName', sql.NVarChar, customer.lastName)
        //This is a stored procedure. You can also use a manual query 
        .execute('InsertCustomer')
        return insertCustomer.recordsets;
    }
catch (error){
    console.log(error)
    }
}

//update customer by id
async function updateCustomer(customer) {
    try{
        let pool = await sql.connect(config)
        let uCustomer = await pool.request()
        .input('Id', sql.Int, customer.Id)
        .input('firstName', sql.NVarChar, customer.firstName)
        .input('lastName', sql.NVarChar, customer.lastName)
        //This is a stored procedure. You can also use a manual query 
        .execute('UpdateCustomer')
        return uCustomer.recordsets;
    }
catch (error){
    console.log(error)
    }
}

//delete customer by id
async function deleteCustomer(customerID) {
    try{
        let pool = await sql.connect(config)
        let product = await pool.request()
        .input('Id', sql.Int, customerID)
        .execute('DeleteCustomer')        
        return product.recordsets;
    }
catch (error){
    console.log(error)
    }
}



module.exports = {
    getCustomers : getCustomers,
    getCustomer : getCustomer,
    addCustomer : addCustomer,
    deleteCustomer: deleteCustomer,
    updateCustomer: updateCustomer
 
}