import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  nuevo = false;
  id = '';
  constructor(private heroesService: HeroesService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
                this.activatedRoute.params.subscribe(parametros => {
                  console.log(parametros);
                  this.id = parametros.id;
                  if (this.id !== 'nuevo') {
                    this.heroesService.getHeroe(this.id).subscribe((data: Heroe) => this.heroe = data);
                  }
                });
              }

  ngOnInit() {
  }

  guardar() {
    if (this.id === 'nuevo') {
      // console.log(this.heroe);
    this.heroesService.nuevoHeroe(this.heroe).subscribe((data: any) => {
      console.log(data);
      this.router.navigate(['/heroe', data]);
    },
      error => console.error(error));
    } else {
        // console.log(this.heroe);
    this.heroesService.actualizarHeroe(this.heroe, this.id).subscribe((data: any) => {
      console.log(data);
      // this.router.navigate(['/heroe', data]);
    },
      error => console.error(error));
    }
  }

  agregarNuevo(forma: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    forma.reset({
      casa: 'Marvel'
    });
  }

}
