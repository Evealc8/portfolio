import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent  implements OnInit {
  // array de mi presentacion
  sobremi: any;
  
  constructor (private datos: DatosService) { }

  ngOnInit(): void{
    this.datos.getDatos().subscribe(dato => {
      this.sobremi = dato.sobremi;
    })
  }

}
