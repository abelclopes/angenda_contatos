import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContatosComponent } from './contatos/contatos.component';
import { HttpClientModule } from '@angular/common/http';
import { ContatoService } from './contatos/services/contato.service';
import { ContatoServiceRest } from './contatos/services/contato.service-rest';

@NgModule({
  declarations: [ContatosComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [ContatoService, ContatoServiceRest]
})
export class ContatosModule { }
