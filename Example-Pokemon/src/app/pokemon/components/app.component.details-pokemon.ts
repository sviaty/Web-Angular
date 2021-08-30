import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../classes/app.class.pokemon';
import { PokemonsService } from "../services/app.service.pokemon";

@Component({
    selector: 'detail-pokemon',
    templateUrl: './app/pokemon/templates/views/app.template.detail-pokemon.html'
})
export class DetailPokemonComponent implements OnInit {

    pokemons: Pokemon[] = null;
    pokemon: Pokemon = null;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private pokemonService: PokemonsService) {}

    ngOnInit(): void {
        let id = +this.route.snapshot.paramMap.get('id');
        this.pokemon = this.pokemonService.getPokemon(id);
    }

    goBack(): void {
        this.router.navigate(['/pokemons']);
    }

    goEdit(): void {
        let link = ['/pokemon/edit/',this.pokemon.id]
        this.router.navigate(link);
    }

}