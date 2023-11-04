import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  

 

  private apiUrl = 'http://locahosst:8081/api/messages'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getmessages(): Observable<Array<{ message: string }>> {
    // Make an HTTP GET request to your API endpoint
    // Replace 'your_endpoint_path' with the actual path to your messages API
    return this.http.get<Array<{ message: string }>>(`${this.apiUrl}/all`);
  }
}
