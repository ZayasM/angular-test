import {Injectable} from "@angular/core";
import {Pregunta} from "../modelos/pregunta";
import {Respuesta} from "../modelos/respuesta";
@Injectable()


export class TestManejoService {
  public objetoTest;


  constructor(){




  }
  setTest(objetoTest){
    this.objetoTest = objetoTest[0].get_preguntas;
  }
  getPregunta(indice:number){

    indice = indice -1;
    return  this.objetoTest[indice];
  }

  getLongitudMaxima(){
  return  this.objetoTest.length;
  }

}
