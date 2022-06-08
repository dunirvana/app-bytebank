import { Component } from "@angular/core";
import { TransferenciaService } from "../services/transferencia.service";

@Component({
    selector:'app-nova-transferencia',
    templateUrl:'./nova-transferencia.component.html',
    styleUrls:['./nova-transferencia.component.scss']

})
export class NovaTransferenciaComponent{

  valor!: number;
  destino!: number;

  constructor(private service: TransferenciaService) {}

  transferir(){
    console.log('Solicitada nova transferência');

    this.service.adicionar({ valor: this.valor, destino : this.destino});
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }
}
