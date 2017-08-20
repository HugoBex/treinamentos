'use strict';

System.register(['./controllers/NegociacaoController', './js/polyfill/fetch'], function (_export, _context) {
  "use strict";

  var currentInstance, negociacaoController;
  return {
    setters: [function (_controllersNegociacaoController) {
      currentInstance = _controllersNegociacaoController.currentInstance;
    }, function (_jsPolyfillFetch) {}],
    execute: function () {
      negociacaoController = currentInstance();


      document.querySelector('.form').onsubmit = negociacaoController.adiciona.bind(negociacaoController);
      document.querySelector('#bt-apagar').onclick = negociacaoController.apagar.bind(negociacaoController);
    }
  };
});
//# sourceMappingURL=boot.js.map