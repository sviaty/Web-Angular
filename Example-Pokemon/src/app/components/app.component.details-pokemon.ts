import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Pokemon } from '../classes/app.class.pokemon';
import { POKEMONS } from '../mocks/app.mock.pokemon';

@Component({
    selector: 'detail-pokemon',
    templateUrl: '../../app/templates/app.template.pokemon-detail.html'
})
export class DetailPokemonComponent implements OnInit {

    pokemons: Pokemon[] = null;
    pokemon: Pokemon = null;

    constructor(private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
        this.pokemons = POKEMONS;

        let id = +this.route.snapshot.paramMap.get('id');
        for (let i = 0; i < this.pokemons.length; i++) {
            if (this.pokemons[i].id == id) {
                this.pokemon = this.pokemons[i];
            }
        }
    }

    goBack(): void {
        this.router.navigate(['/pokemons']);
    }

}