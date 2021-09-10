import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {PokemonRoutingModule} from "./module.pokemon-routing";

import {ListPokemonComponent} from '../components/component.list-pokemon';
import {DetailPokemonComponent} from '../components/component.details-pokemon';
import {PokemonFormComponent} from "../components/component.form-pokemon";
import {EditPokemonComponent} from "../components/component.edit-pokemon";
import {AddPokemonComponent} from "../components/component.add-pokemon";
import {PokemonSearchComponent} from "../components/component.search-pokemon";

import {BorderCardDirective} from '../directives/directives.border-card';
import {PokemonTypeColorPipe} from '../pipes/pipes.pokemon-type-color';

import {PokemonsService} from "../services/service.pokemon";
import {LoaderComponent} from "../../application/components/component.loader";
import {AuthGuard} from "../../application/services/service.auth-guard";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        PokemonRoutingModule,
    ],
    declarations: [
        ListPokemonComponent,
        DetailPokemonComponent,
        PokemonFormComponent,
        EditPokemonComponent,
        AddPokemonComponent,
        PokemonSearchComponent,
        LoaderComponent,
        BorderCardDirective,
        PokemonTypeColorPipe
    ],
    providers: [
        PokemonsService,
        AuthGuard]
})
export class PokemonsModule { }