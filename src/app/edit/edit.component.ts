import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent {
  candidatToEdit: Candidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private candSer: ListCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    // V1 avec snapshot
    this.candidatToEdit = this.candSer.getCandidatById(
      this.activatedRoute.snapshot.paramMap.get('id')
    );
  }

  updateHandler() {
    this.candSer.updateCandidat(this.candidatToEdit);
    this.router.navigateByUrl('/cv');
  }
}
