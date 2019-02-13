import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageViewComponent} from './page-view/page-view.component';
import { KickHomeComponent} from './kick-home/kick-home.component';
import {OrasadaSongComponent} from './orasada-song/orasada-song.component';

const routes: Routes = [
  {path: 'page-view',component:PageViewComponent},
  {path: 'orasada-song-view',component:OrasadaSongComponent},
  {path: '',component:KickHomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[PageViewComponent,OrasadaSongComponent,KickHomeComponent];
