import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TracklistService {

  constructor(
    private http: HttpClient
  ) { }

  getTracks() {
    return this.http.get('assets/tracklist.json');
  }

}
