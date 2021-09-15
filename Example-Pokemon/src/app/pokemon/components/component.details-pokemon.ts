import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../classes/class.pokemon';
import { PokemonsService } from "../services/service.pokemon";
import {Title} from "@angular/platform-browser";
import {AppContants} from "../../application/contants/constant.app";

@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/pokemon/templates/views/template.detail-pokemon.html'
})
export class DetailPokemonComponent implements OnInit {

    pokemons: Pokemon[] = null;
    pokemon: Pokemon = null;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private pokemonsService: PokemonsService,
                private titleService: Title) {}

    ngOnInit(): void {
        this.titleService.setTitle(AppContants.titleDetailPokemon);

        let id = +this.route.snapshot.paramMap.get('id');
        //this.pokemon = this.pokemonService.getPokemon(id);
        this.pokemonsService.getPokemon(id)
            .subscribe(pokemon => this.pokemon = pokemon);
    }

    goBack(): void {
        this.router.navigate(['/pokemon/all']);
    }

    delete(pokemon: Pokemon): void {
        this.pokemonsService.deletePokemon(pokemon).
            subscribe(_ => this.goBack())
    }

    goEdit(pokemon: Pokemon): void {
        let link = ['/pokemon/edit/',pokemon.id]
        this.router.navigate(link);
    }

}