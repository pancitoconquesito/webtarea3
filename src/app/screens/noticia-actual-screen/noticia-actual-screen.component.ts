import { Component, OnInit } from '@angular/core';
import {lista_noticias, Noticia} from '../../models/noticia.interface'
import {ActivatedRoute, Route} from '@angular/router';
import {lista_categorias} from '../../models/categoria.interface';
@Component({
  selector: 'app-noticia-actual-screen',
  templateUrl: './noticia-actual-screen.component.html',
  styleUrls: ['./noticia-actual-screen.component.scss']
})
export class NoticiaActualScreenComponent implements OnInit {

  lista_categorias=lista_categorias;
  categoria:string='';
  id_noticia:number=0;
  color:string='';
  noticiaActual:Noticia={id:0,titulo:'',contenido:'',img:'',autor:'',categoria:0,fecha:''};

  constructor(private ruta:ActivatedRoute) {
    window.scroll(0,0);
    
    this.ruta.params.subscribe(datos =>{
      this.id_noticia=datos["id"];
    });
   }

  ngOnInit(): void {
    let objPivote:any=lista_noticias.find(obj=>obj.id==this.id_noticia);
    
    this.noticiaActual.id=objPivote["id"];
    this.noticiaActual.titulo=objPivote["titulo"];
    this.noticiaActual.contenido=objPivote["contenido"];
    this.noticiaActual.img=objPivote["img"];
    this.noticiaActual.autor=objPivote["autor"];
    this.noticiaActual.categoria=objPivote["categoria"];
    this.noticiaActual.fecha=objPivote["fecha"];

    let objPivote2:any=lista_categorias.find(obj=>obj.id==this.noticiaActual.categoria);
    this.categoria=objPivote2["nombre"];
    this.color=objPivote2["color_class"];
    let p_categoria:any=document.getElementById("categoria");
    p_categoria.className += this.color;
  }
  /*.verde{
    color: chartreuse;
}
.azul{
    color: cornflowerblue;
}
.rojo_oscuro{
    color: darkred;
}
.violeta{
    color: darkviolet;
}
.azul_oscuro{
    color: darkblue;
}
.rojo{
    color: crimson;
}*/
}
