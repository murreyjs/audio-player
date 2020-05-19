import { Component, OnInit } from '@angular/core';
import {playlistService} from '../../services/playlist.service';
import { AppModule } from 'src/app/app.module';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlist: any;
  name: any;
  constructor(private PlaylistService: playlistService){}

  ngOnInit(): void {
    this.initTracks();
  }

 
  initTracks() {
    this.PlaylistService.getplaylist()
      .subscribe((res) => {
        // read in playlist file
        this.playlist = res;
    });
  }
}
