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
        //Testing if Customer ID is passed in edit screen
        // console.log("customer ID being passed in " + customerID)
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
        let product = await pool.request()
        .input('id', sql.Int, customer.id)
        .input('firstName', sql.NVarChar, customer.firstName)
        .input('lastName', sql.NVarChar, customer.lastName)
        //This is a stored procedure. You can also use a manual query 
        .execute('UpdateCustomer')
        //Error is something with the ID values not being passed in. It doesn't know what query to update
        // .query("UPDATE [dbo].[Customers] SET firstName = @firstName, lastName = @lastName WHERE id = @id")
        console.log("async Function | customer ID being passed in " + customer.id)
        console.log("async Function | customer firstName being passed in " + customer.firstName)
        console.log("async Function | customer lastName being passed in " + customer.lastName)
        return product.recordsets
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