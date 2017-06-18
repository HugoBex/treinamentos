var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutosController', function() {

    beforeEach(function(done) {
        var conn = express.factory.connectionFactory();
        conn.query('delete from produtos', function(err, result) {
            if (!err) {
                done();
            }
        });
    });

    describe("Requisição HTTP para api", function() {

        it('#Deve retornar content-type = json e statuscode = 200', function(done) {
            request.get('/produtos')
                .set('Accept', 'application/json')
                .expect('Content-type', /json/)
                .expect(200, done);
        });

        it('#Deve retornar status code = 400 ao cadastrar produto inválido', function(done) {
            request.post('/produtos').send({ titulo: '', descricao: 'produto invalido' })
                .expect(400, done);
        });

        it('#Deve retornar status code = 302 ao cadastrar produto válido', function(done) {
            var tituloLivro = 'livro Teste ' + new Date();
            request.post('/produtos').send({ titulo: tituloLivro, descricao: 'produto', preco: 10.99 })
                .expect(200, done);
        });
    });

});