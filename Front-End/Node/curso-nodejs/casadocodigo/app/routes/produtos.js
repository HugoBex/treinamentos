module.exports = function(app) {

    var listarProdutos = function(req, res, next) {

        var connection = app.factory.connectionFactory();
        var produtoDAO = new app.database.produtoDAO(connection);

        produtoDAO.lista(function(err, result) {
            if (err) {
                console.log("Erro ao listar os produtos");
                return next(err);
            }

            res.format({
                html: function() {
                    res.render('produtos/lista', { lista: result ? result : [] });
                },
                json: function() {
                    res.json(result);
                }
            });
        });

        connection.end();
    };

    app.get('/produtos', listarProdutos);

    app.get('/produtos/cadastro', function(req, res) {
        res.render("produtos/cadastro", { errosParams: [], produto: {} });
    });

    app.post('/produtos', function(req, res) {

        var produto = req.body;
        req.assert('titulo', 'Titulo é obrigatório').notEmpty();
        req.assert('preco', 'Formato inválido').isFloat();
        var erros = req.validationErrors();

        if (erros) {
            console.log(erros);

            res.format({
                html: function() {
                    res.status(400).render('produtos/cadastro', { errosParams: erros, produto: produto });
                },
                json: function() {
                    res.status(400).json(erros);
                }
            });

            return;
        }

        var connection = app.factory.connectionFactory();
        var produtoDAO = new app.database.produtoDAO(connection);

        produtoDAO.salva(produto, function(err, result) {

            if (err) {
                console.log("Erro ao salvar o produto");
                res.redirect('produtos/cadastro', { errosParams: [], produto: {} });
                return;
            }

            res.format({
                html: function() {
                    res.render('produtos/cadastro', { errosParams: [], produto: {} });
                },
                json: function() {
                    res.json(result);
                }
            });
        });
    });
};