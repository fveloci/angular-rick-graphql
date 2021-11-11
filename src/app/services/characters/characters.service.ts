import { Injectable } from '@angular/core';
import {Apollo, ApolloBase, gql} from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {


  constructor(private apollo: Apollo) {

  }


  async getCharacters(page: number, filter: string): Promise<any> {
    const characters = await this.apollo.query({
      query: gql `
      {
        characters(page: ${page}) {
          info {
            count
            pages
          }
          results {
            id
            name
            status
            species
            gender
            image
          }
        }
      }
      `
    }).toPromise();
    return characters;
  }


  async getCharacterById(id: number): Promise<any> {
    const character = await this.apollo.query({
      query: gql`
      {
        character(id: ${id}) {
          name
          status
          species
          gender
          image
          episode {
            episode
            name
          }
        }
      }
      `
    }).toPromise();
    return character;
  }
}
