import { RouterModule, Routes } from '@angular/router';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { InfosServerComponent } from './infos-server/infos-server.component';
import { EditServerComponent } from './edit-server/edit-server.component';

const subRoutes: Routes = [
  {
    path: '',
    component: HomeServersComponent,
    children: [
      { path: ':serverid', component: InfosServerComponent },
      { path: ':id/update', component: EditServerComponent },
    ],
  },
];

export const SUB_ROUTING = RouterModule.forChild(subRoutes);
