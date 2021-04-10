import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatumOpinion, ResPlagues } from '../interfaces/interfaces';

const TOKEN_KEY = 'my-token';
@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  apiUrl = 'http://semillero.allsites.es/public/api/';
  token: any;

  constructor(private http: HttpClient) {}

  login(credentials: { email; password }) {
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

  getUsers() {
    return new Promise((resolve) => {
      this.http
        .get(this.apiUrl + 'users', {
          headers: new HttpHeaders().set(
            'Authorization',
            'Bearer ' + this.token.data.token
          ),
        })
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
          }
        );
    });
  }
  getOpinions() {
    return new Promise((resolve) => {
      this.http
        .get<DatumOpinion>(this.apiUrl + 'opinions', {
          headers: new HttpHeaders().set(
            'Authorization',
            'Bearer ' + this.token.data.token
          ),
        })
        .subscribe(
          (data) => {
            resolve(data);
          },
          (err) => {
            console.log(err);
          }
        );
    });
  }
  getPlagues() {
    return new Promise((resolve) => {
      this.http
        .get<ResPlagues>(this.apiUrl + 'plagues', {
          headers: new HttpHeaders().set(
            'Authorization',
            'Bearer ' + this.token.data.token
          ),
        })
        .subscribe(
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
