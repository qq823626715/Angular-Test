import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',//组件选择器
  templateUrl: './heroes.component.html',//页面模板位置
  styleUrls: ['./heroes.component.css']//私有样式位置
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id : 1,
    name : 'Windstorm'
  };

  constructor() { }

  ngOnInit() {
    //创建完组件之后调用该方法
    //可用于初始化逻辑
  }

}
