import { Component } from '@angular/core';
import { angelevi } from '../angelevi';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  user: angelevi = new angelevi();
    constructor(){
      this.user.sNum = '991480645';
      this.user.sName = 'Vicente Angeles';
      this.user.sLogin = 'angelevi';
      this.user.sCampus = 'Trafalgar';
      this.user.assTitle = 'Angular More';
    }
}
