export class ListaNegociacoes {

    constructor() {
        this._negociacoes = [];
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }

    adicionarTodos(negociacoes) {
        this._negociacoes = this._negociacoes.concat(negociacoes);
    }

    get negociacoes() {
        return this._negociacoes.slice();
    }

    removerTodosRegistros() {
        this._negociacoes = [];
    }

    inverteOrdem() {
        this._negociacoes.reverse();
    }

    ordena(criterio) {
        this._negociacoes.sort(criterio);
    }

}