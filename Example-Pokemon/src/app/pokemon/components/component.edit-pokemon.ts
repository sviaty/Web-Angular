import {Component, OnInit} from "@angular/core";
import { Pokemon } from "../classes/class.pokemon";
import { ActivatedRoute } from "@angular/router";
import { PokemonsService } from "../services/service.pokemon";

@Component({
    selector: 'edit-pokemon',
    templateUrl: './app/pokemon/templates/views/template.edit-pokemon.html'
})
export class EditPokemonComponent implements OnInit {

    pokemon: Pokemon = null;

    constructor(
        private route: ActivatedRoute,
        private pokemonsService: PokemonsService) {}

    ngOnInit(): void {
        let id = +this.route.snapshot.params['id'];
        this.pokemonsService.getPokemon(id)
            .subscribe(pokemon => this.pokemon = pokemon);
    }

}