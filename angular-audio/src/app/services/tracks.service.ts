import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TracksService {

  constructor(
    private http: HttpClient
  ) { }

  getPlaylist() {
    return this.http.get('assets/playlist.json');
  }

  getTracks() {
    return this.http.get('assets/tracklist.json');
  }

}
