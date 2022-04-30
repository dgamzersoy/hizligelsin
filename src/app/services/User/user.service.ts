import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { User } from '../../models/user';
import { BaseClassService } from '../base-class.service';

@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseClassService<User> {

  constructor(httpClient:HttpClient) {
    super(httpClient);
    this.path += "users";


}
}