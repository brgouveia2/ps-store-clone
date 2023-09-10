import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  gameCover:string="";
  @Input()
  gamelabel: string="";
  @Input()
  gametype: string="PS5";
  @Input()
  gamePrice: string="R$129,90";

}
