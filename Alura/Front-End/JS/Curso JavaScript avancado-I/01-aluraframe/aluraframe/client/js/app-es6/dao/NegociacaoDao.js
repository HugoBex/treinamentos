import { Negociacao } from '../models/Negociacao';

export class NegociacaoDao {

    constructor(connection) {
        this._connection = connection;
        this._store = 'negociacoes';
    }

    adiciona(negociacao) {

        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], "readwrite")
                .objectStore(this._store)
                .add(negociacao);

            request.onsuccess = e => {
                resolve();
            };

            request.onerror = e => {
                console.log(e.target.error);
                reject(e.target.error);
            };
        });
    }

    remover(negociacao) {
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], "readwrite")
                .objectStore(this._store)
                .delete(negociacao);

            request.onsuccess = e => {
                resolve();
            };

            request.onerror = e => {
                console.log(e.target.error);
                reject(e.target.error);
            };
        });
    }

    apagaTodos(negociacao) {
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], "readwrite")
                .objectStore(this._store)
                .clear();

            request.onsuccess = e => resolve();

            request.onerror = e => {
                console.log(e.target.error);
                reject(e.target.error);
            };
        });
    }


    listarTodos() {
        return new Promise((resolve, reject) => {
            let cursor = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .openCursor();

            let negociacoes = [];

            cursor.onsuccess = e => {
                let cursorAtual = e.target.result;
                if (cursorAtual) {
                    let resultSet = cursorAtual.value;
                    negociacoes.push(
                        new Negociacao(resultSet._data, resultSet._quantidade, resultSet._valor));

                    cursorAtual.continue();
                } else {
                    resolve(negociacoes);
                }
            };

            cursor.onerror = e => {
                console.log(e.target.error);
                reject("Não foi possível listar as negociações.");
            };
        });
    }
}