import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';
import { CaughtPokemon } from '../models/CaughtPokemon';

@Component({
  selector: 'app-pokemon-caught',
  templateUrl: './pokemon-caught.component.html',
  styleUrls: ['./pokemon-caught.component.css']
})
export class PokemonCaughtComponent implements OnInit {

  caughtList: CaughtPokemon[];

  constructor(
    private pkmService: PokemonService
  ) { }

  ngOnInit(): void {
    this.caughtList = this.pkmService.getCaughtPokemons();
  }

}
