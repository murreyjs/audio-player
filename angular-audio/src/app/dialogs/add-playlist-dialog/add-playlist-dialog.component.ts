import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {TracksService} from '../../services/tracks.service';

@Component({
  selector: 'app-add-playlist-dialog',
  templateUrl: './add-playlist-dialog.component.html'
})
export class AddPlaylistDialogComponent implements OnInit {
  fs: any;
  playlists: any;

  constructor(
    public dialogRef: MatDialogRef<AddPlaylistDialogComponent>,
    private playlistService: TracksService
  ) {}

  ngOnInit(): void {
    // this.fs = require('fs');
  }

  onCreate(): void {
    this.playlistService.getPlaylist()
      .subscribe(res => {
        this.playlists = res;
        this.playlists.push({})
      });
    this.dialogRef.close();
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
