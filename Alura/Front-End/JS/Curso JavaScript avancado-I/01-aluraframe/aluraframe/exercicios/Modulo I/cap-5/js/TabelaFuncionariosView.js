class TabelaFuncionariosView {
    constructor(elemento) {
        this._elemento = elemento;
    }

    _template(model) {
            return `<table>
        <thead>
            <tr>
                <th>Nome</th>
                <th>Endereço</th>
                <th>Salário</th>
            </tr>
        </thead>

        <tbody>            
        ${model.map( f => `
            
            <tr>
                <td>${f.nome}</td>
                <td>${f.endereco}</td>
                <td>${f.salario}</td>
            </tr>
            `).join('')}
        <tbody>
    </table>`;
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}