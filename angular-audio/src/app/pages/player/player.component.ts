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
  isPlaying: boolean;
  pTrack: any;
 

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

    this.isPlaying = false;
  }

  
  play(track: any){

if(this.isPlaying == true)
{
  this.pTrack.pause();
}

this.pTrack = new Audio();
this.pTrack.src = track.src;
this.pTrack.load();
this.pTrack.play();
this.isPlaying = true;
  
}

pause()
{
  this.pTrack.pause();
  this.isPlaying = false;
}
}

