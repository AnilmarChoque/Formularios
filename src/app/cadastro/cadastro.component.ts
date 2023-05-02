import { group } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  cadastroForm: FormGroup;

  constructor(private builder : FormBuilder){
    this.cadastroForm = builder.group({
      nome: [''],
      usuario: [''],
      email: [''],
      senha: [''],
      confirmaSenha: [''],
      aceite: [false]
    })
  }

  cadastrar() {
    console.log(this.cadastroForm.value);
  }
}
