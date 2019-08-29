import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Heroe } from '../interfaces/heroe.interface';
import { map } from 'rxjs/operators';





@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  heroesURL = 'https://heroesapp-6a12c.firebaseio.com/heroes.json';

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

  
}
