import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/containers/login/login.component';
import { NavBarComponent } from './components/childs/nav-bar/nav-bar.component';
import { GameComponent } from './components/containers/game/game.component';
import { StartComponent } from './components/containers/game/start/start.component';
import { CardComponent } from './components/childs/card/card.component';
import { BoardComponent } from './components/containers/game/board/board.component';
import { EndComponent } from './components/containers/game/end/end.component';
import { CountdownComponent } from './components/childs/countdown/countdown.component';
import { CountdownPipe } from './utils/countdown.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    GameComponent,
    StartComponent,
    CardComponent,
    BoardComponent,
    EndComponent,
    CountdownComponent,
    CountdownPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
