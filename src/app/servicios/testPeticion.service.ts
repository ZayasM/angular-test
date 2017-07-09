import {Injectable} from "@angular/core";
import {Http, Response, Headers} from "@angular/http";
import "rxjs/add/operator/map";
import {Observable} from "rxjs/Observable";

@Injectable()
export class TestPeticionService {

  public prueba = "esto es una prueba";
  public url: string;
  public resultado;

  constructor(private _http:Http){
    this.url ="http://presupuestador.expacioweb.com/api/test/1";
  }


  getPeticionTest(){

      return this._http.get(this.url)
                       .map(res => res.json());
  }

}
