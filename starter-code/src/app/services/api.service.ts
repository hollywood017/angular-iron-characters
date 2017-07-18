import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ApiService {

  baseUrl = "http://ih-api.herokuapp.com"

  constructor(public http: Http) { }


  getList () {
    console.log('testing getList')
    let endPoint = "/characters"
    return this.http.get(this.baseUrl+endPoint)
      .map((res: Response )=> res.json());
  }

  getOne(characterId){
    console.log('testing getOne')
    let endPoint = "/characters/"
    return this.http.get(this.baseUrl+endPoint+characterId)
      .map((res: Response) => res.json());
  }

  createNew (character) {
    let endPoint = "/characters"
    return this.http.post(this.baseUrl+endPoint, character)
    .map((res: Response) => console.log(res.json()));
  }

  editOne (id, updatedCharacter) {
    let endPoint = "/characters/" +id
    console.log("This is the id " + id);
    console.log("This is the updatedCharacter " + updatedCharacter)
    return this.http.patch(this.baseUrl + endPoint, updatedCharacter)
  }

  deleteOne (characterIdDelete) {
    console.log("testing deleteOne");
    let endPoint = "/characters/"
    return this.http.delete(this.baseUrl+endPoint+characterIdDelete)

  }

}
