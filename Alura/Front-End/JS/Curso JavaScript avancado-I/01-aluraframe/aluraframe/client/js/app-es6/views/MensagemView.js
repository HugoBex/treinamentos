import { View } from './View';

export class MensagemView extends View {
    constructor(elemento) {
        super(elemento);
    }

    template(model) {
        return model.texto ? `<div class="alert alert-info alert-dismissable">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">×</a>${model.texto}</div>` : "<p></p>";
    }

}