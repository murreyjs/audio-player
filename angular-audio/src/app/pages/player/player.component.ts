import { Component, OnInit } from '@angular/core';
import {TracklistService} from '../../services/tracklist.service';
import {AddPlaylistDialogComponent} from '../../dialogs/add-playlist-dialog/add-playlist-dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  selectedTrack: any;
  trackList: any;
  displayList: any;
  searchText: string;
  isPlaying: boolean;
  pTrack: any;
  hoverTrack: any;
  oTrack: any;
  ppButton: any;
  loadedSong: any;
  clickedButton: boolean;


  constructor(
    public dialog: MatDialog,
    private tracklistService: TracklistService
  ) { }

  ngOnInit(): void {
    this.initTracks();
  }

  initTracks() {
    this.tracklistService.getTracks()
      .subscribe((res) => {
        // set trackList and displayList equal to list of songs
        this.trackList = res;
        this.displayList = res;
    });
    this.isPlaying = false;
    this.ppButton = 'play';
    this.loadedSong = false;
    this.clickedButton = false;
  }


  trackClick(track: any){

    // if track is currently playing
    if (this.isPlaying) {

      // pause this.pTrack
      this.pauseCurrentTrack();

      // if a new track was selected, play that track
      if (this.selectedTrack !== track) {
        this.playTrack(track);
      }
    }
    // if track is not currently playing, play new track
    else {
      this.playTrack(track);
    }
  }

  pauseCurrentTrack() {
    this.pTrack.pause();
    this.isPlaying = false;
  }

  playTrack(track: any) {
    if (this.loadedSong === false) {
       this.loadedSong = true;
    }
    if (this.clickedButton === true) {
      this.clickedButton = false;
      return;
    }

    if (this.pTrack && !this.pTrack.paused) {
      this.pTrack.pause();
    }
    this.pTrack = new Audio();
    this.pTrack.src = track.src;
    this.pTrack.load();
    this.pTrack.play();
    this.isPlaying = true;
    this.selectedTrack = track;
    this.ppButton = 'pause';
  }

  filter() {
    this.displayList = this.trackList.filter(track => {
      return this.checkSearchConditions(track);
    });
  }

  // returns true if the title, artist or src contain the searchText, or if searchText string is empty
  checkSearchConditions(track) {
    const isTitle = track.title.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
    const isArtist = track.artist.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
    const isSrc = track.src.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1;
    return isTitle || isArtist || isSrc || (this.searchText === '');
  }

  removeSong(sTrack) {
    this.oTrack = sTrack;
  }

  addToPlaylist(sTrack) {
    this.oTrack = sTrack;
  }

  viewArtist(sTrack) {
    this.oTrack = sTrack;
  }

  viewAlbum(sTrack) {
    this.oTrack = sTrack;
  }

  openPlaylistDialog() {
      const dialogRef = this.dialog.open(AddPlaylistDialogComponent, {
        width: '400px',
        data: {}
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
  }

  showpp() {
    if (this.isPlaying === true) {
      this.ppButton = 'play';
      this.pTrack.pause();
      this.isPlaying = false;
    }
    else if (this.isPlaying === false && this.loadedSong === true) {
      this.ppButton = 'pause';
      this.pTrack.play();
      this.isPlaying = true;
    }
  }

  oButton() {
    this.clickedButton = true;
  }

}
