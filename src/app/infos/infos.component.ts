import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ListCandidatsService } from '../services/list-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  selectedId;
  selectedCandidat: Candidat;
  constructor(
    private activatedRoute: ActivatedRoute,
    private candSer: ListCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.params['id']);

    // V1 avec snapshot
    //this.selectedId = this.activatedRoute.snapshot.paramMap.get('id');

    //V2 avec les Observables
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.candSer.getCandidatByIdAPI(p.get('id')).subscribe({
          next: (response: Candidat) => {
            this.selectedCandidat = response;
          },
          error: (err) => {
            alert('Ce candidat est introuvable');
          },
        });
      },
    });
  }

  deleteHandler() {
    if (confirm('Etes-vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidatAPI(this.selectedCandidat).subscribe({
        next: (response) => {
          alert(
            `${response['result']['prenom']} ${response['result']['nom']} a été bien supprimé`
          );
          this.router.navigateByUrl('/cv');
        },
        error: (err) => {
          alert('Impossible de supprimer ce candidat !');
        },
      });
    }
  }
}
