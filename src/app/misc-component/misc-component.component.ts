import { Component, Input, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';


@Component({
  selector: 'misc-component',
  templateUrl: './misc-component.component.html',
  styleUrls: ['./misc-component.component.scss']
})
export class MiscComponentComponent implements OnInit {
  done = [
    'Get up',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog,again, a lot, and again, and again again'
  ];
  constructor() { }
//https://stackblitz.com/edit/angular-nuiviw?file=src%2Fapp%2Fapp.component.css
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
