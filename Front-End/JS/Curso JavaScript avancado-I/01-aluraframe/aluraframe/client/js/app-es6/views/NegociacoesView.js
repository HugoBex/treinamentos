import { View } from './View';
import { DateHelper } from '../helpers/DateHelper';
import { currentInstance } from '../controllers/NegociacaoController';

export class NegociacoesView extends View {

    constructor(elemento) {
        super(elemento);

        elemento.addEventListener('click', function(event) {
            if (event.target.nodeName == 'TH')
                currentInstance().ordena(event.target.textContent.toLowerCase());
        });
    }

    template(model) {
            return `<table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                    
                </tr>
            </thead>

            <tbody>
            ${model.negociacoes.map(n => `
                
                <tr>
                    <td>${DateHelper.dateToText(n.data)}</td>
                    <td>${n.quantidade}</td>
                    <td>${n.valor}</td>
                    <td>${n.volume}</td>
                </tr>

                `).join('')}
            </tbody>
            <tfoot>
                <td colspan='3'></td>
                <td> 
                ${model.negociacoes.reduce((total, n) => total + n.volume, 0.00)}
                </td>
            </tfoot>
        </table>`;
    }
}