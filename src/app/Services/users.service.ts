import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Models/user.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environments.local';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private urlIndex = environment.index;
  constructor(private readonly http: HttpClient) { }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>(this.urlIndex);
  }
}
