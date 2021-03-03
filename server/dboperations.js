let config = require('./dbconfig')
const sql = require('mssql')


async function getCustomer(){
    try{
        //passing in connection
        let pool = await sql.connect(config)
        let products = await pool.request().query("SELECT * From customer")
        return products.recordsets;

    }
    catch (error){
            console.log(error);
    }
}

module.exports = {
    getCustomer : getCustomer
}