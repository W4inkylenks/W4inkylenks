import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button {
      margin-right: 10px;
      margin-bottom: 10px;
    }  
  `
  ]
})
export class PorRegionComponent {
  
  regiones: string[] = [ 'efta','caricom','eu','pa','au','usan','eeu','al','asean','cais','cefta','nafta','saarc']
  regionActiva: string = '';
  paises: Country[] = [];

  constructor( private paisService: PaisService) {}

  getClaseCss( region: string ): string {
    return (region === this.regionActiva) 
              ? 'btn btn-primary' 
              : 'btn btn-outline-primary';
  }
  activarRegion( region: string ) {

    if( region === this.regionActiva) { return;}

    this.regionActiva = region;
    this.paises = []
    
    this.paisService.buscarRegion( region )
      .subscribe( resp => {
        this.paises = resp;
      })
  }
}
