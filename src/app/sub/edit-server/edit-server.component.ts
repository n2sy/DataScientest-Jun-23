import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListServerService } from '../list-server.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css'],
})
export class EditServerComponent {
  serverToEdit;
  constructor(
    private actRoute: ActivatedRoute,
    private servSer: ListServerService
  ) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.serverToEdit = this.servSer.getServerById(p.get('id'));
      },
    });
  }
}
