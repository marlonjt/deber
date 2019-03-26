import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import {ErrorStateMatcher,ThemePalette} from '@angular/material/core';
import {MatTableDataSource} from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export class FormFieldPrefixSuffixExample {
  hide = true;
}

export interface PeriodicElement {
  name: string;
  position: number;
  apellido: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'juan', apellido: "", symbol: 'H'},
  {position: 2, name: 'pedro', apellido:"", symbol: 'He'},
  {position: 3, name: 'jose', apellido: "", symbol: 'Li'},
  {position: 4, name: 'pepe', apellido: "", symbol: 'Be'},
];
export class TableFilteringExample {
  displayedColumns: string[] = ['position', 'name', 'apellido'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}

export interface ChipColor {
  name: string;
  color: ThemePalette;
}

export class ChipsStackedExample {
  availableColors: ChipColor[] = [
    {name: 'none', color: undefined},
    {name: 'Primary', color: 'primary'},
    {name: 'Accent', color: 'accent'},
    {name: 'Warn', color: 'warn'}
  ];
}

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  
  datosGenerales: FormGroup;
  estudios: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.datosGenerales = this.fb.group({
      nombre: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      apellidoPaterno: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      apellidoMaterno: ['',[Validators.required,Validators.pattern('[a-zA-Z]*')]],
      fechaNacimiento: ['',Validators.required],
      contraseña: ['',[Validators.required,Validators.min(6),Validators.max(20),Validators.pattern('[a-zA-Z0-9*@!+/]*')]],
      genero: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]]
      
    })
  }

}
