import { group } from '@angular/animations';
import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {

  cadastroForm: FormGroup;

  constructor(private builder : FormBuilder){
    this.cadastroForm = builder.group({
      nome: ['', [Validators.required]],
      usuario: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(12)]],
      confirmaSenha: ['', [Validators.required]],
      aceite: [false, [Validators.requiredTrue]]
    })
  }

  cadastrar() {
    console.log(this.cadastroForm.value);
  }
}
