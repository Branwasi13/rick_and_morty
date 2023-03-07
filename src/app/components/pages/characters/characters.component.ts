import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';
import { ActivatedRoute } from '@angular/router';
import { Character } from 'src/app/models/character.model';


@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit{

  characters:Character[] | undefined;

  page: number = 1;

  constructor(private rickAndMortyService: RickAndMortyService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.printCharacters(1);
  }

  //*Esta funcion pinta todos los personajes y se le pasa por parametro el numero de la pagina
  printCharacters(nPage:number): void{
    this.rickAndMortyService.getCharacters(nPage)
    ?.subscribe((characters: Character[]) => {
      this.characters = characters;
    });
  }

  nextPageButton(): void{
    this.page++
    this.printCharacters(this.page);
  }

  previousPageButton(): void{
    this.page--
    this.printCharacters(this.page);
    
  }
}
