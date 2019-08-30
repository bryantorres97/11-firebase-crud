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
  loading = true;

  constructor(private heroesService: HeroesService) {
    this.heroesService.getHeroes().subscribe((data: Heroe[]) => {
      console.log(data);
      this.heroes = data;
      // // tslint:disable-next-line: forin
      // for (const key$ in data) {
      //   this.heroes.push( data[ key$ ]);
      // }
      this.loading = false;
    });
   }

  ngOnInit() {
  }

  borrarHeroe(key$: string) {
    this.heroesService.deleteHeroe(key$).subscribe( data => {
      if (data) {
        console.error(data);
      } else {
        delete this.heroes[key$];
      }
    });
  }

}
