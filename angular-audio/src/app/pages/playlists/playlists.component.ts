import { Component, OnInit } from '@angular/core';
import { TracksService } from '../../services/tracks.service';

@Component({
  selector: 'app-playlists',
  templateUrl: './playlists.component.html',
  styleUrls: ['./playlists.component.scss']
})
export class PlaylistsComponent implements OnInit {
  playlist: any;
  name: any;
  constructor(private tracksService: TracksService){}

  ngOnInit(): void {
    this.initTracks();
  }


  initTracks() {
    this.tracksService.getPlaylist()
      .subscribe((res) => {
        // read in playlist file
        this.playlist = res;
    });
  }
}
