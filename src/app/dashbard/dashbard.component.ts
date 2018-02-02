import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashbard',
  templateUrl: './dashbard.component.html',
  styleUrls: ['./dashbard.component.css']
})
export class DashbardComponent implements OnInit {

  constructor(private heroService:HeroService) { }
   heroes:Hero[]= [];
  ngOnInit() {
    this.getHeroes();
  }
  getHeroes():void{
    this.heroService.getHeroes().subscribe(hero=>this.heroes=hero.slice(0,4));
  }
}
