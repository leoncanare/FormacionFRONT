import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
    img {
      width: 100%;
      border-radius: 5px;
    }
  `],
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;

  constructor(
    private acttivatedRoute: ActivatedRoute,
    private heroesService: HeroesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.acttivatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroesId(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  volver() {
    this.router.navigate(['/heroes/listado']);
  }
}
