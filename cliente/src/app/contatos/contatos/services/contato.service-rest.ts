import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContatoModel } from '../model/contato.model';
import { environment } from '../../../../environments/environment'

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class ContatoServiceRest{

    constructor(
        private http: HttpClient
    ){}

    public getContatos(): Observable<ContatoModel[]>{
        return this.http.get<ContatoModel[]>(`${environment.API}/contatos`)
    }

    createContato(contato: ContatoModel){
        return this.http.post<ContatoModel>(`${environment.API}/contatos`, contato, httpOptions)
    }

    updateContato(contato: ContatoModel): Observable<any> {
        return this.http.put(`${environment.API}/contatos`, contato, httpOptions)
    }

    deleteContato(id:string): Observable<any> {
        return this.http.delete(`${environment.API}/contatos/${id}`)
    }
    

}
