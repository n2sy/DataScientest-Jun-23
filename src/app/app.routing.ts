import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InfosComponent } from './infos/infos.component';

const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'cv', component: CvComponent },
  { path: 'cv/:id', component: InfosComponent },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'servers', component: ManageServersComponent },
];

export const APP_ROUTING = RouterModule.forRoot(myRoutes);
