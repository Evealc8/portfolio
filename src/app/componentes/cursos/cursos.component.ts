import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  // array certificados
  certificados: any;
  
  constructor (private datos: DatosService) { }

  ngOnInit(): void{
    this.datos.getDatos().subscribe(dato => {
      this.certificados = dato.certificados;
    })
  }
}
