import { AfterViewInit, Component } from '@angular/core';
import { food } from './food';
import breakfast  from '../assets/data/breakfastJSON.json';
import lunch from '../assets/data/lunchJSON.json';
import dinner from '../assets/data/dinnerJSON.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angelevi-A4';

  bf: food[] = breakfast.breakfast;
  lf: food[] = lunch.lunch;
  df: food[] = dinner.dinner;

}
