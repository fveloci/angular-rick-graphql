import { CharactersService } from './../../services/characters/characters.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  character: any = {}
  isLoaded: boolean = false;
  isAlive: boolean = false;

  constructor(private characterService: CharactersService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getCharacter(Number(this.route.snapshot.paramMap.get('id')));
  }

  private async getCharacter(id: number) {
    try {
      this.isLoaded = false;
      let response = await this.characterService.getCharacterById(id);
      this.character = response.data.character;
      console.log(this.character)
      this.isLoaded = true;
    } catch (error) {
      console.log(`An error has ocurred, ${error}`)
    }
  }



}
