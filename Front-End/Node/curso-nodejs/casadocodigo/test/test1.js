var assert = require('assert');
describe('Array', function() {
    describe('#indexOf()', function() {
        it('should return -1 when the value is not present', function() {
            assert.equal(-1, [1, 2, 3].indexOf(4));
        });
    });
});



/* 
var assert = require('assert');
var http = require('http');

describe('#ProdutosController', function() {
    var configuracoes = {
        hostname: 'localhost',
        port: 3000,
        path: '/produtos',
        headers: {
            'Accept': 'application/json'
        }
    };

    describe("Requisição HTTP para api", function() {
        it('#Deve retornar content-type = json e statuscode = 200', function(done) {
            http.get(configuracoes, function(res) {
                assert.equal(res.statusCode, 200);
                assert.equal(res.headers['content-type'], 'application/json; charset=utf-8');
                done();
            });
        });
    });

});
*/