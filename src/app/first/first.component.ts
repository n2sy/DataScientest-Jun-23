import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  prenom: string = 'Nathalie';
  color = 'red';
  hd = false;

  traitement() {
    alert("J'ai été cliqué !");
  }

  traiterEvent(msg: string) {
    alert(msg);
  }
}
