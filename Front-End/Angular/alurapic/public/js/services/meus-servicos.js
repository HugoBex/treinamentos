angular.module('meusServicos', ['ngResource'])
    .factory('recursoFoto', function($resource) {

        return $resource('/v1/fotos/:fotoId', null, {
            'update': {
                method: 'PUT'
            }
        });
    })
    .factory('cadastroDeFotos', function(recursoFoto) {

        var servicoFoto = {};

        servicoFoto.cadastrar = function(foto, $q) {
            return $q(
                function(resolve, reject) {
                    if (foto_id) {
                        recursoFoto.update({ fotoId: foto_id }, foto, function() {
                            resolve({
                                mensagem: "Foto " + foto_id + " atualizada com sucesso.",
                                inclusao: false
                            });
                        }, function(erro) {
                            console.log("Erro ao atualizar imagem");
                            reject({
                                mensagem: "Falha ao atualizar a imagem " + foto_id
                            });
                        })
                    } else {
                        recursoFoto.save(foto,
                            function() {
                                resolve({
                                    mensagem: "Foto " + foto.titulo + "incluída com sucesso",
                                    inclusao: true
                                });
                            },
                            function(erro) {
                                console.log("Erro ao cadastrar foto " + foto.titulo);
                                reject({
                                    mensagem: "Erro ao cadastrar a foto " + foto.titulo
                                });
                            });
                    }
                });
        }

        return servicoFoto;
    });