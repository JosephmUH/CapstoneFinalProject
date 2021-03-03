const config = {
    user: 'DBadmin',
    password: 'Testing1234$',
    server: 'localhost',
    database: 'tb_data',
    options: {
        trustconnection: true,
        enableArithAbort: true,
        instanceName: 'MSSQLSERVER'
    },
    port: 1433
}

module.exports = config