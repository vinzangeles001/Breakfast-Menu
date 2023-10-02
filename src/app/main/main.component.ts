import { Component, Input } from '@angular/core';
import { food } from '../food';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  title = 'angelevi-A4';
 @Input() bf!: food[];
 @Input() lf!: food[];
 @Input() df!: food[];
 
}