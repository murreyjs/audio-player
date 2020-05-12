import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-song-bar',
  templateUrl: './song-bar.component.html',
  styleUrls: ['./song-bar.component.scss']
})
export class SongBarComponent implements OnChanges, OnInit {
  @Input() track: any;
  durationDisplay = '0:00';
  positionDisplay = '0:00';
  position: number;
  duration: number;
  tLeft: number;

  constructor() {
  }

  ngOnInit()  {
  }

  ngOnChanges(): void {
    if (this.track) {
        this.track.onloadedmetadata = () => {
        this.duration = this.track.duration;
        const length = Math.round(this.duration);
        const min = Math.floor(length / 60);
        const sec = (length % 60) < 10 ? '0' + (length % 60) : (length % 60);
        this.durationDisplay = min + ':' + sec;
        setInterval(()  => {
          this.updateTime();
        }, 100);
      };
    }
  }

  updateTime() {
    this.position = this.track.currentTime;
    const time = Math.round(this.position);
    const min = Math.floor(time / 60);
    const sec = (time % 60) < 10 ? '0' + (time % 60) : (time  % 60);
    this.positionDisplay = min + ':' + sec;
    this.tLeft = Math.round(this.duration) - time;
    const m = Math.floor(this.tLeft/60);
    const s = (this.tLeft % 60) < 10 ? '0' + (this.tLeft% 60) : (this.tLeft  % 60);
    this.durationDisplay = m + ':' + s;
     
    
  }

  timeChange(time) {
    this.track.pause();
    this.track.currentTime = time.value;
    this.position = time.value;
    this.track.oncanplay = () => {
    this.track.play();
    };
  }

}
