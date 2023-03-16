import { NgModule } from '@angular/core';
import {CharactersComponent} from "./pages/characters/characters.component";
import {RouterModule, Routes} from "@angular/router";
import {SingleCharacterComponent} from "./pages/single-character/single-character.component";


const routes: Routes = [
  {path: "", component: CharactersComponent},
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
