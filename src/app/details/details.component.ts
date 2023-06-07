import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';
import { ListRecruesService } from '../services/list-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() selCandidat: Candidat;

  addNewRecrue() {
    this.recrueSer.addRecrue(this.selCandidat);
  }

  constructor(private recrueSer: ListRecruesService) {}

  // constructor(private fs: FirstService) {}

  // ngOnInit() {
  //   console.log('Details : ');

  //   this.fs.afficherInfos();
  // }
}
