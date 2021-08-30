import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PokemonRoutingModule} from "./app.module.pokemon-routing";

import { ListPokemonComponent } from '../components/app.component.list-pokemon';
import { DetailPokemonComponent } from '../components/app.component.details-pokemon';
import { BorderCardDirective } from '../directives/app.directives.border-card';
import { PokemonTypeColorPipe } from '../pipes/app.pipes.pokemon-type-color';


@NgModule({
    imports: [
        CommonModule,
        PokemonRoutingModule
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers: []
})
export class PokemonsModule { }