import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
  title = 'bullet-jounal';
  public currentStartDay: Date;
  public currentEndDay: Date;
  public currentWeek: Date[];

  constructor() { }

  ngOnInit() {
    this.currentWeek = this.getWeek(new Date());
    this.currentStartDay = this.currentWeek[0];
    this.currentEndDay = this.currentWeek[6];

  }

  // TODO sort into util class and unit test
  private getWeek(date: Date): Date[] {
    const dayOfWeek = date.getDay();
    const week: Date[] = new Array();

    // value for sunday (0)
    let daysToStartOfWeek = 6;
    if (dayOfWeek !== 0) {// for the other days of the week
      daysToStartOfWeek = dayOfWeek - 1;
    }

    const startOfWeek = new Date(date);
    const endOfWeek = new Date(date);
    startOfWeek.setDate(date.getDate() - daysToStartOfWeek);
    week.push(startOfWeek);
    for (let index = 1; index < 7; index++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + index);
      week.push(day);
    }

    return week;
  }
}
