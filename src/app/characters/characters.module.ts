import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterDetailsComponent } from './pages/characters/character-details.component';
import { SingleCharacterComponent } from './pages/character-details/single-character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import {RouterLink} from "@angular/router";
import {SharedModule} from "../shared/shared.module";
import { CharacterCardComponent } from './components/character-card/character-card.component';
import {CharactersRoutingModule} from "./characters-routing.module";



@NgModule({
  declarations: [
    CharacterDetailsComponent,
    SingleCharacterComponent,
    CharacterListComponent,
    CharacterCardComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    SharedModule,
    CharactersRoutingModule,
  ]
})
export class CharactersModule { }
