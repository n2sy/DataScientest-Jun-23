import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  prenom: string = 'Nathalie';
  color = 'pink';
  hd = false;

  traitement() {
    alert("J'ai été cliqué !");
  }
}
