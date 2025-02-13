import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'day-component',
  templateUrl: './day-component.component.html',
  styleUrls: ['./day-component.component.scss']
})
export class DayComponentComponent implements OnInit {
//https://material.angular.io/cdk/drag-drop/overview
  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog,again, a lot, and again, and again again'
  ];

  @Input() public currentDate: Date;
  constructor() { }



  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
}
