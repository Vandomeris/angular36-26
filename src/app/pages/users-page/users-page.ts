import { Component, inject, OnInit, signal } from '@angular/core';
import { User } from '../../../types';
import { UserService } from '../../services/user-service';

@Component({
  selector: 'app-users-page',
  imports: [],
  templateUrl: './users-page.html',
  styleUrl: './users-page.css',
})
export class UsersPage implements OnInit {
  private userService = inject(UserService);

  users = signal<User[]>([]);

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users.set(data);
    });
  }
}
