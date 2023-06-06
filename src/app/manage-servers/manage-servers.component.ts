import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrls: ['./manage-servers.component.css'],
})
export class ManageServersComponent {
  listServers = [
    {
      nom: 'Production server',
      type: 'small',
      date_d: new Date(2020, 4, 2),
      statut: 'critical',
    },
    {
      nom: 'Testing Development server',
      type: 'large',
      date_d: new Date(2020, 4, 2),
      statut: 'stable',
    },
    {
      nom: 'Development server',
      type: 'medium',
      date_d: new Date(2020, 4, 2),
      statut: 'offline',
    },
    {
      nom: 'Nidhal server',
      type: 'small',
      date_d: new Date(2020, 4, 2),
      statut: 'stable',
    },
  ];

  affecterClasse(st) {
    return {
      //'list-group-item-success' : st == 'active' ? true : false,
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
