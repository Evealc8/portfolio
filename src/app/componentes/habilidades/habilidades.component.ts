import { Component , OnInit} from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';
@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  //  habilidades datos individuales
  habilidades: any;
  habilidadesB: any;

  constructor (private datos: DatosService) { }

  ngOnInit(): void{
    this.datos.getDatos().subscribe(dato => {
      console.log(dato);
      this.habilidades=dato.habilidades;
      this.habilidadesB=dato.habilidadesB;
    })
  }
}
