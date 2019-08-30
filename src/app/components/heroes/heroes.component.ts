import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from 'src/app/interfaces/heroe.interface';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes().subscribe((data: Heroe[]) => {
      console.log(data);
      this.heroes = data;
      // // tslint:disable-next-line: forin
      // for (const key$ in data) {
      //   this.heroes.push( data[ key$ ]);
      // }

    });
   }

  ngOnInit() {
  }

}
