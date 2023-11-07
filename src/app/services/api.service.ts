import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  url:string = 'https://localhost:7101/api/';

  PostMethod(params:any = {}, actionURL:string){
    return this.http.post(this.url + actionURL, params)
      .pipe(map((Response: any) => {
        return Response
      }));
  }

  GetMethod(actionURL:string){
    return this.http.get(this.url + actionURL)
      .pipe(map((Response:any) => {
        return Response;
      }));
  }
}
