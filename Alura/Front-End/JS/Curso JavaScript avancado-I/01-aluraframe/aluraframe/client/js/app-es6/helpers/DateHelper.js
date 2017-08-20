export class DateHelper {

    constructor() {
        throw new Error("Esta classe não pode ser instânciada");
    }

    static textToDate(texto) {

        if (!/\d{2}\/\d{2}\/\d{4}/.test(texto))
            throw new Error('Deve estar no formato dd/mm/aaaa');

        return new Date(...texto.split('/').reverse().map((item, indice) => item - indice % 2));
    }

    static dateToText(date) {
        return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }

}