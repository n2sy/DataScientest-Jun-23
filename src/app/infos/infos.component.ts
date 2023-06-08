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
        this.selectedCandidat = this.candSer.getCandidatById(p.get('id'));
      },
    });
  }

  deleteHandler() {
    if (confirm('Etes-vous sur de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidat(this.selectedCandidat);
      this.router.navigateByUrl('/cv');
    }
  }
}
