import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CharacterDetailsService} from "../../services/character-details.service";
import {map} from "rxjs";
import {Location} from "@angular/common";

@Component({
  selector: 'app-character-details',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
    public singleCharacterService: CharacterDetailsService)
  { }

  ngOnInit(): void {

    this.route.params.pipe(
      map(params => params["id"]),
    )
      .subscribe({
        next: id => {
          this.singleCharacterService.loadCharacter(id);
        }
      })

  }

  onReturn() {
    this.location.back();
  }

}
