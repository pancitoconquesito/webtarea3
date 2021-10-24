import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from 'src/app/models/noticia.interface';

@Component({
  selector: 'app-card-noticia',
  templateUrl: './card-noticia.component.html',
  styleUrls: ['./card-noticia.component.scss']
})
export class CardNoticiaComponent implements OnInit {

  @Input() noticia:Noticia;
  largoTextoResumen:number=50;
  
  @Input() color_class:string='';
  
  constructor() { 
    this.noticia={
      id:0,titulo:'',contenido:'',img:'', autor:'', categoria:0, fecha:''
    };
  }

  ngOnInit(): void {
  }

  funcionAcortarTexto(texto:string):string{
    return texto.substring(0,this.largoTextoResumen);
  }
}
