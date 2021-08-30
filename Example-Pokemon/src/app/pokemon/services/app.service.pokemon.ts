import {Injectable} from "@angular/core";
import { Pokemon } from "../classes/app.class.pokemon";
import {POKEMONS} from "../mocks/app.mock.pokemon";

@Injectable()
export class PokemonsService {

    // Retourne tous les pokémons
    getPokemons(): Pokemon[] {
        return POKEMONS;
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Pokemon {
        let pokemons = this.getPokemons();

        for(let index = 0; index < pokemons.length; index++) {
            if(id === pokemons[index].id) {
                return pokemons[index];
            }
        }
    }

    getPokemonTypes(): string[]{
        return ['Plante', 'Feu', 'Eau', 'Poison', 'Insecte', 'Normal', 'Vol', 'Electrik', 'Fée'] ;
    }
}