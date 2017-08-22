import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({
    name: 'filtroFoto'
})
export class FiltroFoto implements PipeTransform {

    transform(fotos: FotoComponent[], digitado: String) {
        return fotos.filter(foto => foto.titulo.toLowerCase().includes(digitado.toLowerCase()));
    }
}