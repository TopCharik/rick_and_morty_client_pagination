import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable, tap} from "rxjs";
import {PaginationInfo} from "../../shared/models/paginationInfo";
import {CharactersQuery} from "../../shared/models/characterQuery";
import {Character} from "../../shared/models/character";
import {charactersPageInitialState, CharactersState} from "../models/charactersPageModel";
import {CharactersRepositoryService} from "./characters-repository.service";


@Injectable({
  providedIn: 'root'
})
export class CharactersService {


  private charactersStateSource = new BehaviorSubject<CharactersState>(charactersPageInitialState);
  public charactersModel$: Observable<CharactersState> = this.charactersStateSource.asObservable();

  constructor(
    private charactersRepository: CharactersRepositoryService,
  ) {  }


  public updateCharacters(characterParams: CharactersQuery) {
    this.updateState({
      isLoading: true,
    });

    this.charactersRepository.loadCharacters(characterParams).pipe(
      map(res => {
        return {
          characters: [...res.results],
          paginationInfo: {
            hasPrev: !!res.info.prev,
            hasNext: !!res.info.next,
          }
        }
      }),
      tap(() => this.updateState({
        isLoading: false,
      })),
    )
      .subscribe({
        next: res => {
          const characters: Character[] = res.characters;
          const paginationInfo: PaginationInfo = res.paginationInfo

          this.updateState({
            paginationInfo: paginationInfo,
            data: characters,
          });
        },
        error: err => {
          this.updateState({
            paginationInfo: {
              hasPrev: false,
              hasNext: false,
            },
            data: [],
            error: err,
          })
        }
      });
  }


  private updateState(newState: Partial<CharactersState>) {
    const currentState = this.charactersStateSource.getValue();
    this.charactersStateSource.next({...currentState, ...newState});
  }
}

