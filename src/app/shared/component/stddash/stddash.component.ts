import { Component, OnInit } from '@angular/core';
import { Istd } from '../../module/table';

@Component({
  selector: 'app-stddash',
  templateUrl: './stddash.component.html',
  styleUrls: ['./stddash.component.scss'],
})
export class StddashComponent implements OnInit {
  // create an array of student data
  stdArray: Array<Istd> = [
    // {
    //   fname: 'John',
    //   lname: 'Doe',
    //   email: 'jd@gmail.com',
    //   contact: '1234567890',
    //   stdId: '1',
    // },
  ];

  // create a function to get new student data to be added to the array
  getnewStd(std: Istd) {
    this.stdArray.push(std);
  }

  constructor() {}

  ngOnInit(): void {}
}
