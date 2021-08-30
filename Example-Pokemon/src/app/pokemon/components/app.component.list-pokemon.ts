import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../classes/app.class.pokemon';
import { PokemonsService } from "../services/app.service.pokemon";

@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemon/templates/views/app.template.list-pokemon.html'
})
export class ListPokemonComponent implements OnInit {

    pokemons: Pokemon[] = null;

    constructor(private router: Router,
                private pokemonService: PokemonsService) { }

    ngOnInit(): void {
        this.pokemons = this.pokemonService.getPokemons();
    }

    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné id : ' + pokemon.id);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }

}