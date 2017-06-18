import { currentInstance } from './controllers/NegociacaoController';
import {} from './js/polyfill/fetch';

let negociacaoController = currentInstance();

document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('#bt-apagar').onclick = negociacaoController.apagar.bind(negociacaoController);