import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class morseService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get('http://localhost:8080/human?words=holameli');
  }

 /*  getAllMorse(binarycode:string): Observable<any> {
    return this.http.get('http://localhost:8080/translate2human?binary=' + binarycode);
  }*/
  getAllMorse(binarycode:string): Observable<any> {
    return this.http.get('https://gcservice.appspot.com/translate2human?binary=' + binarycode); 
  }
}
