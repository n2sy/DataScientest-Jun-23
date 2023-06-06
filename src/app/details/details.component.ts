import { Component, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { FirstService } from '../services/first.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
})
export class DetailsComponent {
  @Input() selCandidat: Candidat;

  // constructor(private fs: FirstService) {}

  // ngOnInit() {
  //   console.log('Details : ');

  //   this.fs.afficherInfos();
  // }
}
