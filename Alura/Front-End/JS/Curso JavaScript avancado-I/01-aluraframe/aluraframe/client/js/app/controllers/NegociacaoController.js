'use strict';

System.register(['../models/ListaNegociacoes', '../models/Mensagem', '../views/NegociacoesView', '../views/MensagemView', '../services/NegociacaoService', '../helpers/DateHelper', '../helpers/Bind', '../models/Negociacao'], function (_export, _context) {
    "use strict";

    var ListaNegociacoes, Mensagem, NegociacoesView, MensagemView, NegociacaoService, DateHelper, Bind, Negociacao, _createClass, NegociacaoController, current;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [function (_modelsListaNegociacoes) {
            ListaNegociacoes = _modelsListaNegociacoes.ListaNegociacoes;
        }, function (_modelsMensagem) {
            Mensagem = _modelsMensagem.Mensagem;
        }, function (_viewsNegociacoesView) {
            NegociacoesView = _viewsNegociacoesView.NegociacoesView;
        }, function (_viewsMensagemView) {
            MensagemView = _viewsMensagemView.MensagemView;
        }, function (_servicesNegociacaoService) {
            NegociacaoService = _servicesNegociacaoService.NegociacaoService;
        }, function (_helpersDateHelper) {
            DateHelper = _helpersDateHelper.DateHelper;
        }, function (_helpersBind) {
            Bind = _helpersBind.Bind;
        }, function (_modelsNegociacao) {
            Negociacao = _modelsNegociacao.Negociacao;
        }],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            NegociacaoController = function () {
                function NegociacaoController() {
                    _classCallCheck(this, NegociacaoController);

                    var $ = document.querySelector.bind(document);
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputvalor = $('#valor');

                    this._listaNegociacoes = new Bind(new ListaNegociacoes(), new NegociacoesView($('#tabelaNegociacoes')), 'adiciona', 'removerTodosRegistros', 'ordena', 'inverteOrdem', 'adicionarTodos');

                    this._mensagem = new Bind(new Mensagem(''), new MensagemView($('#mensagem')), 'texto');
                    this._ordemAtual = '';
                    this._init();
                }

                _createClass(NegociacaoController, [{
                    key: '_init',
                    value: function _init() {
                        var _this = this;

                        this._listarTodos();
                        setInterval(function () {
                            return _this.importarNegociacoes();
                        }, 5000);
                    }
                }, {
                    key: 'apagar',
                    value: function apagar() {
                        var _this2 = this;

                        new NegociacaoService().apagar().then(function (mensagem) {
                            _this2._mensagem.texto = mensagem;
                            _this2._listaNegociacoes.removerTodosRegistros();
                            _this2._limparCamposForm();
                        }).catch(function (erroMsg) {
                            return _this2._mensagem.texto = erroMsg;
                        });
                    }
                }, {
                    key: 'adiciona',
                    value: function adiciona(event) {
                        var _this3 = this;

                        event.preventDefault();

                        var negociacao = this._criaNegociacao();
                        new NegociacaoService().cadastrar(negociacao).then(function (msg) {
                            _this3._listaNegociacoes.adiciona(negociacao);
                            _this3._mensagem.texto = msg;
                            _this3._limparCamposForm();
                        }).catch(function (erro) {
                            return _this3._mensagem.texto = erro;
                        });
                    }
                }, {
                    key: '_listarTodos',
                    value: function _listarTodos() {
                        var _this4 = this;

                        new NegociacaoService().listar().then(function (negociacoes) {
                            return _this4._listaNegociacoes.adicionarTodos(negociacoes);
                        }).catch(function (erro) {
                            return _this4._mensagem.texto = erro;
                        });
                    }
                }, {
                    key: '_criaNegociacao',
                    value: function _criaNegociacao() {
                        return new Negociacao(DateHelper.textToDate(this._inputData.value), parseInt(this._inputQuantidade.value), parseFloat(this._inputvalor.value));
                    }
                }, {
                    key: '_limparCamposForm',
                    value: function _limparCamposForm() {
                        this._inputData.value = '';
                        this._inputQuantidade.value = '1';
                        this._inputvalor.value = '0.00';
                        this._inputData.focus();
                    }
                }, {
                    key: 'importarNegociacoes',
                    value: function importarNegociacoes() {
                        var _this5 = this;

                        var service = new NegociacaoService();
                        service.importar(this._listaNegociacoes.negociacoes).then(function (negociacoes) {
                            return negociacoes.forEach(function (negociacao) {
                                _this5._listaNegociacoes.adiciona(negociacao);
                                _this5._mensagem.texto = "Negociações importadas com sucesso";
                            });
                        }).catch(function (erro) {
                            return _this5._mensagem.texto = erro;
                        });
                    }
                }, {
                    key: 'ordena',
                    value: function ordena(coluna) {
                        if (this._ordemAtual == coluna) {
                            this._listaNegociacoes.inverteOrdem();
                        } else {
                            this._listaNegociacoes.ordena(function (a, b) {
                                return a[coluna] - b[coluna];
                            });
                        }
                        this._ordemAtual = coluna;
                    }
                }]);

                return NegociacaoController;
            }();

            current = new NegociacaoController();
            function currentInstance() {
                return current;
            }

            _export('currentInstance', currentInstance);
        }
    };
});
//# sourceMappingURL=NegociacaoController.js.map