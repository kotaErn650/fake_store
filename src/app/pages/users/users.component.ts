import { Component, inject } from '@angular/core';
import { CardUserComponent } from '../../componets/card-user/card-user.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user',
  imports: [CardUserComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export default class UserComponent {
  users: any = [];
  userService = inject(UserService);

  ngOnInit() {
    this.getUser();
  }

  async getUser() {
    this.users = await this.userService.getUser();
  }
}
