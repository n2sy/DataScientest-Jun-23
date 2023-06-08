import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ListServerService {
  tabServers = [
    {
      id: 1,
      nom: 'Sophie Server',
      statut: 'online',
    },
    {
      id: 2,
      nom: 'Peter Server',
      statut: 'offline',
    },
    {
      id: 3,
      nom: 'Georges Server',
      statut: 'online',
    },
  ];

  constructor() {}

  getServerById(serverId) {
    for (let i = 0; i < this.tabServers.length; i++)
      if (this.tabServers[i].id == serverId) return this.tabServers[i];

    return null;
  }
}
