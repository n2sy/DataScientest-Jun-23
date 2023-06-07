import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent {
  id;
  constructor(private router: Router) {}

  goToAccounts() {
    //Traitement
    this.router.navigateByUrl('/accounts');
  }

  // cv/id/contact
  goToCv() {
    this.router.navigate(['/cv']);
  }
}
