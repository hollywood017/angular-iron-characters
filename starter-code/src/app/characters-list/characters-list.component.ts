import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';



@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
  providers: [ApiService],

})
export class CharactersListComponent implements OnInit {
  characterId: any;

  characters: Array<any> = [
    {name: "TheName",
    id: "TheID",
    occupation: "TheOccupation",
    debt: "TheDebt",
    weapon: "TheWeapon"
  }
  ];


  constructor(private characterList: ApiService) { }

  list: any;
  ngOnInit() {
  }

  fetchAll () {
    this.characterList.getList()
      .subscribe((list) => this.list = list);
  }

  fetchOne (id) {
    console.log(id);
    this.characterList.getOne(id)
    .subscribe((character) => {
      this.list= [];
      this.list.push(character);
    });


  }

  deleteOne (id) {
    console.log("this is char id to delete" + id)
    this.characterList.deleteOne(id)
    .subscribe()
  }

}
