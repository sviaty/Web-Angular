import {Component, OnInit} from "@angular/core";
import { Pokemon } from "../classes/class.pokemon";

@Component({
    selector: 'add-pokemon',
    templateUrl: './app/pokemon/templates/views/template.add-pokemon.html'
})
export class AddPokemonComponent implements OnInit {

    pokemon: Pokemon = null;

    constructor() { }

    ngOnInit(): void {
        this.pokemon = new Pokemon();
    }

}
