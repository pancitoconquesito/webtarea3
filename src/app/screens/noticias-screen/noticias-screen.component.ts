import { Component, OnInit } from '@angular/core';
import { Noticia, lista_noticias } from 'src/app/models/noticia.interface';
import { Categoria,lista_categorias} from '../../models/categoria.interface';

@Component({
  selector: 'app-noticias-screen',
  templateUrl: './noticias-screen.component.html',
  styleUrls: ['./noticias-screen.component.scss']
})
export class NoticiasScreenComponent implements OnInit {

  noticias:Noticia[]=lista_noticias;
  lista_categorias=lista_categorias;
  
  totalNoticias:number=0;
  noticia_inicio:number=0;
  noticia_final:number=9;
  cantidadPaginas:number=0;
  constructor(){ 
    this.totalNoticias=lista_noticias.length;
    this.noticia_inicio=0;
    this.noticia_final=9;
    this.cantidadPaginas=parseInt(String(this.totalNoticias/10), 10);
    if(this.cantidadPaginas*10 < this.totalNoticias) this.cantidadPaginas++;

    
    
    
  }

  ngOnInit(): void {
    let listaPaginas:any=document.getElementById("listaPaginas");
    for(let i=0;i<2;i++){

      let divHijo:any=document.createElement("button");
      divHijo.type="button";
      divHijo.className += " btn btn-primary";
      divHijo.innerHTML=i+1;

      divHijo.addEventListener('click', (evt:any) => this.cambiarA_Pagina(evt));
      listaPaginas.appendChild(divHijo);
    }
    let ult_pagina:any=document.getElementById("ult_pagina");
    ult_pagina.innerHTML=this.cantidadPaginas;
    ult_pagina.className += " btn btn-info";
    ult_pagina.addEventListener('click', (evt:any) => this.cambiarA_Pagina(evt));
    
  }

  getColor(idCategoria:number):string{
    let objPivote:any=this.lista_categorias.find(obj=>obj.id==idCategoria);
    return objPivote["color_class"];
  }
  // aumentarPagina(){
  //   this.noticia_inicio+=10;
  //   if(this.noticia_final+10<=this.totalNoticias)
  //     this.noticia_final+=10;
  //   else
  //   this.noticia_final=this.totalNoticias;
  // }
  // disminuirPagina(){
  //   if(this.noti)
  // }
  cambiarA_Pagina(elem:any):void{ 
    let newPagina:number=elem.target.textContent;
    this.noticia_inicio=11*(newPagina-1)-1;
    if(this.noticia_inicio==0)this.noticia_inicio++;
    this.noticia_final=this.noticia_inicio+9;
    if(this.noticia_final>this.totalNoticias)this.noticia_final=this.totalNoticias;

  }
}
