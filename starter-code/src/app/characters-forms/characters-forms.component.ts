import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-characters-forms',
  templateUrl: './characters-forms.component.html',
  styleUrls: ['./characters-forms.component.css'],
  providers: [ApiService],
})
export class CharactersFormsComponent implements OnInit {

  characterToCreateOrEdit = {
  };

  constructor(private characterList: ApiService) { }

  ngOnInit() {
  }

  createNew(name, occupation, weapon, debt){
    this.characterList.createNew({
      name: name,
      occupation: occupation,
      weapon: weapon,
      debt: debt
    }).subscribe((res) => console.log(res));
  }

  editOne(idEdit){
    this.characterList.editOne(idEdit, this.characterToCreateOrEdit)
    .subscribe((updatedCharacter) => {console.log(updatedCharacter)
    })
  }

}
