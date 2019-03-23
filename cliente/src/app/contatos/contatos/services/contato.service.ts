import { Injectable } from '@angular/core';
import { ContatoServiceRest } from './contato.service-rest';
import { Observable } from 'rxjs';
import { ContatoModel } from '../model/contato.model';



@Injectable()
export class ContatoService{

    constructor(private serviceRest: ContatoServiceRest){}

    getContatos():Observable<ContatoModel[]>{
        return this.serviceRest.getContatos()
    }

    createContato(contato: ContatoModel): Observable<any>{
        return this.createContato(contato)
    }

    updateContato(contato: ContatoModel): Observable<any> {
        return this.updateContato(contato)
    }

    deleteContato(id: string): Observable<any> {
        return this.deleteContato(id)
    }

}