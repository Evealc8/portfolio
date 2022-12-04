import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicios/datos.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  // un array solo para banner
  banner: any;

  constructor (private datos: DatosService) { }

  ngOnInit(): void{
    this.datos.getDatos().subscribe(dato => {
      this.banner = dato.banner;
    })
  }

}
