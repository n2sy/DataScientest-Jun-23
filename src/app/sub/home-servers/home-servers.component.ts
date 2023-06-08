import { Component } from '@angular/core';
import { ListServerService } from '../list-server.service';

@Component({
  selector: 'app-home-servers',
  templateUrl: './home-servers.component.html',
  styleUrls: ['./home-servers.component.css'],
})
export class HomeServersComponent {
  allServers = [];

  constructor(private serverSer: ListServerService) {}

  ngOnInit() {
    this.allServers = this.serverSer.tabServers;
  }
}
