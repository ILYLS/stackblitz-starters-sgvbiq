import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  animations: [
    trigger('keyframes',[
      transition(':enter', [       
        animate('3s', keyframes([ 
          style({transform: 'translateX(0%)'}), 
          style({transform: 'translateX(500%)'}), 
          style({transform: 'translate(500%, 100%)'}), 
          style({transform: 'translateY(100%)'}), 
          style({transform: 'translateX(0%)'}) 
        ])),
      ])      
    ])
  ],
  templateUrl: 'test.html',
  styleUrls: ['test.less']
})
export class App {
  name = 'zaeeazeaze';
}

bootstrapApplication(App);
