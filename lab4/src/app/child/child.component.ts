import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  @Input() a: number = 0;
  @Input() b: number = 0;
  @Input() c: number = 0;

  ngOnInit() {}

  public solve() {
    var x1 = (-1 * this.b + Math.sqrt(Math.pow(this.b, 2) - (4 * this.a * this.c))) / (2 * this.a);
    var x2 = (-1 * this.b - Math.sqrt(Math.pow(this.b, 2) - (4 * this.a * this.c))) / (2 * this.a);
    alert('x1: ' + x1 + ' x2: ' + x2);
  }

}
