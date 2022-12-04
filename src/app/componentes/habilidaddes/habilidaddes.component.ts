import { Component , OnInit} from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
@Component({
  selector: 'app-habilidaddes',
  templateUrl: './habilidaddes.component.html',
  styleUrls: ['./habilidaddes.component.css']
})
export class HabilidaddesComponent implements OnInit {
  // array habilidades
  habilidades: any;
  
  constructor (private datos: DatosService) { }

  ngOnInit(): void{
    this.datos.getDatos().subscribe(dato => {
      this.habilidades = dato.habilidades;
    })
  }
}
