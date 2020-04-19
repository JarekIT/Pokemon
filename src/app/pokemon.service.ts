import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Pokemons } from './models/Pokemons'
import { Pokemon } from './models/Pokemon'
import { CaughtPokemon } from './models/CaughtPokemon';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  pokemonApiUrl = 'https://pokeapi.co/api/v2/pokemon';

  private caughtPokemons: CaughtPokemon[] = [];

  constructor(
    private http: HttpClient
  ) { }


  getAllPokemonsFromApi(): Observable<Pokemons> {
      return this.http.get<Pokemons>(`${this.pokemonApiUrl}/?offset=0&limit=151`);
  }

  getPokemonByIdFromApi(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.pokemonApiUrl}/${id}/`);
  }


  getCaughtPokemons(): CaughtPokemon[] {
    return this.caughtPokemons;
  }

  setPokemonInCaughtPokemons(newPokemon: CaughtPokemon) {
    this.caughtPokemons.push(newPokemon);
  }


  catchPokemonById(id: number) {
    this.getPokemonByIdFromApi(id).subscribe((data: Pokemon)=>{
      const newCaughtPokemon: CaughtPokemon = {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        dateCatch: new Date()
      };
      this.setPokemonInCaughtPokemons(newCaughtPokemon);
    });
  }
}