import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css'],
})
export class AddAccountComponent {
  newName: string;
  newStatut: string;
  @Output() sendAccountToHome = new EventEmitter();

  sendToHome() {
    this.sendAccountToHome.emit({
      name: this.newName,
      statut: this.newStatut,
    });
  }
}
