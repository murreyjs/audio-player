import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class playlistService {

  constructor(
    private http: HttpClient
  ) { }

  getplaylist() {
    return this.http.get('assets/playlist.json');
  }

}
