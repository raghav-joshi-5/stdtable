import { Component, Input, OnInit } from '@angular/core';
import { Istd } from '../../module/table';

@Component({
  selector: 'app-stdtable',
  templateUrl: './stdtable.component.html',
  styleUrls: ['./stdtable.component.scss'],
})
export class StdtableComponent implements OnInit {
  @Input() getstdArray!: Array<Istd>;
  constructor() {}

  ngOnInit(): void {}
}
