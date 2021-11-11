import { ApiResult } from './../../models/api-result.model';
import { CharactersService } from './../../services/characters/characters.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  characters: ApiResult = <ApiResult>{}
  page: number = 1;
  filter: string = "";
  isLoaded: boolean = false;
  lastPage: number = 1;
  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.getCharacters();
  }

  private async getCharacters() {
    try {
      this.isLoaded = false;
      this.characters = await this.characterService.getCharacters(this.page, this.filter);
      console.log(this.characters)
      this.lastPage = this.characters.data.characters.info.pages;
      this.isLoaded = true;
    } catch (error) {
      const msg = `An error has ocurred, ${error}`
      console.log(msg)
    }
  }

  nextPage(){
    if(this.page != this.lastPage){
      this.page++;
      this.getCharacters();
    }
  }
  beforePage(){
    if(this.page != 1){
      this.page--;
      this.getCharacters();
    }
  }
  firstPage(){
    this.page = 1;
    this.getCharacters();
  }

}
