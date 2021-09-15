import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../classes/class.pokemon';
import { PokemonsService } from "../services/service.pokemon";
import {Observable} from "rxjs";
import {Title} from "@angular/platform-browser";
import {AppContants} from "../../application/contants/constant.app";

@Component({
    selector: 'list-pokemon',
    templateUrl: './app/pokemon/templates/views/template.list-pokemon.html'
})
export class ListPokemonComponent implements OnInit {

    pokemons: Pokemon[] = null;

    constructor(private router: Router,
                private pokemonsService: PokemonsService,
                private titleService: Title) { }

    ngOnInit(): void {
        this.titleService.setTitle(AppContants.titleListPokemon);

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