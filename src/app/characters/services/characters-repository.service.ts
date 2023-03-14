import {Injectable} from '@angular/core';
import {Character} from "../../shared/models/character";
import {map, Observable, of, tap} from "rxjs";
import {ApiProvider} from "../../shared/services/api-provider.service";
import {CharactersQuery} from "../../shared/models/characterQuery";
import {PaginatedResponse} from "../../shared/models/paginatedResponse";
import {filterCharacters} from "../helpers/filterCharacters";
import {mapCharactersToPaginatedResponse} from "../helpers/mapCharactersToPaginatedResponse";

@Injectable({
  providedIn: 'root'
})
export class CharactersRepositoryService {
  private characters: Character[] = [];

  constructor(private apiProvider: ApiProvider) {
  }

  public loadCharacters(characterParams: CharactersQuery): Observable<PaginatedResponse<Character>> {
    return this.getCharacters().pipe(
      map(characters => filterCharacters(characters, characterParams)),
      map(characters => mapCharactersToPaginatedResponse(characters, characterParams.page)),
    );
  }

  private getCharacters(): Observable<Character[]> {
    if (this.characters.length > 0) {
      return of(this.characters);
    } else {
      return this.apiProvider.loadAllCharacters().pipe(
        map(characters => characters.sort((a, b) => a.name.localeCompare(b.name))),
        tap(characters => this.characters = characters),
      );
    }
  }
}
