import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {PokemonRoutingModule} from "./app.module.pokemon-routing";

import { ListPokemonComponent } from '../components/app.component.list-pokemon';
import { DetailPokemonComponent } from '../components/app.component.details-pokemon';
import {PokemonFormComponent} from "../components/app.component.form-pokemon";
import {EditPokemonComponent} from "../components/app.component.edit-pokemon";

import { BorderCardDirective } from '../directives/app.directives.border-card';
import { PokemonTypeColorPipe } from '../pipes/app.pipes.pokemon-type-color';

import {PokemonsService} from "../services/app.service.pokemon";


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        PokemonFormComponent,
        EditPokemonComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers: [PokemonsService]
})
export class PokemonsModule { }