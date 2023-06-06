import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { ListCandidatsService } from '../services/list-candidats.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
  providers: [FirstService],
})
export class CvComponent {
  tabCandidats: Candidat[] = [];
  selectedCand: Candidat;

  constructor(
    private firstSer: FirstService,
    private candidatsSer: ListCandidatsService
  ) {}

  ngOnInit() {
    console.log('Dans CV');

    this.firstSer.afficherInfos();
    this.tabCandidats = this.candidatsSer.getAllCandidats();
  }

  addNewCandidat() {
    this.candidatsSer.addCandidat();
  }

  showList() {
    console.log(this.candidatsSer.getAllCandidats());
  }

  recupererCandidat(cand) {
    this.selectedCand = cand;
  }
}
