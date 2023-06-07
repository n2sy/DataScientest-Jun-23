import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.css'],
})
export class InfosComponent {
  selectedId;
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    //console.log(this.activatedRoute.snapshot.params['id']);

    // V1 avec snapshot
    //this.selectedId = this.activatedRoute.snapshot.paramMap.get('id');

    //V2 avec les Observables
    this.activatedRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selectedId = p.get('id');
      },
    });
  }
}
