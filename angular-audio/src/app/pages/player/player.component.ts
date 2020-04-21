import { Component, OnInit } from '@angular/core';
import {TracklistService} from '../services/tracklist.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  selectedTrack: any;
  tracklist: any;

  constructor(
    private tracklistService: TracklistService
  ) { }

  ngOnInit(): void {
    this.initTracks();
  }

  initTracks() {
    this.tracklistService.getTracks()
      .subscribe((res) => {
        this.tracklist = res;
      });
  }

  play() {
    const track = new Audio();
    track.src = this.selectedTrack.src;
    track.load();
    track.play();
  }

}
