import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-example',
  templateUrl: './menu-example.component.html',
})
export class MenuExampleComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  click() {
    console.log('click');
  }
  test() {
    console.log('test click');
  }
}
