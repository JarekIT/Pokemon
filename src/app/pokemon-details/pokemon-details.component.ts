import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../models/Pokemon';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PokemonService } from '../pokemon.service';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  pokemon: Pokemon

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private pkmS: PokemonService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getOnePokemon(Number(id));
  }

  getOnePokemon(id: number) {
    this.pkmS.getPokemonByIdFromApi(id).subscribe(
      (data) => {
        this.pokemon = data;
      }, 
      (error) => {
        console.log(error);
      });
  }

  goBack(){
    this.location.back();
  }

  catch(){
    const id = this.route.snapshot.paramMap.get('id');
    this.pkmS.catchPokemonById(Number(id));
  }
}