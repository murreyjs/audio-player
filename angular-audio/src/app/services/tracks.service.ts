import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CONSTANTS } from "../app.constants";

@Injectable({
  providedIn: 'root',
})
export class TracksService {
  baseUrl = CONSTANTS.BASE_URL;

  constructor(
    private http: HttpClient
  ) { }

  getPlaylist() {
    return this.http.get('assets/playlist.json');
  }

  getTracks() {
    return this.http.get(this.baseUrl + "/tracks");
  }

}
