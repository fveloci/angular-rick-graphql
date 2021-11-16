import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-search-character',
  templateUrl: './search-character.component.html',
  styleUrls: ['./search-character.component.scss']
})
export class SearchCharacterComponent implements OnInit {

  searchInput: string = "";
  @Output() characterName: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  searchCharacter(text: string) {
    this.characterName.emit(text);
  }

  cleanInput() {
    this.searchInput = "";
    this.characterName.emit("");
  }

}
