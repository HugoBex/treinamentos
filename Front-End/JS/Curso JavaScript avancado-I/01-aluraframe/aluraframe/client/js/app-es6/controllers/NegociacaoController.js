import { ListaNegociacoes } from '../models/ListaNegociacoes';
import { Mensagem } from '../models/Mensagem';
import { NegociacoesView } from '../views/NegociacoesView';
import { MensagemView } from '../views/MensagemView';
import { NegociacaoService } from '../services/NegociacaoService';
import { DateHelper } from '../helpers/DateHelper';
import { Bind } from '../helpers/Bind';
import { Negociacao } from '../models/Negociacao';


class NegociacaoController {

    constructor() {
        let $ = document.querySelector.bind(document);
        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputvalor = $('#valor');

        this._listaNegociacoes = new Bind(new ListaNegociacoes(),
            new NegociacoesView($('#tabelaNegociacoes')),
            'adiciona', 'removerTodosRegistros',
            'ordena', 'inverteOrdem', 'adicionarTodos');

        this._mensagem = new Bind(new Mensagem(''), new MensagemView($('#mensagem')), 'texto');
        this._ordemAtual = '';
        this._init();

    }

    _init() {
        this._listarTodos();
        setInterval(() => this.importarNegociacoes(), 5000);
    }


    apagar() {

        new NegociacaoService()
            .apagar()
            .then(mensagem => {
                this._mensagem.texto = mensagem;
                this._listaNegociacoes.removerTodosRegistros();
                this._limparCamposForm();
            })
            .catch(erroMsg => this._mensagem.texto = erroMsg);
    }


    adiciona(event) {

        event.preventDefault();

        let negociacao = this._criaNegociacao();
        new NegociacaoService().cadastrar(negociacao)
            .then(msg => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = msg;
                this._limparCamposForm();

            }).catch(erro => this._mensagem.texto = erro);
    }

    _listarTodos() {

        new NegociacaoService()
            .listar()
            .then(negociacoes => this._listaNegociacoes.adicionarTodos(negociacoes))
            .catch(erro => this._mensagem.texto = erro);
    }


    _criaNegociacao() {
        return new Negociacao(
            DateHelper.textToDate(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputvalor.value));
    }

    _limparCamposForm() {
        this._inputData.value = '';
        this._inputQuantidade.value = '1';
        this._inputvalor.value = '0.00';
        this._inputData.focus();
    }

    importarNegociacoes() {

        let service = new NegociacaoService();
        service
            .importar(this._listaNegociacoes.negociacoes)
            .then(negociacoes => negociacoes.forEach(negociacao => {
                this._listaNegociacoes.adiciona(negociacao);
                this._mensagem.texto = "Negociações importadas com sucesso";
            }))
            .catch(erro => this._mensagem.texto = erro);
    }

    ordena(coluna) {
        if (this._ordemAtual == coluna) {
            this._listaNegociacoes.inverteOrdem();
        } else {
            this._listaNegociacoes.ordena((a, b) => a[coluna] - b[coluna]);
        }
        this._ordemAtual = coluna;
    }
}

let current = new NegociacaoController();
export function currentInstance() {
    return current;
}