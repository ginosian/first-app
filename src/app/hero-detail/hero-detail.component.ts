import {Component, Input} from '@angular/core';
import {HeroComponent} from "../hero/hero.component";

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent{

    @Input()
    hero: HeroComponent;

}
