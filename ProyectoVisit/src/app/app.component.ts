import { Component } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registro de Visitas Comerciales';
}
