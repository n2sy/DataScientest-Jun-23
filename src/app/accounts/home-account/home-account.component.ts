import { Component } from '@angular/core';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrls: ['./home-account.component.css'],
})
export class HomeAccountComponent {
  tabAccounts = [
    {
      name: 'Nidhal Account',
      statut: 'active',
    },
    {
      name: 'Peter Account',
      statut: 'inactive',
    },
  ];

  addNewAccount(newAcc) {
    this.tabAccounts.push(newAcc);
    console.log(this.tabAccounts);
  }
}
