import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerAddPageComponent } from './player-add-page/player-add-page.component';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerUpdatePageComponent } from './player-update-page/player-update-page.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'playerList',
  },
  {
    path: 'playerList',
    component: PlayerListComponent,
  },
  {
    path: 'createPlayer',
    component: PlayerAddPageComponent
  },
  {
    path: 'updatePlayer/:id',
    component: PlayerUpdatePageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
