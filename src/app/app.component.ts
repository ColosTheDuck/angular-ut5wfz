import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name: string = '';
  clickCounter: number = 0;

  countClick()
  {
    this.clickCounter++;
  }
}
