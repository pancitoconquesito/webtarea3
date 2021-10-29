import { Component, Input, OnInit } from '@angular/core';
import {Noticia, lista_noticias} from '../../models/noticia.interface';
import {Categoria,lista_categorias} from '../../models/categoria.interface';



@Component({
  selector: 'app-enlistador',
  templateUrl: './enlistador.component.html',
  styleUrls: ['./enlistador.component.scss']
})
export class EnlistadorComponent implements OnInit {

  //tipo, paramtipos, tam
  
  lista_noticias:Noticia[]=[];
  lista_categorias=lista_categorias;

  init_4:string='col-12 col-sm-6 col-md-4 col-lg-3';
  init_3:string='col-12 col-sm-6 col-lg-4';
  init_2:string='col-12 col-md-6 col-lg-6';
  init_1:string='col-12 col-md-12 col-lg-12';
  init_definitive:string='';

  @Input()cuantasPorFila:number=1;
  @Input() tipo:number=0;
  @Input() lista_id_destacados:Array<number>=[];
  @Input() limite:number[]=[0,9999];
  constructor() { 
    // this.lista_noticias=[{
    //   id:0,titulo:'',contenido:'',img:'', autor:'', categoria:0, fecha:''
    // }];
    
  }
  ngOnInit(): void {
  }
  getColor(idCategoria:number):string{
    let objPivote:any=this.lista_categorias.find(obj=>obj.id==idCategoria);
    return objPivote["color_class"];
  }
  
  enlistarDestacados():void{
    
    for(let i=0;i<this.lista_id_destacados.length;i++){
      let destacado_Actual:any=lista_noticias.find(obj=>obj.id==this.lista_id_destacados[i]);
      this.lista_noticias.push(destacado_Actual);
    }
    
  }
  enlistarTodos():void{
    
    let lista_noticias_pivote=lista_noticias;
    let largoTotal=lista_noticias_pivote.length;
    let count=0;
    let esID:boolean=true;
    for(let i=0;i<largoTotal;i++){
      esID=false;
      if(count==this.limite[1])break;
      if(i>=this.limite[0]){  
        for(let j=0;j<this.lista_id_destacados.length;j++){
          if(lista_noticias_pivote[i].id==this.lista_id_destacados[j]){
            esID=true;
            break;
          }
        }
        if(!esID){
          this.lista_noticias.push(lista_noticias_pivote[i]);
          count++;
        }
      }
    }
    // for(let j=0;j<this.lista_id_destacados.length;j++){
    //   let elim:any=lista_noticias.find(obj=>obj.id==this.lista_id_destacados[j]);
    //   this.lista_noticias.splice( this.lista_noticias.indexOf(elim), 1 );
    // }
  }

  enlistarExtendido():void{
    
    let lista_noticias_pivote=lista_noticias;
    let largoTotal=lista_noticias_pivote.length;
    let count=0;
    for(let i=0;i<largoTotal;i++){
      if(count==this.limite[1])break;
      if(i>=this.limite[0]){

        this.lista_noticias.push(lista_noticias_pivote[i]);
        count++;
      }
    }
  }

  vaciarLista():void{
    this.lista_noticias.splice(0, this.lista_noticias.length);
  }
  setCuantasPorFila():void{
    switch(this.cuantasPorFila){
      case 1:{this.init_definitive=this.init_1;break;}
      case 2:{this.init_definitive=this.init_2;break;}
      case 3:{this.init_definitive=this.init_3;break;}
      case 4:{this.init_definitive=this.init_4;break;}
      default:{this.init_definitive=this.init_1;break;}
    }
  }
}
