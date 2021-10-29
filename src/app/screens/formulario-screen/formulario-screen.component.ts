import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControlName, FormBuilder} from '@angular/forms';
import { CardNoticiaExtendidaComponent } from 'src/app/components/card-noticia-extendida/card-noticia-extendida.component';

@Component({
  selector: 'app-formulario-screen',
  templateUrl: './formulario-screen.component.html',
  styleUrls: ['./formulario-screen.component.scss']
})
export class FormularioScreenComponent implements OnInit {

  formulario:FormGroup;
  mensajeEnviado:boolean=false;
  dirigido_validador:boolean=false;

  constructor(public mi_formulario:FormBuilder) {
    this.formulario=this.mi_formulario.group({
      nombrecompleto:["",[Validators.required]],
      telefono:["",[Validators.pattern( "^[0-9_-]{9,9}$"), Validators.required]],
      email:["",[Validators.email, Validators.required]],
      dirigido:[0,Validators.required],
      mensaje:["",[Validators.required,Validators.minLength(15)]]
    });

   }

  ngOnInit(): void {
  }

  validacion():void{
    let countOK=0;
    this.validarSelect_tr();
    if(!this.dirigido_validador)
      countOK++;
    else alert("error en campo de dirigido a");
    
    if(this.isNumeric(this.formulario.controls['telefono'].value)){
      countOK++;
    }else alert("error en campo telefono, este debe ser numerico");

    if(countOK==2)this.mensajeEnviado=true;
  }
  isNumeric(cadena:string):boolean{
    for(let i=0;i<cadena.length;i++){
      
      if(cadena[i]!='0' && cadena[i]!='1' && cadena[i]!='2' && cadena[i]!='3' && cadena[i]!='4' && cadena[i]!='5'
      && cadena[i]!='6' && cadena[i]!='7' && cadena[i]!='8' && cadena[i]!='9'){
        return false;
      }
    }
    return true;
  }
  validarSelect_tr():void{
    if(this.formulario.controls['dirigido'].value==0) this.dirigido_validador=true;
    else this.dirigido_validador=false;
    
  }
}
