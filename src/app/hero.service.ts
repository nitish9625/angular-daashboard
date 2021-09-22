import { Injectable } from '@angular/core';
import { Hero } from './heros';
import { HEROES } from './mock-heros';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  

  constructor(private messageService:MessageService) { }
  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES);
    this.messageService.add('HeroServices: Fetched heroes');
    return heroes;
  }
  getHero(id:number): Observable<Hero> {
    const hero = HEROES.find(h =>h.id === id)!;
    this.messageService.add(`HeroServices:fetched hero id = ${id}`)
    return of(hero)

  }
}
