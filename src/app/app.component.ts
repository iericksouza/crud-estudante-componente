import { Component } from '@angular/core';
import { studentData } from './estudante.json';

interface Estudante {
  id: number;
  name: string;

  email: string;
  telephone: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crud-estudante-componente';

  estudantes: Estudante[] = studentData;
}
