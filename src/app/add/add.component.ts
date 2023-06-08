import { Component } from '@angular/core';
import { ListCandidatsService } from '../services/list-candidats.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  constructor(private candSer: ListCandidatsService, private router: Router) {}
  addNewCandidat(newCand) {
    console.log(newCand);
    this.candSer.addCandidat(newCand);
    this.router.navigateByUrl('/cv');
  }
}
