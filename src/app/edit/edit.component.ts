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
    this.candSer
      .getCandidatByIdAPI(this.activatedRoute.snapshot.paramMap.get('id'))
      .subscribe({
        next: (response: Candidat) => {
          this.candidatToEdit = response;
        },
        error: (err) => {
          alert('Ce candidat est introuvable');
        },
      });
  }

  updateHandler() {
    this.candSer.updateCandidatAPI(this.candidatToEdit).subscribe({
      next: (response) => {
        alert(response['message']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        alert("Ce candidat n'a pas pu être mis à jour");
      },
    });
  }
}
