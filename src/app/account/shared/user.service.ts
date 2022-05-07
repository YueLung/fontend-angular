import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserModel, UserResponseModel } from './model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  login(model: UserModel): Observable<UserResponseModel> {
    // const option = { responseType: 'text' as 'json' };
    return this.http.post<UserResponseModel>('~/api/Auth/signin', model);
  }
}
