import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroesURL = 'https://heroesapp-6a12c.firebaseio.com/heroes.json';
  private heroeURL = 'https://heroesapp-6a12c.firebaseio.com/heroes/';

  constructor(private http: HttpClient) { }

  nuevoHeroe(heroe: Heroe) {
    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.heroesURL, body, { headers }).pipe(map(res => {
      // console.log(res);
      // tslint:disable-next-line: no-string-literal
      return res['name'];
    }));
  }

  actualizarHeroe(heroe: Heroe, key$: string ) {
    const body = JSON.stringify(heroe);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    const url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.put(url, body, { headers }).pipe(map(res => {
      // console.log(res);
      // tslint:disable-next-line: no-string-literal
      return res['name'];
    }));
  }

  getHeroe( key$: string) {
    const url = `${ this.heroeURL }/${ key$ }.json`;
    return this.http.get(url).pipe(map(res => res));
  }

  getHeroes( ) {
    return this.http.get(this.heroesURL).pipe(map(res => res));
  }

}
