import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams () {
    return new HttpParams().set( 'fields', 'name,capital,population,cca2,ccn3,flags')
  }

  constructor( private http: HttpClient ) {}

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.apiUrl }/name/${termino}`

    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ termino }`

    return this.http.get<Country[]>(url, { params: this.httpParams });
  }

  getPaisPorCodigo( termino: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha?codes=${ termino }`

    return this.http.get<Country>(url);
  }

  buscarRegion( region: string ): Observable<Country[]> {
    const url = `https://restcountries.com/v2/regionalbloc/${ region }`

    return this.http.get<Country[]>(url, { params: this.httpParams })
        .pipe(
          tap( console.log)
        )
  }
}
