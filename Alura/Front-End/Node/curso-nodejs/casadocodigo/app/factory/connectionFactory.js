// Configuração com o banco de dados mysql
var mysql = require('mysql');

// Banco de dados de testes. 
function createDBConnection() {

    console.log('Node env: ' + process.env.NODE_ENV);

    if (process.env.NODE_ENV === 'test') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'nodelab',
            password: 'nodelab',
            database: 'casadocodigo_test'
        });

    } else if (!process.env.NODE_ENV || process.env.node === 'dev') {
        return mysql.createConnection({
            host: 'localhost',
            user: 'nodelab',
            password: 'nodelab',
            database: 'casadocodigo'
        });

    }
}

module.exports = function() {
    return createDBConnection;
};