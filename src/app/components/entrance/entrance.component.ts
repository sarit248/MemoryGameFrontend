import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.scss']
})
export class EntranceComponent implements OnInit {
  public title: string;

  constructor() { }

  ngOnInit() {
    this.title = 'the memory game';
  }

}
