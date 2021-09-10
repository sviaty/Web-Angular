import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from '../components/component.list-pokemon';
import { DetailPokemonComponent } from '../components/component.details-pokemon';
import {EditPokemonComponent} from "../components/component.edit-pokemon";
import {AuthGuard} from "../../application/services/service.auth-guard";

// les routes du module Pokémon
const pokemonsRoutes: Routes = [{
    path: 'pokemon',
    canActivate: [AuthGuard],
    children: [
        {
            path: 'all',
            component: ListPokemonComponent
        },
        {
            path: 'edit/:id',
            component: EditPokemonComponent, canActivate: [AuthGuard]
        },
        {
            path: ':id',
            component: DetailPokemonComponent
        }
    ]
}];

@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }