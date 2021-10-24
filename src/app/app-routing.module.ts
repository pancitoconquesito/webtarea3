import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {InicioScreenComponent} from '../app/screens/inicio-screen/inicio-screen.component';
import {NoticiasScreenComponent} from '../app/screens/noticias-screen/noticias-screen.component';
import {FormularioScreenComponent} from '../app/screens/formulario-screen/formulario-screen.component';
import {NoticiaActualScreenComponent} from '../app/screens/noticia-actual-screen/noticia-actual-screen.component';

const routes: Routes = [
  {path:'', redirectTo:"/inicio", pathMatch:'full'},
  {path:'inicio', component:InicioScreenComponent},
  {path:"noticias", component:NoticiasScreenComponent},
  {path:'servicioalcliente', component:FormularioScreenComponent},
  
  {path:"noticia/:id", component:NoticiaActualScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
