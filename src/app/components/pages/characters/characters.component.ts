import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { Character } from 'src/app/models/character.model';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{

  characters:Character[] | undefined;

  constructor(private rickAndMortyService: RickAndMortyService){}

  ngOnInit(): void {
    this.printCharacters();
  }

  printCharacters(valor?:number): void{
    this.rickAndMortyService.getCharacters(valor)
    ?.subscribe((characters: Character[]) => {
      this.characters = characters;
    });
    console.log(this.characters);
  }

}
