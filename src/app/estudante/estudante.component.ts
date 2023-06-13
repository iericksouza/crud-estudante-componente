import { Component, OnInit } from '@angular/core';
import { EstudanteService } from '../estudante.service';
import { Observable } from 'rxjs';
import { Estudante } from './estudante';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-estudante',
  templateUrl: './estudante.component.html',
  styleUrls: ['./estudante.component.css']
})
export class EstudanteComponent implements OnInit {

  estudante: Estudante [] = [];
  isEditing : boolean = false;
  formGroupEstudante: FormGroup;

  constructor (private: EstudanteService: EstudanteService,
    private: formBuilder: formBuilder

)
    this.formGroupEstudante = FormBuilder.group({
      "id": [''],
      "name": [''],
      "email": [''],
      "telephone": ['']
    });
}
ngOnInit(): void {
  this.loadEstudante(),
}

loadEstudante() {
  this.estudanteService.getEstudante().subscribe(data => {
    next data => this.estudantes = data
}
