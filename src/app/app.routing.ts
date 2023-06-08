import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { NoTokenGuard } from './no-token.guard';

const myRoutes: Routes = [
  //Routes avec children
  { path: '', component: AccueilComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent, canActivate: [NoTokenGuard] },
      { path: ':id', component: InfosComponent },
      {
        path: ':id/edit',
        component: EditComponent,
        canActivate: [NoTokenGuard],
      },
    ],
  },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'login', component: LoginComponent },
  { path: 'ms-word', component: MsWordComponent },
  {
    path: 'servers',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },

  // Routes  non facotirsées
  //   { path: '', component: AccueilComponent },
  //   { path: 'cv', component: CvComponent },
  //   { path: 'cv/add', component: AddComponent },
  //   { path: 'cv/:id', component: InfosComponent },
  //   { path: 'cv/:id/edit', component: EditComponent },
  //   { path: 'accounts', component: HomeAccountComponent },
  //   { path: 'ms-word', component: MsWordComponent },
  //   { path: 'servers', component: ManageServersComponent },
  //   { path: 'not-found', component: NotFoundComponent },
  //   { path: '**', redirectTo: 'not-found' },
];

export const APP_ROUTING = RouterModule.forRoot(myRoutes);
