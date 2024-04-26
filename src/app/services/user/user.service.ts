import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../interfaces/User';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  baseUrl = "http://localhost/php/users";

  insertUser(formData: FormData) {
    return this.http.post(`${this.baseUrl}/insertUser.php`, formData);

  };

  getUser(email: string, pass: string) {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('pass', pass);
    return this.http.post(`${this.baseUrl}/getUser.php`, formData);
  };


  updateUser(id: number, pass: string): void {
    this.http.post(`${this.baseUrl}/updateUser.php`, [id, pass]);
  }
}
