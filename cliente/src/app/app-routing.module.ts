import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShareadModule } from './sharead/sharead.module'
import { PagenotfoundComponent } from './sharead/pagenotfound/pagenotfound.component';

// define rotas de navegação
const routes: Routes = [
  { path: 'contatos', loadChildren: './contatos/contatos.module#ContatosModule' },
  { path: '', redirectTo: '/contatos', pathMatch: 'full' },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ShareadModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
