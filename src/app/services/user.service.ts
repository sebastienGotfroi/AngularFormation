import { User } from '../models/user.models';
import {Subject } from 'rxjs';

export class UserService {

  private users: User[] = [
    {
      firstName: 'James',
      lastName: 'Smith',
      email: 'james.smith@gmail.com',
      drinkPreference: 'coca',
      hobbies: [
        'guitare',
        'coding'
      ]
    }
  ];
  userSubject = new Subject<User[]>();

  emitUsers() {
    this.userSubject.next(this.users.slice());
  }

  addUser(user: User) {
    this.users.push(user);
    this.emitUsers();
  }
}
