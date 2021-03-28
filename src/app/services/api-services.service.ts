import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  apiUrl = 'http://semillero.allsites.es/public/api/';
  token: any;
  constructor(private http: HttpClient) {}

  login(credentials: {email; password}) {
    return new Promise((resolve) => {
      this.http.post(this.apiUrl + 'login', credentials).subscribe(
        (data) => {
          this.token = data;
          resolve(data);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }

  register(credential: { name; surname; email; password }) {
    return new Promise((resolve) => {
      this.http.post(this.apiUrl + 'register', credential).subscribe(
        (data) => {
          resolve(data);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  }
}
