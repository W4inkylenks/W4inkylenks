import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";  // permite recibir un observable y regresar otro observable

import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country;


  constructor( 
    private activatedRoot: ActivatedRoute, 
    private paisService: PaisService          
    ) { }

  ngOnInit(): void {

    this.activatedRoot.params
      .pipe(
        switchMap( ( { codigoPais } ) => this.paisService.getPaisPorCodigo( codigoPais )),
        tap( console.log )
      )
      .subscribe( pais => {
        this.pais = pais.shift()
        console.log(this.pais)
      })

      if(!this.pais){
        console.log('No existe todavia')
      }
    ///// ES lo mismo que arriba

    // this.activatedRoot.params
    //   .subscribe( ({ codigoPais }) => {
    //     console.log( codigoPais )
        
    //     this.paisService.getPaisPorCodigo( codigoPais)
    //       .subscribe( pais => {
    //         console.log(pais)
    //       })

    //   })


  }

}
