import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Image } from '../models/Image';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private httpClient: HttpClient) {}

  public getAllImages(): Observable<Image[]> {
    return this.httpClient.get<Image[]>('http://localhost:59695/api/images');
  }
}
