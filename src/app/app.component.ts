import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'DataScientest-June-23';

  traiterEvent(msg: string) {
    this.title = msg;
  }
}
