import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'day-component',
  templateUrl: './day-component.component.html',
  styleUrls: ['./day-component.component.scss']
})
export class DayComponentComponent implements OnInit {

  @Input() public currentDate: Date;
  constructor() { }

  ngOnInit(): void {
  }

}
