import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { Pokemons } from '../models/Pokemons';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemons;

  constructor(
    private pkm: PokemonService
  ) { }

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons(){
    this.pkm.getAllPokemonsFromApi().subscribe(
      (data) => {
        this.pokemons = data;
      }, 
      (error) => {
        console.log(error);
      }
    );
  }

}
