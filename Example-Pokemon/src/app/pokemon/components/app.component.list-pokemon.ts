import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../classes/app.class.pokemon';
import { PokemonsService } from "../services/app.service.pokemon";
import {Observable} from "rxjs";

@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemon/templates/views/app.template.list-pokemon.html'
})
export class ListPokemonComponent implements OnInit {

    pokemons: Pokemon[] = null;

    constructor(private router: Router,
                private pokemonsService: PokemonsService) { }

    ngOnInit(): void {
        //this.pokemon = this.pokemonService.getPokemons();
        this.pokemonsService.getPokemons()
            .subscribe(pokemons => this.pokemons = pokemons);
    }

    selectPokemon(pokemon: Pokemon): void {
        console.log('Vous avez selectionné id : ' + pokemon.id);
        let link = ['/pokemon', pokemon.id];
        this.router.navigate(link);
    }



}