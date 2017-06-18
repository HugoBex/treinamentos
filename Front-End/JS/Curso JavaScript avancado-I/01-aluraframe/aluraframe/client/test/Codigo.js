class Codigo {

    constructor(codigo) {

        if (!this._validaCodigo(codigo))
            throw new Error("Esta classe não pode ser instânciada");

        this._codigo = codigo;
    }

    _validaCodigo(codigo) {

        let status = false;
        if ((/\D{3}-\D{2}-\d{2}/).test(codigo))
            status = true;

        return status;
    }
}