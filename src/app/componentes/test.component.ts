import {Component} from "@angular/core";
import {TestPeticionService} from "../servicios/testPeticion.service";
import {TestManejoService} from "../servicios/testManejo.service";


@Component({
  selector: "app-test",
  templateUrl: "../vistas/test.component.html",
  providers:  [TestPeticionService,  TestManejoService ]

})

export class TestComponent {
  public resultado;
  public pregunta;
  public respuestas;
  public longitudMaxima;

  constructor( private _testPeticionService: TestPeticionService, private _testManejoService:TestManejoService  ){

        this._testPeticionService.getPeticionTest().subscribe(
          result => {

            this.resultado = result;
            this._testManejoService.setTest(  this.resultado );
            this.pregunta = this._testManejoService.getPregunta(1);
            this.respuestas =   this.pregunta.get_respuestas;
            this.longitudMaxima = this._testManejoService.getLongitudMaxima();
          },

          error => {
            var errorMessage = <any>error;

              return  errorMessage;
          }


        );
  }

  ngOnInit(){



  }

  encuentraPregunta (indice){
    this.pregunta = this._testManejoService.getPregunta(indice);
    this.respuestas =   this.pregunta.get_respuestas;
  }


}
