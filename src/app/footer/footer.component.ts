import { Component } from '@angular/core';
import { angelevi } from '../angelevi';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  user: angelevi = new angelevi();
  constructor(){
    this.user.sNum = '991480645';
    this.user.sName = 'Vicente Angeles';
    this.user.sLogin = 'angelevi';
    this.user.sCampus = 'Trafalgar';
    this.user.assTitle = 'Angular Intro';
  }
}
