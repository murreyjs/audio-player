import { Component, OnInit } from '@angular/core';
import {TracklistService} from '../services/tracklist.service';
import { element } from 'protractor';
import { NgForOf } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';

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
  ppText: any;
  tempTrack: any;
  i: any;
 

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

    this.ppText ="pause";
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
  if(this.isPlaying == true)
  {
  this.ppText = "play"
  this.pTrack.pause();
  this.isPlaying = false;
  }
  else if(this.isPlaying == false)
  {
    this.ppText = "pause";
    this.pTrack.play();
    this.isPlaying = true;
  }
}

filter(temp: any)
{


  this.tracklist.forEach(function (track) {
    
    
    
  }); 



}
}

