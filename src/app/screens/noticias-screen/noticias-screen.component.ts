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
  noticia_final:number=10;
  cantidadPaginas:number=0;
  constructor(){ 
    this.totalNoticias=lista_noticias.length;
    this.noticia_inicio=0;
    //this.noticia_final=10;
    this.cantidadPaginas=parseInt(String(this.totalNoticias/10), 10);
    if(this.cantidadPaginas*10 < this.totalNoticias) this.cantidadPaginas++;

    
    
    
  }

  ngOnInit(): void {
    let listaPaginas:any=document.getElementById("listaPaginas");
    for(let i=0;i<this.cantidadPaginas;i++){

      let divHijo:any=document.createElement("button");
      divHijo.type="button";
      divHijo.className += "m-1 col-4 col-md-3 col-lg-2 btn btn btn-primary";
      divHijo.innerHTML=i+1;

      divHijo.addEventListener('click', (evt:any) => this.cambiarA_Pagina(evt));
      listaPaginas.appendChild(divHijo);
    }
    let ult_pagina:any=document.getElementById("ult_pagina");
    ult_pagina.innerHTML=this.cantidadPaginas;
    ult_pagina.className += "col-2 btn btn-info";
    ult_pagina.addEventListener('click', (evt:any) => this.cambiarA_Pagina(evt));
    
  }

  getColor(idCategoria:number):string{
    let objPivote:any=this.lista_categorias.find(obj=>obj.id==idCategoria);
    return objPivote["color_class"];
  }

  cambiarA_Pagina(elem:any):void{ 
    this.newPagina=elem.target.textContent;
    this.noticia_inicio=10*(this.newPagina-1);
    this.count_ult_pagina=this.noticia_inicio+10;
    if(this.count_ult_pagina>this.totalNoticias)this.count_ult_pagina=this.totalNoticias;
    this.setColorCuadro(this.newPagina);
  }
  setColorCuadro(n:number){
    let listaPaginas:any=document.getElementById("listaPaginas");
    let hijosLista:any=listaPaginas.childNodes;
    for (var i = 0; i < hijosLista.length; i++) {
      if(hijosLista[i].textContent==n){
        hijosLista[i].classList.replace('btn-primary', 'btn-info');
      }else{
        hijosLista[i].classList.replace('btn-info','btn-primary');
      }
    }
  }
  newPagina:number=0;
  count_ult_pagina:number=10;
}
