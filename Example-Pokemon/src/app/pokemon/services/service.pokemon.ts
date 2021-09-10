import { Injectable } from "@angular/core";
import { Pokemon } from "../classes/class.pokemon";
import { POKEMONS } from "../mocks/mock.pokemon";

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

@Injectable()
export class PokemonsService {

    constructor(private http: HttpClient) {}

    private pokemonsUrl = 'api/pokemons';

    private log(log:string){
        console.info(log);
    }

    private handleError<T>(operation='operation', result?:T){
        return (error: any): Observable<T> => {
            console.log(error);
            console.log('${operation} failled: ${error.message}');
            return of(result as T);
        }
    }

    // Retourne tous les pokémons
    getPokemons(): Observable<Pokemon[]> {
        //return POKEMONS;
        return this.http.get<Pokemon[]>(this.pokemonsUrl).pipe(
            tap(_ => this.log('fetched pokemons')),
            catchError(this.handleError('getPokemons',[]))
        );
    }

    // Retourne le pokémon avec l'identifiant passé en paramètre
    getPokemon(id: number): Observable<Pokemon> {
        const url = this.pokemonsUrl +'/'+ id;

        return this.http.get<Pokemon>(url).pipe(
            tap(_ => this.log('fetched pokemon id='+id)),
            catchError(this.handleError<Pokemon>('getPokemons id='+id))
        );
    }

    getPokemonTypes(): string[]{
        return ['Plante', 'Feu', 'Eau', 'Poison', 'Insecte', 'Normal', 'Vol', 'Electrik', 'Fée'] ;
    }

    updatePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
        }

        return this.http.put(this.pokemonsUrl, pokemon, httpOptions).pipe(
            tap(_ => this.log('updated pokemon id = '+pokemon.id)),
            catchError(this.handleError<any>('updatedPokemon'))
        );
    }

    deletePokemon(pokemon: Pokemon): Observable<Pokemon> {
        const url = this.pokemonsUrl+'/'+pokemon.id;
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type':'application/json'})
        }

        return this.http.delete(url, httpOptions).pipe(
            tap(_ => this.log('deleted pokemon id = '+pokemon.id)),
            catchError(this.handleError<any>('deletedPokemon'))
        );
    }

    searchPokemons(term: string): Observable<Pokemon[]> {
        if(!term.trim()) {
            return of([]);
        }
        const url = this.pokemonsUrl+'/?name='+term;

        return this.http.get<Pokemon[]>(url).pipe(
            tap(_ => this.log('found pokemon matching = '+term)),
            catchError(this.handleError<Pokemon[]>('searchPokemon',[]))
        );
    }
}