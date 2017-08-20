const stores = ['negociacoes'];
const version = 1;
const dbName = 'aluraframe';
const READ_WRITE_MODE = "readwrite";
const READ_ONLY_MODE = "readonly";
const VERSION_CHANGE_MODE = "versionchange";

let connection = null;
let close = null;

export class ConnectionFactory {

    constructor() {
        throw new Error('Não é possível instanciar a classse ConnectionFactory');
    }

    static getConnection() {
        return new Promise((resolve, reject) => {

            let openRequest = window.indexedDB.open(dbName, version);

            openRequest.onupgradeneeded = e => {
                ConnectionFactory._createStores(e.target.result);
                console.log('Local storage atualizado com sucesso');
            };

            openRequest.onsuccess = e => {

                console.log('Conexão realizada com sucesso');

                if (!connection) {
                    connection = e.target.result;
                    close = connection.close.bind(connection);
                    connection.close = function() {
                        throw new Error("A funcão close somente deve ser chamada através da classe ConnectionFactory (ConnectionFactory.close)");
                    };

                    connection = e.target.result;

                }
                resolve(connection);
            };

            openRequest.onerror = e => {
                console.log('Erro ao tentar realizar conexao com API IndexedDB');
                reject(e.target.error.name);
            };
        });
    }

    static _createStores(dbConnection) {
        stores.forEach(store => {
            if (dbConnection.objectStoreNames.contains(store))
                dbConnection.deleteObjectStore(store);

            dbConnection.createObjectStore(store, { autoIncrement: true });
        });
    }

    static closeConnection() {
        if (connection) {
            close();
            connection = null;
        }
    }
}