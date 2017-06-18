module.exports = function(app) {

    app.get('/', function(req, res) {
        var connection = app.factory.connectionFactory();
        var produtoDAO = new app.database.produtoDAO(connection);
        produtoDAO.lista(function(erros, resultados) {

            console.log(resultados);
            res.render('home/index', { livros: resultados ? resultados : [] });
        });

        connection.end();
    });
}