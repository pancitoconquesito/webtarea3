import { Component, OnInit , Input} from '@angular/core';
import { Noticia } from 'src/app/models/noticia.interface';
@Component({
  selector: 'app-card-noticia-extendida',
  templateUrl: './card-noticia-extendida.component.html',
  styleUrls: ['./card-noticia-extendida.component.scss']
})
export class CardNoticiaExtendidaComponent implements OnInit {

  @Input() noticia:Noticia;
  largoTextoResumen:number=100;
  
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
