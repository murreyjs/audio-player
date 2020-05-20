import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerComponent } from './pages/player/player.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SongBarComponent } from './components/song-bar/song-bar.component';
import { AddPlaylistDialogComponent } from './dialogs/add-playlist-dialog/add-playlist-dialog.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PlaylistsComponent } from './pages/playlists/playlists.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    SongBarComponent,
    AddPlaylistDialogComponent,
    MainPageComponent,
    PlaylistsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
