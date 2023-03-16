import { NgModule } from '@angular/core';
import {CharacterDetailsComponent} from "./pages/characters/character-details.component";
import {RouterModule, Routes} from "@angular/router";
import {SingleCharacterComponent} from "./pages/character-details/single-character.component";


const routes: Routes = [
  {path: "", component: CharacterDetailsComponent},
  {path: ":id", component: SingleCharacterComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class CharactersRoutingModule { }
