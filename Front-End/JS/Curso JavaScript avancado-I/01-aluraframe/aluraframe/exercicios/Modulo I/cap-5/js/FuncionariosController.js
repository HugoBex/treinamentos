class FuncionariosController {
    constructor() {
        let $ = document.querySelector.bind(document);
        this._tabelaFuncionarios = $('#tabelaFuncionarios');
        this._tabelaView = new TabelaFuncionariosView(this._tabelaFuncionarios);
        this._funcionarios = [];
        this._instanciaFuncionarios();
        this._tabelaView.update(this._funcionarios);
    }

    _instanciaFuncionarios() {
        this._funcionarios.push(new Funcionario("Douglas", "Rua da esquina, 123", 4500));
        this._funcionarios.push(new Funcionario("Felipe", "Rua da virada, 456", 5000));
        this._funcionarios.push(new Funcionario("Silvio", "Rua da aresta, 789", 6000));
    }

    get funcionarios() {
        return this._funcionarios;
    }

    carregaTabela() {
        return this._tabelaView.update(this._funcionarios);
    }
}