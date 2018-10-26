import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',//组件选择器
  templateUrl: './heroes.component.html',//页面模板位置
  styleUrls: ['./heroes.component.css']//私有样式位置
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void{
    this.heroes = this.heroService.getHeroes();
  }

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    //创建完组件之后调用该方法
    //可用于初始化逻辑
    this.getHeroes();
  }

}
