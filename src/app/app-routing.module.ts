import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './components/containers/login/login.component';
import {GameComponent} from './components/containers/game/game.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: 'game', component: GameComponent, canActivate: [AuthGuard]
  { path: 'game', component: GameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
