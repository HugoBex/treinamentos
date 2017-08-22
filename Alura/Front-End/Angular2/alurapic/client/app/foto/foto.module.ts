import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FiltroFoto } from './fotos.pipes';

@NgModule({
    declarations: [FotoComponent, FiltroFoto],
    exports: [FotoComponent, FiltroFoto]
})
export class FotoModule { }