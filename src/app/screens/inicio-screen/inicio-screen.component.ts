import { Component, OnInit } from '@angular/core';
import { Noticia, lista_noticias } from 'src/app/models/noticia.interface';
import {lista_categorias} from '../../models/categoria.interface'
@Component({
  selector: 'app-inicio-screen',
  templateUrl: './inicio-screen.component.html',
  styleUrls: ['./inicio-screen.component.scss']
})
export class InicioScreenComponent implements OnInit {

  noticias:Noticia[]=lista_noticias;
  lista_categorias=lista_categorias;

  constructor(){
    
  }

  ngOnInit(): void {}

  getColor(idCategoria:number):string{
    let objPivote:any=this.lista_categorias.find(obj=>obj.id==idCategoria);
    return objPivote["color_class"];
  }
}
