import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent {
  allCandidats: Candidat[] = [];
  @Output() sendCandToCv = new EventEmitter();

  sendToCv(cand) {
    this.sendCandToCv.emit(cand);
  }

  constructor(private candSer: ListCandidatsService) {}

  ngOnInit() {
    //this.allCandidats = this.candSer.getAllCandidats();
    this.candSer.getAllCandidatsAPI().subscribe({
      next: (response: Candidat[]) => {
        this.allCandidats = response;
      },
      error: (err) => {
        alert('Données fictives');
        this.allCandidats = this.candSer.getAllCandidats();
      },
    });
  }

  showList() {
    console.log(this.candSer.getAllCandidats());
  }
}
