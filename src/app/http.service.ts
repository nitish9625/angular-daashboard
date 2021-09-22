import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(
    private http: HttpClient
  ) { }

  // getRequest(url: string): void{
  //   // this.http.get(url).subscribe((response)=>{
  //   //   console.log(response)
  //   })
  getRequest(url: string):Observable<any>{
    return this.http.get(url);
  }
  postRequest(url: string, data: any,option?: any): Observable<any>{
    return this.http.post(url,data, option);
  }
  updateRequest(url: string, data: any,option?: any): Observable<any>{
    return this.http.put(url, data, option)
  }
  }

 