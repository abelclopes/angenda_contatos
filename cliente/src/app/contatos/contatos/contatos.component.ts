import { Component, OnInit } from '@angular/core';
import { ContatoModel} from "./model/contato.model"
import { ContatoService } from './services/contato.service';
@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  conatos: ContatoModel[];
  constructor(private service: ContatoService) { }

  ngOnInit() {
    this.getContatos()
  }

  private getContatos(): void{
      this.service.getContatos()
        .subscribe(res=> this.conatos = res)
  }

  


}
