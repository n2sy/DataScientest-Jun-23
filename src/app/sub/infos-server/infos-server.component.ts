import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ListServerService } from '../list-server.service';

@Component({
  selector: 'app-infos-server',
  templateUrl: './infos-server.component.html',
  styleUrls: ['./infos-server.component.css'],
})
export class InfosServerComponent {
  oneServer;
  enableButton: boolean;
  constructor(
    private actRoute: ActivatedRoute,
    private servSer: ListServerService
  ) {}

  ngOnInit() {
    // this.oneServer = this.servSer.getServerById(
    //   this.actRoute.snapshot.paramMap.get('serverid')
    // );

    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.oneServer = this.servSer.getServerById(p.get('serverid'));
      },
    });

    this.actRoute.queryParamMap.subscribe({
      next: (q) => {
        this.enableButton = q.get('allowEdit') == '1' ? false : true;
      },
    });
  }
}
