import { Component, OnInit } from '@angular/core';
import {FormGroup, Validators, FormControlName, FormBuilder} from '@angular/forms';

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
      telefono:["",[Validators.required]],
      email:["",[Validators.email, Validators.required]],
      dirigido:[0,Validators.required],
      mensaje:["",[Validators.required,Validators.minLength(15)]]
    });

   }

  ngOnInit(): void {
  }

  validacion():void{
    //validaciones extras, si todo esta ok
    if(!this.dirigido_validador)
      this.mensajeEnviado=true;
    else alert("error en campo de dirigido a");
    //si no un alert
  }
  validarSelect_tr():void{
    if(this.formulario.controls['dirigido'].value==0) this.dirigido_validador=true;
    else this.dirigido_validador=false;
    
  }
}
