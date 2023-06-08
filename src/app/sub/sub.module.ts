import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeServersComponent } from './home-servers/home-servers.component';
import { InfosServerComponent } from './infos-server/infos-server.component';
import { EditServerComponent } from './edit-server/edit-server.component';
import { SUB_ROUTING } from './sub.routing';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeServersComponent,
    InfosServerComponent,
    EditServerComponent,
  ],
  imports: [CommonModule, FormsModule, SUB_ROUTING],
})
export class SubModule {}
