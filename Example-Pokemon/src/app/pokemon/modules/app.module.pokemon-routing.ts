import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListPokemonComponent } from '../components/app.component.list-pokemon';
import { DetailPokemonComponent } from '../components/app.component.details-pokemon';

// les routes du module Pokémon
const pokemonsRoutes: Routes = [
    { path: 'pokemons', component: ListPokemonComponent },
    { path: 'pokemon/:id', component: DetailPokemonComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(pokemonsRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class PokemonRoutingModule { }