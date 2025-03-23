import { Component, inject } from '@angular/core';
import { CardUserComponent } from '../../componets/card-user/card-user.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-user',
  imports: [CardUserComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export default class UserComponent {
  users: any = [];
  usersService = inject(UsersService);

  ngOnInit() {
    this.getUsers();
  }

  async getUsers() {
    this.users = await this.usersService.getUsers();
  }
}
