import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  async getUser() {
    const res = await fetch('https://fakestoreapi.com/users');
    return res.json();
  }
}
